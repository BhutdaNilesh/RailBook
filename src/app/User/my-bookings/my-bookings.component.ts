import { Component } from '@angular/core';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.css'],
})
export class MyBookingsComponent {
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
