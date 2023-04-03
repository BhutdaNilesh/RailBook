import { Time } from '@angular/common';
import { Component } from '@angular/core';

import { trains } from '../Rest/trains';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { TrainService } from '../Rest/train.service';
@Component({
  selector: 'app-manage-trains',
  templateUrl: './manage-trains.component.html',
  styleUrls: ['./manage-trains.component.css'],
}
)
export class ManageTrainsComponent {
  nextClicked: boolean = false;

  'train_id': number;
  'train_name': String;
  'source_station': String;
  'destination_station': String;
  'departure_time': Time;
  'arrival_time': Time;
  'departure_date': Date;
  'arrival_date': Date;
  'no_of_AC': number;
  'no_of_Seater': number;
  'no_of_Sleeper': number;
  
  nextClick() {
    this.nextClicked = true;
  }
  back() {
    this.nextClicked = false;
  }
  constructor(private myTrainServ:TrainService){}
  insertTrain()
  {
    this.myTrainServ.add(this.train_id,
      this.train_name,
      this.source_station,
      this.destination_station,
      this.departure_time,
      this.arrival_time,
      this.departure_date,
      this.arrival_date,
      this.no_of_AC,
      this.no_of_Seater,
      this.no_of_Sleeper).subscribe( (resp) => {
        console.log(resp);
        
      },
      (err) => {
        console.log(err);
      });
    
      alert("Train has been added successfully!!");
      location.reload();
    
  }
  
  // insertTrain()
  // {

  // }
 
}