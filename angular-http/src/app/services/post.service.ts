// import { HttpClient } from "@angular/common/http";
// import { Injectable } from "@angular/core";
// import { Observable,map } from "rxjs";
// import { IPost } from "../models/IPost";
// @Injectable({
// providedIn:'root'
// })
// export class PostService{
//     baseUrl='https://angulat-http-e4da8-default-rtdb.firebaseio.com/';
//     constructor(private http:HttpClient){ }
// //     getPosts():Observable<IPost[]>{
// // return this.http.get<IPost[]>('https://angulat-http-e4da8-default-rtdb.firebaseio.com/posts.json')   
// //     }


//     getPosts():Observable<IPost[]>{
//         return this.http.get<{[id:string]:IPost}[]>(
//         `${this.baseUrl}blog.json`)
//         .pipe
//         (map((users: { [x: string]: IPost }[])=>
//         {
//         let formattedUsers:IPost[]=[];
//         for(let id in users){
//         // formattedUsers.push({id,...users[id]} as IPost)
//         formattedUsers.push({ id, ...users[id] } as unknown as IPost)
//         }
//         return formattedUsers;
//         })
//         );
//         }
// }