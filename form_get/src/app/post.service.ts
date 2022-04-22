import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  getPostData()
  {
    return this.http.get("http://127.0.0.1:8000/GenerateForm/")
  }
}
