import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  <app-ng-style></app-ng-style>
  <br>
  <app-css></app-css>
  <br>
  <app-classes></app-classes>
  <br><br>
  <h3> Custom Directive </h3>
  <hr>
  <p appHighlight="orange">
    Hover me
  </p>
  <br>

  <app-ng-switch></app-ng-switch>

  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
