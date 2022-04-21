import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormioResources } from '@formio/angular/resource';
import { FormioAuthService } from '@formio/angular/auth';
import { freeApiService } from './services/freeapi.service';
import { Comments } from './classes/comments';
import { Posts } from './classes/posts';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  
  
})
export class AppComponent {
  
  title = 'eventmanager';
  constructor(
    public auth: FormioAuthService,
    private router: Router,
    public resources: FormioResources,
    private _freeApiService: freeApiService,
    
  ) {
    this.auth.onLogin.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigate(['/auth/login']);
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigate(['/']);
    });
    
  }

  lstcomments:Comments[];
  lstPosts:Posts[];
  objPosts:Posts;

  ngOnInit() {

     this._freeApiService.getcomments()
     .subscribe
       (
         
          data=>
          {
             this.lstcomments = data;
             console.log(data);
          }
          
       );

      //  this._freeApiService.getcommentsbyparameter()
      //  .subscribe
      //  (
         
      //     data=>
      //     {
      //        this.lstPosts = data;
      //     }

      //  );

      // var opost = new Posts();

      // opost.body = 'testbody';
      // opost.title = 'testtitle';
      // opost.userId = 5;


      // this._freeApiService.post(opost)
      // .subscribe(

      //   data=>
      //   {
      //      this.objPosts = data;
      //   }
      // )


  }
}

