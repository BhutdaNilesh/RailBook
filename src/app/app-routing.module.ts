import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTrainsComponent } from './Admin/all-trains/all-trains.component';
import { ManageTrainsComponent } from './Admin/manage-trains/manage-trains.component';
import { HomeComponent } from './Shared/home/home.component';
import { BookTicketComponent } from './User/book-ticket/book-ticket.component';
import { MyBookingsComponent } from './User/my-bookings/my-bookings.component';
import { LogInComponent } from './Shared/log-in/log-in.component';
import { AuthGuardService } from './RestAuth/auth-guard.service';

const routes: Routes = [
  { path: "", component: LogInComponent },
  { path: "LogIn", component: LogInComponent },
  { path: "Home", component: HomeComponent,canActivate: [AuthGuardService] },
  { path: "ManageTrains", component: ManageTrainsComponent,canActivate: [AuthGuardService] },
  { path: "BookTicket", component:  BookTicketComponent,canActivate: [AuthGuardService]},
  { path: "MyBookings", component: MyBookingsComponent ,canActivate: [AuthGuardService]},
  { path: "AllTrains", component: AllTrainsComponent,canActivate: [AuthGuardService]  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
