import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PostService} from './post.service'
import {HttpClientModule} from '@angular/common/http'
import { FormioModule } from '@formio/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
    
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormioModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
