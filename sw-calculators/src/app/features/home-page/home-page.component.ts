import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  animations: [
    trigger('hover', [
      state('false', style({
        opacity: '1'
      })),
      state('true', style({
        opacity: '0.85'
      })),
      transition('true <=> false', animate('0.4s')),
    ])
  ]
})
export class HomePageComponent implements OnInit {
  formGroup: FormGroup;
  is6StarHover: boolean;
  isExpHover: boolean;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.is6StarHover = false;
    this.isExpHover = false;

    this.formGroup = this.formBuilder.group({
      numberOfTwoStar: [''],
      numberOfThreeStar: [''],
      numberOfFourStar: [''],
      numberOfFiveStar: ['']
    });
  }

}
