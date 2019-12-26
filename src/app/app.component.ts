import { Component } from '@angular/core';
import {FormGroup, FormControl, FormArray} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  userdetails : FormGroup;
  constructor(){
    this.userdetails = new FormGroup({
      'name' : new FormControl(),
'email' : new FormControl(),
'gender' : new FormControl(),
'favfood' : new FormArray([
  new FormGroup({
    'india' : new FormControl(true)
  }),
  new FormGroup({
       'chinese' : new FormControl(true)
  })
])
    })
  }

  submitvalue(){
    console.log(this.userdetails.value)
  }
}
