import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RoleDefineService } from './role-define.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'railbook';


  constructor(public roleServ:RoleDefineService)
  {

  }
  isAdmin:boolean= this.roleServ.isAdmin;
  ngOnChanges(changes: SimpleChanges): void {
    console.log("on change call");
    
    this.isAdmin=this.roleServ.isAdmin;
  }
  ngOnInit(): void {
    
  }


}
