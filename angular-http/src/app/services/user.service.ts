import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IUser } from "../models/IUser";

@Injectable({
    providedIn:'root'
})
export class UserService{
baseUrl='https://angulat-http-e4da8-default-rtdb.firebaseio.com/';
constructor(private http:HttpClient){}

addUser(user:IUser):Observable<{name:string}>{
return this.http.post<{name:string}>(`${this.baseUrl}users.json`,user);
}

getUsers():Observable<IUser[]>{
return this.http.get<{[id:string]:IUser}[]>(
`${this.baseUrl}users.json`)
.pipe
(map((users)=>
{
let formattedUsers:IUser[]=[];
for(let id in users){
formattedUsers.push({id,...users[id]} as IUser)
}
return formattedUsers;
})
);
}

getUserById(id:string):Observable<IUser>{
    return this.http.get<IUser>(`${this.baseUrl}users/${id}.json`);
}

updateUser(user:IUser,id:string){
    
    return this.http.put(`${this.baseUrl}users/${id}.json`,user);
}
deleteUser(id:any)
{
    return this.http.delete(`${this.baseUrl}users/${id}.json`);
}
}


