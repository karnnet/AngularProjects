import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { IPost } from "../models/IPost";
import { IUser } from "../models/IUser";

@Injectable({
    providedIn:'root'
})
export class blogPostService{

baseUrl='https://angulat-http-e4da8-default-rtdb.firebaseio.com/';
constructor(private http:HttpClient){}


addPost(user:IPost):Observable<{name:string}>{
return this.http.post<{name:string}>(`${this.baseUrl}blog.json`,user);
}

getPosts():Observable<IPost[]>{
return this.http.get<{[id:string]:IPost}[]>(
`${this.baseUrl}blog.json`)
.pipe
(map((users)=>
{
let formattedUsers:IPost[]=[];
for(let id in users){
formattedUsers.push({ id, ...users[id] } as unknown as IPost)
}
return formattedUsers;
})
);
}

getUserById(id:string):Observable<IPost>{
    return this.http.get<IPost>(`${this.baseUrl}blog/${id}.json`);
}

updateUser(user:IUser,id:string){
    return this.http.put(`${this.baseUrl}blog/${id}.json`,user);
}

deleteUser(id:any)
{   
    return this.http.delete(`${this.baseUrl}blog/${id}.json`);
}
}
