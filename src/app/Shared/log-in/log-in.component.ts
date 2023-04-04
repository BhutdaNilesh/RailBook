import { Component } from '@angular/core';
import { LoginService } from '../Rest/login.service';
import { Users } from '../Rest/Users';
import { Router } from '@angular/router'; 
import { RoleDefineService } from 'src/app/role-define.service';
import { AuthServiceService } from 'src/app/RestAuth/auth-service.service';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LogInComponent {
  isRegistered = true;
  isAdmin = false;

  'username': String;
  'password': String;
  'email': String;
  'phone_number': String;

  'login_pass': String;
  'login_email': String;

  constructor(private loginServ: LoginService,private route:Router,public roleServ:RoleDefineService,private authserv:AuthServiceService) {

  }

  goToAdminPanel() {
    this.roleServ.changeRole();
    
    this.isAdmin = true;
  }
  goToRegister() {
    this.isRegistered = false;
  }
  goToLogin()
  {
    this.isRegistered = true;
  }
  // goToAdmin()
  // {
  //   this.isAdmin=false;

    
  // }
  goToUser()
  {
    this.roleServ.changeRole();
    this.isAdmin=false;
  }

  RegisterUser() {
    console.log(this.username);

    this.loginServ
      .registerUser(
        new Users(this.email, this.phone_number, this.username, this.password)
      )
      .subscribe(
        (resp) => {
          console.log(resp);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  RegisterAdmin() {
    this.loginServ
      .registerAdmin(
        new Users(this.email, this.phone_number, this.username, this.password)
      )
      .subscribe(
        (resp) => {
          console.log(resp);
        },
        (err) => {
          console.log(err);
        }
      );
  }
  user:any
  loginUser()
  {
    console.log(this.login_email);
    
    
    this.loginServ.loginUser(this.login_email,this.login_pass).subscribe((resp)=>{
      if(resp)
      {
        console.log(resp);
          this.user=resp;
          this.authserv.login();
           this.roleServ.loggedId=this.user.user_id;
           
           
          this.route.navigateByUrl("/Home")
      }
      else{

      }
    },
    (err)=>{
      console.log(err);
      
    })
  }
  loginAdmin()
  {
    console.log(this.login_email);
    
    
    this.loginServ.loginAdmin(this.login_email,this.login_pass).subscribe((resp)=>{
      if(resp)
      {
        console.log("sdsbbdiu");
        
        this.authserv.login();
        
          // this.roleServ.changeRole()
          this.route.navigateByUrl("/AllTrains")
      }
      else{

      }
    },
    (err)=>{
      console.log(err);
      
    })
  }
}
