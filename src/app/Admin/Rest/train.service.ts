


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { trains } from './trains';
import { Time } from '@angular/common';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TrainService {


  API='http://localhost:8989';
  Train:trains | undefined;
    constructor(private http:HttpClient) {


    }
   public add(train_id:number,train_name:String,source_station:String,destination_station:String,departure_time:Time,arrival_time:Time
    ,departure_date:Date,arrival_date:Date, no_of_AC:number,no_of_Seater:number,no_of_Sleeper:number)
   {
     this. Train=new trains(train_id,
      train_name,
      source_station,
      destination_station,
      departure_time,
      arrival_time,
      departure_date,
      arrival_date,
      no_of_AC,
      no_of_Seater,
      no_of_Sleeper)


      return this .http.post(this.API+'/train/addTrain',this.Train);
   }


   public getTrain()
   {
      return this.http.get<trains[]>(this.API+'/train/getTrains')
   }
   public cancelTrain(id:number)
   {
      console.log(this.API+'/train/cancel/'+id);
     
       return this.http.delete(this.API+'/cancel/'+id)
   }


   
}



