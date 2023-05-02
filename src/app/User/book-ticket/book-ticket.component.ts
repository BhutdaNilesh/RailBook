import { Component, NgIterable } from '@angular/core';
import { Passenger } from '../Rest/passenger';
import { BookingService } from '../Rest/booking.service';
import { Booking } from './booking';
import { RoleDefineService } from 'src/app/role-define.service';


@Component({
  selector: 'app-book-ticket',
  templateUrl: './book-ticket.component.html',
  styleUrls: ['./book-ticket.component.css']
})
export class BookTicketComponent {

  constructor(private bookingServ : BookingService,private getUserIdServ:RoleDefineService) {}

  origin : any;
  destination : any;
  date: any;
  searched_trains:any = [];

  search(){
    this.bookingServ.searchTrains(this.origin, this.destination, this.date).subscribe((resp)=>{
      this.searched_trains = resp;
      console.log(resp);
      
    },
      (err)=>{
        console.log(err);
      }
    );

    // console.log(this.searched_trains);
  }

  trains = [
    {train_number : 1003, train_name : "RAJDHANI EXPRESS", date : "2023-03-29", departure_time : "05:00 AM",origin : "PUNE", destination_time:"05:00 PM", destination:"NAGPUR", ac_seats: 2, sleeper_seats: 60, seater_seats: 70},
    {train_number : 1002, train_name : "SAHYADRI EXPRESS", date : "2023-03-29", departure_time : "05:00 AM",origin : "MUMBAI", destination_time:"05:00 PM", destination:"KOLHAPUR", ac_seats: 50, sleeper_seats: 60, seater_seats: 70}
  ]

  

  booking_train : any = this.trains[0];

  bookNow(train:any){
    this.booking_train = train;
  }

  j_Class : string = "AC";
  no_Of_Passengers : number = 1;
  passeneger_array : any[]= [];
  passList: any[] = [];
  pass1 : Passenger = new Passenger("",0,"");
  pass2 : Passenger = new Passenger("",0,"");
  pass3 : Passenger = new Passenger("",0,"");
  seats : number = 0;


  nextClicked:boolean = false;

  nextButton(){
    if(this.j_Class == "AC"){
      this.seats = this.booking_train.no_of_AC;
    }
    else if(this.j_Class == "Sleeper"){
      this.seats = this.booking_train.no_of_Sleeper;
    }
    else {
      this.seats = this.booking_train.no_of_Seater;
    }

    if(this.seats >= this.no_Of_Passengers){
      this.nextClicked= true;
      this.passList = [];
      this.passeneger_array = [];
   
      this.passeneger_array.push(this.pass1);
      this.passeneger_array.push(this.pass2);
      this.passeneger_array.push(this.pass3);

      for(let i=0; i<this.no_Of_Passengers; i++){
        this.passList.push(this.passeneger_array[i]);
      }
    }
    else{
      alert("Seats are unavaible in " + this.j_Class + " class.");
    }

    // alert(this.j_Class);
  }

  close(){
    this.nextClicked = false;
    this.no_Of_Passengers = 1;
    this.passList = [];
    this.pass1 = new Passenger("",0,"");
    this.pass2 = new Passenger("",0,"");
    this.pass3 = new Passenger("",0,"");
    this.passeneger_array = [];
    this.bookPass = [];
  }


  // Booking Ticket and saving data to database

  bookPass : number[] = [];
  ticket : any ;
  pass_id : number = 1;
  // valid:boolean = true;

  validate(){
    for(let i=0; i<this.no_Of_Passengers; i++){
      if(this.passList[i].name==""){
        return false;
      }
      if(this.passList[i].gender==""){
        // this.valid = false;
        return false;
      }
      if(this.passList[i].age<=0){
        // this.valid = false;
        return false;
      }
    }
    return true;
  }
  
  book() {
   
    if(this.validate()){
      for (let i = 0; i < this.no_Of_Passengers; i++) {
        this.bookingServ.registerPassenger(this.passList[i]).subscribe(
          (resp) => {
            this.pass_id = +resp;
            this.bookPass.push(this.pass_id);
            
            // Only create the Booking object when all passenger IDs are available
            if (this.bookPass.length == this.no_Of_Passengers) {
              console.log(this.bookPass.length);
              alert("Congratulation! your tocket is booked. \nYou have have booked ticket for : " + this.bookPass.length + " Passengers");
              this.ticket = new Booking(
                this.no_Of_Passengers,
                this.j_Class,
                this.getUserIdServ.loggedId,
                this.booking_train.train_id,
                this.bookPass
              );
  
              this.bookingServ.registerBooking(this.ticket).subscribe(
                (resp) => {
                  console.log(resp);
                },
                (Err) => {
                  console.log(Err);
                }
              );
  
              this.bookingServ.updateSeats(this.bookPass.length,this.j_Class,this.booking_train).subscribe((resp)=>{
                this.search();
              });
              
            }
          },
          (Err) => {
            console.log(Err);
          }
        );
      }
  
      this.nextClicked = false;
    }
    else{
        alert("Please give valid passenger details.")
    }
  }

}
  
  
