import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
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
  onChange(event) {
    this.jsonElement.nativeElement.innerHTML = '';
    this.jsonElement.nativeElement.appendChild(document.createTextNode(JSON.stringify(event.form, null, 4)));
    console.log(event.form);
    this.jsonAbc = event.form
    
  }

  constructor(private FreeApiService : freeApiService) { }

  ngOnInit(): void {
  }

  abc1() {
    console.log("asbc", this.jsonAbc)
    this.FreeApiService.jsonPost(this.jsonAbc).subscribe(res => {
      console.log('res',res)
    })
  }

}

