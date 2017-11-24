import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { states, Address } from '../data-model';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // https://angular.io/guide/reactive-forms
  heroForm: FormGroup;
  states = states;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.heroForm = this.formBuilder.group({
      /*name: ''*/ // just the FormControl
      name: ['', Validators.required], // including validators
      address: this.formBuilder.group(new Address()),
      /*
      address: this.formBuilder.group({ // the child FormGroup
        street: '',
        city: '',
        state: '',
        zip: ''
      }),
      */
      power: '',
      sidekick: ''
    });
  }

}
