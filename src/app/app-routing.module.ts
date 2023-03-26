import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageTrainsComponent } from './Admin/manage-trains/manage-trains.component';
import { HomeComponent } from './Shared/home/home.component';
import { BookTicketComponent } from './User/book-ticket/book-ticket.component';
import { MyBookingsComponent } from './User/my-bookings/my-bookings.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "Home", component: HomeComponent },
  { path: "ManageTrains", component: ManageTrainsComponent },
  { path: "BookTicket", component:  BookTicketComponent},
  { path: "MyBookings", component: MyBookingsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
