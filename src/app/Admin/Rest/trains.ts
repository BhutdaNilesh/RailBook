import { Time } from "@angular/common";

export class trains{
    "train_id"!:number;
    "train_name"!:String;
    "source_station"!:String;
    "destination_station"!:String;
    "departure_time"!:Time;
    "arrival_time"!:Time;
    "departure_date"!:Date;
    "arrival_date"!: Date;
    "no_of_AC"!:number;
    "no_of_Seater"!:number;
    "no_of_Sleeper"!:number;


    constructor(train_id:number,train_name:String,source_station:String,destination_station:String,departure_time:Time,arrival_time:Time
    ,departure_date:Date,arrival_date:Date, no_of_AC:number,no_of_Seater:number,no_of_Sleeper:number){

        this.train_id=train_id;
        this.train_name=train_name;
        this.source_station=source_station;
        this.destination_station=destination_station;
        this.departure_time=departure_time;
        this.arrival_time=arrival_time;
        this.departure_date=departure_date;
        this.arrival_date=arrival_date;
        this.no_of_AC=no_of_AC;
        this.no_of_Seater=no_of_Seater;
        this.no_of_Sleeper=no_of_Sleeper;



    }
  
}