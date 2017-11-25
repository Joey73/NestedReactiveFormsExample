import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { states, Address } from '../data-model';

@Component({
  selector: 'app-hero-detail-with-subcomp',
  templateUrl: './hero-detail-with-subcomp.component.html',
  styleUrls: ['./hero-detail-with-subcomp.component.css']
})
export class HeroDetailWithSubcompComponent implements OnInit {
  heroForm: FormGroup;
  states = states;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.heroForm = this.formBuilder.group({
      name: '', // just the FormControl
      //name: ['', Validators.required], // including validators
      addressFormGroup: this.formBuilder.group(new Address()),
      /* or:
      addressFormGroup: this.formBuilder.group({
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
