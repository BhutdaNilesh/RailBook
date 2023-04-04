import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageTrainsComponent } from './Admin/manage-trains/manage-trains.component';
import { BookTicketComponent } from './User/book-ticket/book-ticket.component'; 
import { MyBookingsComponent } from './User/my-bookings/my-bookings.component'; 
import { HomeComponent } from './Shared/home/home.component';
import { AllTrainsComponent } from './Admin/all-trains/all-trains.component';
import { BookingService } from './User/Rest/booking.service';
import { LogInComponent } from './Shared/log-in/log-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageTrainsComponent,
    BookTicketComponent,
    MyBookingsComponent,
    HomeComponent,
    AllTrainsComponent,
    LogInComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BookingService],
  bootstrap: [AppComponent]
})
export class AppModule {

 
 }
