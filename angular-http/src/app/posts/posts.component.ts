import { Component,OnInit} from '@angular/core';
import { IPost } from '../models/IPost';
import { blogPostService } from '../services/BlogPostService';
// import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  filteredString:any='';
posts:IPost[]=[];
  constructor(private postService:blogPostService) { }
 

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts: IPost[])=>{
      this.posts=posts;
      
    });
    console.log("post Component is loaded")
    console.log(this.posts)
  }
  deletePost(id:any){
    this.postService.deleteUser(id).subscribe((data)=>{
      this.postService.getPosts().subscribe((users: IPost[])=>{
        this.posts=users;
      });
    });
    console.log(id)
  }

}
