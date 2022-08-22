import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IPost } from '../models/IPost';
import { IUser } from '../models/IUser';
import { blogPostService } from '../services/BlogPostService';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  PostId:string='';
  users:IUser[]=[];
  PostForm=new FormGroup({
    title:new FormControl(''),
     category:new FormControl(''),
    body:new FormControl(''),
  });
  constructor(private router:Router,private postService:blogPostService,private route:ActivatedRoute,private userService:UserService) { }
posts:IPost[]=[];
  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>{
      this.users=data;
          })
    this.PostId=this.route.snapshot.params['title'];
this.postService.getUserById(this.PostId).subscribe((data)=>{
  console.log(data);
  this.PostForm.setValue({
    title:data.title,
    category:data.title,
    body:data.body,

  });
});
    }
  onUpdatePost(){
    this.postService.updateUser(
      this.PostForm.value as IUser,this.PostId).subscribe((data)=>{
        //this.messageService.setSuccessMessage('User updated successfully');
      this.router.navigate(['/posts']);     
      });
    }
  }
