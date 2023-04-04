import { Component, OnInit } from '@angular/core';
import { BookingService } from '../Rest/booking.service';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../Rest/booking';
import { Router } from '@angular/router';
import { RoleDefineService } from 'src/app/role-define.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css'],
})
export class MyBookingsComponent implements OnInit {
  newBooking: Booking[] = [];
  pass: any[] = [];
  passData: any[] = [];

  train: any[] = [];

  constructor(private bookingServ: BookingService,
    private route: Router, private userServ:RoleDefineService) {}

  ngOnInit(): void {
    this.bookingServ.getAllBooking(this.userServ.loggedId).subscribe(
      (resp: any) => {
        // console.log(resp);
        this.newBooking = resp;
    
        for (let i = 0; i < this.newBooking.length; i++) {
          let passlist = this.newBooking[i].passengerList;
    
          let trainId = this.newBooking[i].train_id;
    
          this.bookingServ.getTrain(trainId).subscribe((train_data: any) => {
            this.train.push(train_data);
            console.log(train_data);
          });
    
          let passData: any[] = []; // move the initialization here
          // console.log(passlist);
          for (let j = 0; j < passlist.length; j++) {
            this.bookingServ
              .getPassenger(passlist[j])
              .subscribe((data: any) => {
                passData.push(data); // push the passenger data here
              });
          }
          this.pass.push(passData); // push the passData array here
        }
        console.log(this.pass)
        console.log(this.newBooking)
      },
      
      (err) => {
        console.log(err);
      }
    );    
  }

  book: any = [];
  ind: number = 0;
  view(booking: any, index: number) {
    this.book = booking;
    this.ind = index;

    console.log(this.book)
  }

  cancelTicket() {
    const bookingId = this.book.booking_id;
    const confirmDelete = confirm(`Do you want to delete ticket with id: ${bookingId}?`);

    if (confirmDelete) {
      this.bookingServ.deleteBooking(bookingId).subscribe(
        (resp: any) => {
          // handle success response if needed
          this.route.navigateByUrl('/MyBookings')
          location.reload()
          console.log(`Booking with id ${bookingId} was deleted successfully.`);
        },
        (err) => {
          // handle error response if needed
          console.log(`Error deleting booking with id ${bookingId}:`, err);
        }
      );
    }
  }
  
}
