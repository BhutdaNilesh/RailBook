export class Admin{
    
    email!:String;
    phone_number!:String;
    username!:String;
    password!:String;

    constructor(email:String,phone_number:String,username:String,password:String)
    {
        this.email=email;
        this.phone_number=phone_number;
        this.password=password;
        this.username=username;

    }

    
}