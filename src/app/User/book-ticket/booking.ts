export class Booking{
    no_of_passengers!:number;
    journey_class!:string;
    user_id!:number;
    train_id!:number;
    passengerList!: number[];


    constructor(no_of_passengers:number,journey_class:string,user_id : number, train_id:number, passengerList:number[]  ){
        this.no_of_passengers = no_of_passengers;
        this.journey_class = journey_class;
        this.train_id = train_id;
        this.user_id = user_id;
        this.passengerList = passengerList;
    }
}