import { Component, OnInit } from '@angular/core';
import { TrainService } from '../Rest/train.service';
import { trains } from '../Rest/trains';

@Component({
  selector: 'app-all-trains',
  templateUrl: './all-trains.component.html',
  styleUrls: ['./all-trains.component.css']
})
export class AllTrainsComponent implements OnInit {

  trainArr:trains[]=[];
  

  constructor(private trainServ:TrainService)
  {
    
    
  } 
  ngOnInit(): void {
    this.trainServ.getTrain().subscribe(
      (res)=>
      {
        this.trainArr=res;
       
          
      },
      (err)=>
      { 

      }

    );  
  }
  display()
  {
    this.trainServ.getTrain().subscribe(
      (res)=>
      {
        this.trainArr=res;
        
      },
      (err)=>
      { 

      }
    );
  }
  cancelTrain(train_id:number)
  {
      this.trainServ.cancelTrain(train_id).subscribe(
        (resp: any)=>
        {
          console.log(resp);
          this.display();

          
        },(err: any)=>
        {
          console.log(err);
          
        }
      );

      this.display();
  }

}