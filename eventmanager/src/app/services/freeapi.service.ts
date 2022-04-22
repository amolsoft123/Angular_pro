import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import  {HttpClient,HttpParams} from '@angular/common/http';
import  {Posts} from '../classes/posts';

@Injectable()
export class freeApiService{
    constructor(private httpclient: HttpClient) {
    }

    getcomments(campaign_id?:string): Observable <any> {
        let params = {}
        if(campaign_id){
            params['campaign_id'] = campaign_id
        }
        return this.httpclient.get("http://127.0.0.1:8000/GenerateForm/",params)
    }

    getcommentsbyparameter(campaign_id?:string): Observable<any> {
        let params1 = new HttpParams().set('campaign_id',campaign_id);
        return this.httpclient.get("http://127.0.0.1:8000/GenerateForm/",{params:params1})     

    }
     
    jsonPost(data):  Observable<any> {
        const form_data = {}
        form_data['data'] = data
        // const form_data = new FormData();
        // form_data.append('data',data)
        return this.httpclient.post("http://127.0.0.1:8000/GenerateForm/", form_data);
    }

}