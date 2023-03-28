import { Component, NgIterable } from '@angular/core';


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent {

  trains = [
    {train_number : 1000003, train_name : "RAJDHANI EXPRESS", departure_time : "05:00 AM",origin : "PUNE", destination_time:"05:00 PM", destination:"NAGPUR", ac_seats: 50, sleeper_seats: 60, seater_seats: 70},
    {train_number : 1000002, train_name : "SAHYADRI EXPRESS", departure_time : "05:00 AM",origin : "MUMBAI", destination_time:"05:00 PM", destination:"KOLHAPUR", ac_seats: 50, sleeper_seats: 60, seater_seats: 70}
  ]


  bookNow(){
    
    
  }

  j_Class : String = "AC";
  no_Of_Passengers : number = 1;
  passeneger_array: any  = [];

  nextClicked:boolean = false;

  nextButton(){
    this.nextClicked= true;
    this.passeneger_array = [];
    for(let i=1; i<=this.no_Of_Passengers; i++){
      this.passeneger_array.push(i);
    }
  }

  close(){
    this.nextClicked = false;
    this.no_Of_Passengers = 1;
  }

  selectedValue: String = "";
}
