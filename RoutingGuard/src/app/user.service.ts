import { Injectable } from "@angular/core";
import { IUser } from "./modals/IUser";

@Injectable({
    providedIn:'root',
})
export class UserService{
    users:IUser[]=[{
        id:1, name:'ajay', phone:1234,email:'abc@gmail.com'
    }]
    selectedUser:IUser|null=null;
    constructor(){

    }
    adduser(user:IUser){
        if(!user.id) user.id=this.users.length+1;
        this.users.push(user);
    }
    updateUser(user:IUser){
        this.users=this.users.map((use)=>{
            if(use.id==user.id){
                return user;
            }
            return use;
        })
            }
            deleteUser(user:IUser){
                let index=this.users.indexOf(user);
                this.users.splice(index,1);
            }
}