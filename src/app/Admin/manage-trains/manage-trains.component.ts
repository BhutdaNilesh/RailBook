import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-trains',
  templateUrl: './manage-trains.component.html',
  styleUrls: ['./manage-trains.component.css']
})
export class ManageTrainsComponent {
  nextClicked:boolean=false;
  nextClick()
  {
    this.nextClicked=true;
  }
  back()
  {
    this.nextClicked=false;
  }
}
