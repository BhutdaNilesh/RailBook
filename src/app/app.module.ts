import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManageTrainsComponent } from './Admin/manage-trains/manage-trains.component';
import { BookTicketComponent } from './User/book-ticket/book-ticket.component'; 
import { MyBookingsComponent } from './User/my-bookings/my-bookings.component'; 
import { HomeComponent } from './Shared/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ManageTrainsComponent,
    BookTicketComponent,
    MyBookingsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 
 }
