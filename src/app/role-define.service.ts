import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleDefineService {

  constructor() { }
  isAdmin:boolean=false;

  loggedId:number | any;
  public  changeRole()
  {
    console.log("in change");
    
    this.isAdmin=!this.isAdmin;
    console.log("admin val="+this.isAdmin);
    
  }
  public getRole()
  {
    return this.isAdmin;
  }
}
