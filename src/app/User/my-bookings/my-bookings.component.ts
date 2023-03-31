import { Component,OnInit } from '@angular/core';
import { BookingService } from '../Rest/booking.service';
import { HttpClient } from '@angular/common/http';
import { Booking } from '../Rest/booking';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css'],
})
export class MyBookingsComponent implements OnInit{
  newBooking :Booking[] = [];
  pass : any[] = [];

 constructor(private bookingServ : BookingService){}

  ngOnInit(): void {
    this.bookingServ.getAllBooking().subscribe((resp:any)=>{
      // console.log(resp);
      this.newBooking = resp;
    },
    
    (err) => {
      console.log(err);
    });

    for(let i=0; i<this.newBooking.length; i++){
      let passlist = this.newBooking[i].passengerList;

      console.log(i);
      for(let j=0; j<passlist.length; j++){
        this.bookingServ.getPassenger(passlist[j]).subscribe((resp:any)=>{
          console.log(j);
        })
      }
    }
    
    
  }
  bookings = [
    {
      id: 1,
      name: 'Nilesh',
      age: 22,
      gender: 'Male',
      source: 'Nanded',
      destination: 'Pune',
      date: '2023-04-01',
      train_name: 'Panvel Express',
      cancelled: false,
    },
    {
      id: 2,
      name: 'Suraj',
      age: 22,
      gender: 'Male',
      source: 'Pune',
      destination: 'Kolhapur',
      date: '2023-04-01',
      train_name: 'Kolhapur Express',
      cancelled: false,
    },
    {
      id: 3,
      name: 'Piyush',
      age: 22,
      gender: 'Male',
      soruce: 'Pune',
      destination: 'Dhule',
      date: '2023-04-01',
      train_name: 'Dhule Express',
      cancelled: false,
    },
  ];


  cancelBooking(id: number) {
    const booking = this.bookings.find((b) => b.id === id);
    if (booking) {
      booking.cancelled = true;
    }
  }

  book: any = [];

  view(booking: any) {
    this.book = booking;
  }
  
}
