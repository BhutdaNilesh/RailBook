import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from './passenger';
import { Booking } from '../book-ticket/booking';


@Injectable({
  providedIn: 'root',
})
export class BookingService {
  API = 'http://localhost:8989';

  constructor(private http: HttpClient) {}

  public getAllBooking(id:number) {
    return this.http.get(this.API + '/booking/getBookingsByid/' + id);
  }

  public getPassenger(id: number) {
    return this.http.get(this.API + '/passenger/getPasseneger/' + id);
  }

  public getTrain(id: number) {
    return this.http.get(this.API + '/train/getTrain/' + id);
  }

  public deleteBooking(id:number){
     return this.http.delete(this.API + '/booking/deleteTicket/' + id)
  }

  // Storing passenger data
  public registerPassenger(pass : Passenger){
    let strURL : string = this.API + '/passenger/registerPassenger' ;
    return this.http.post(strURL, pass);
  }

  // stroing ticket data
  public registerBooking(ticket : Booking){
    let strURL : string = this.API + '/booking/bookTicket' ;
    
    console.log(ticket);
    
    return this.http.post(strURL, ticket);
  }

  public searchTrains(origin:string, destination:string, date:any){
    return this.http.get(this.API + '/train/getTrainSD/' + origin + '/' + destination + '/' + date);
  }

  public updateSeats(count:number, j_class:string,train:any){
    return this.http.put(this.API + '/train/updateSeats/' + count + '/' + j_class , train);
  }
}
