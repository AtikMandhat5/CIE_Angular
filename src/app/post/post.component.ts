import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  data:any = []
 
  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this._postService.getData().subscribe(res=>{
      this.data=res;
      console.log(this.data)
    })
  }
}
