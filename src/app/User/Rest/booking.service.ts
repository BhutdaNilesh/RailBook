import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from './passenger';
import { Booking } from '../book-ticket/booking';


@Injectable({
  providedIn: 'root',
})
export class BookingService {
  API = 'http://localhost:9595';

  constructor(private http: HttpClient) {}

  public getAllBooking(id:number) {
    return this.http.get(this.API + '/getBookingsByid/' + id);
  }

  public getPassenger(id: number) {
    return this.http.get(this.API + '/getPasseneger/' + id);
  }

  public getTrain(id: number) {
    return this.http.get(this.API + '/getTrain/' + id);
  }

  public deleteBooking(id:number){
     return this.http.delete(this.API + '/deleteTicket/' + id)
  }

  // Storing passenger data
  public registerPassenger(pass : Passenger){
    let strURL : string = this.API + '/registerPassenger' ;
    return this.http.post(strURL, pass);
  }

  // stroing ticket data
  public registerBooking(ticket : Booking){
    let strURL : string = this.API + '/bookTicket' ;
    
    console.log(ticket);
    
    return this.http.post(strURL, ticket);
  }

  public searchTrains(origin:string, destination:string, date:any){
    return this.http.get(this.API + '/getTrainSD/' + origin + '/' + destination + '/' + date);
  }

  public updateSeats(count:number, j_class:string,train:any){
    return this.http.put(this.API + '/updateSeats/' + count + '/' + j_class , train);
  }
}
