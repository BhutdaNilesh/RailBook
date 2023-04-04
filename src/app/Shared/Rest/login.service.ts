import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './Users';
import { Admin } from './Admin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  API='http://localhost:9595';


  constructor(private http:HttpClient) { }
 user:Users|undefined;

  public registerUser(user:Users)
  {

    
    return this.http.post(this.API+'/registerUser',user);
  }
  public registerAdmin(user:Admin)
  {

    
    return this.http.post(this.API+'/registerAdmin',user);
  }

  public loginUser(email :String ,pass:String)
  {
    return this.http.get(this.API+"/loginUser/"+email+"/"+pass);
  }

  public loginAdmin(email :String ,pass:String)
  {
    return this.http.get(this.API+"/loginAdmin/"+email+"/"+pass);
  }
}
