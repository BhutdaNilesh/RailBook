export interface Booking{
    booking_id: number;
    no_of_passengers:number;
    journey_class:string;
    user_id:number;
    train_id:number;
    passengerList: number[]


    // Booking(booking_id:number, no_of_passengers:number, journey_class:string, user_id:number, train_id:number, passengerList:number[]){
    //     this.booking_id = booking_id,
    //     this.no_of_passengers = no_of_passengers,
    //     this.journey_class = journey_class,
    //     this.user_id = user_id,
    //     this.train_id = train_id,
    //     this.passengerList = passengerList
    // }
    
}