import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IPost } from '../models/IPost';
import { IUser } from '../models/IUser';
import { blogPostService } from '../services/BlogPostService';
import { MessageService } from '../services/message.service';
// import { PostService } from '../services/post.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-add-post-form',
  templateUrl: './add-post-form.component.html',
  styleUrls: ['./add-post-form.component.css']
})
export class AddPostFormComponent implements OnInit {
categories:IPost[]=[];
  constructor(private postBlogService:blogPostService,private postService:UserService,private router:Router,private messageService:MessageService) { }
  addPostForm:FormGroup=new FormGroup({
    title:new FormControl('',[Validators.required]),
    body:new FormControl(''),
    category:new FormControl(''),
  })
  posts:IUser[]=[];
  ngOnInit(): void {
    this.postService.getUsers().subscribe(data=>{
      this.posts=data;
          });
      }
  onAddPost()
  {
    let user=this.addPostForm.value;
    this.postBlogService.addPost(user).subscribe((data)=>{
     this.messageService.setSuccessMessage('Post Added Successfully');
      this.router.navigate(['/posts']);
    });
    console.log(this.addPostForm.value);
  }
}
