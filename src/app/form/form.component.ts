import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  title: string | any;


  constructor() { }


  ngOnInit(): void {
    this. toUpperCase();
  }

  srcName$ = from(['John', 'Tom', 'Katy'])

  toUpperCase() {
    this.srcName$
     .pipe(map(data => {
       return data.toUpperCase();
     }))
     .subscribe(data => console.log(data))
  }
  add(){
    this.title="Local Storage";
    localStorage.setItem('token',this.title)
      }



}
