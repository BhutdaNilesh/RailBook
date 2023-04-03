import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  API = 'http://localhost:9595';

  constructor(private http: HttpClient) {}

  public getAllBooking() {
    return this.http.get(this.API + '/getAllBookings');
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
}
