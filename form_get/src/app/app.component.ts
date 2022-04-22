import { Component } from '@angular/core';

import {PostService} from './post.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form_get';

  constructor(private post:PostService){}
  ngOnInit()
  {
    this.post.getPostData().subscribe((data)=>{
      console.warn("data",data);
    })
      
  }
}

