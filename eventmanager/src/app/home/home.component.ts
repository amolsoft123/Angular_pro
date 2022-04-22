import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Form } from 'formiojs';
import { freeApiService } from '../services/freeapi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit {
  @ViewChild('json') jsonElement?: ElementRef;
  public form: Object = {components: []};
  jsonAbc: any;
  data: any;
  lstcomments:any []=[];
  camp_id:string;

  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    // console.log(event.form);
    this.jsonAbc = event.form
    this.data = event.form
    
  }
  

  constructor(
    private _freeApiService : freeApiService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.camp_id = this.route.snapshot.paramMap.get('camp_id');
    if(this.camp_id){
      this.getformfields();
    }
    console.log(this.camp_id);
  }

  abc1() {
    console.log("asbc", this.jsonAbc)
    this._freeApiService.jsonPost(this.jsonAbc).subscribe(res => {
      console.log('res',res)
    })
    
  }
  getformfields(){
    if(this.camp_id){
      let campaign_id = this.camp_id;
      this._freeApiService.getcommentsbyparameter(campaign_id).subscribe(data=>{
              this.lstcomments = data[0].data;
              console.log(this.lstcomments);
           }
        );
       }
    }
}

