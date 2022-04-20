import { Component, OnInit } from '@angular/core';
import { FormioResourceViewComponent } from '@formio/angular/resource';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent extends FormioResourceViewComponent {}
