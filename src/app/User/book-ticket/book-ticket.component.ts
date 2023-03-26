import { Component } from '@angular/core';

@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent {

  trains = [
    {train_number : 100, train_name : "RAJDHANI EXPRESS", departure_time : "05:00 AM",origin : "PUNE", destination_time:"05:00 PM", destination:"NAGPUR", ac_seats: 50, sleeper_seats: 60, seater_seats: 70}
  ]

  
}
