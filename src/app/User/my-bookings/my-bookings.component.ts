import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BookingService } from '../Rest/booking.service';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../Rest/booking';
import { Router } from '@angular/router';
import { RoleDefineService } from 'src/app/role-define.service';
import { forkJoin } from 'rxjs';
import { Location } from '@angular/common';
import { Train } from '../Rest/train';


declare var $: any;

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css'],
})
export class MyBookingsComponent implements OnInit {
  newBooking: Booking[] = [];
  pass: any[] = [];
  passData: any[] = [];
  train: Train[] = [];

  constructor(
    private bookingServ: BookingService,
    private route: Router,
    private userServ: RoleDefineService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.bookingServ.getAllBooking(this.userServ.loggedId).subscribe(
      (resp: any) => {
        this.newBooking = resp;

        for (let i = 0; i < this.newBooking.length; i++) {
          let passlist = this.newBooking[i].passengerList;
          let trainId = this.newBooking[i].train_id;

          this.bookingServ.getTrain(trainId).subscribe((train_data: any) => {
            this.train.push(train_data);
          });

          let passData: any[] = [];
          for (let j = 0; j < passlist.length; j++) {
            this.bookingServ
              .getPassenger(passlist[j])
              .subscribe((data: any) => {
                passData.push(data);
              });
          }
          this.pass.push(passData);
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }

  book: any = {};
  ind: number = 0;

 

  view(booking: any, index: number) {
    this.book = booking;
    this.ind = index;
  }

  cancelTicket() {
    const bookingId = this.book.booking_id;
    const confirmDelete = confirm(
      `Do you want to delete ticket with id: ${bookingId}?`
    );

    if (confirmDelete) {
      this.bookingServ.deleteBooking(bookingId).subscribe(
        (resp: any) => {
          this.route.navigateByUrl('/MyBookings');
          this.ngOnInit();
          console.log(`Booking with id ${bookingId} was deleted successfully.`);
        },
        (err) => {
          console.log(`Error deleting booking with id ${bookingId}:`, err);
        }
      );
    }

    
  }
}
