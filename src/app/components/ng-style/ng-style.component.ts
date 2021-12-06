import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <h3> ngStyle</h3>
    <hr>
    <p [style.fontSize.px]=" fontSize " >
      Hello world, this is a tag
    </p>

    <button class="btn btn-primary me-2" (click)="fontSize = fontSize + 5 ">
      <i class="fa fa-plus" aria-hidden="true"></i>
    </button>

    <button class="btn btn-primary" (click)="fontSize = fontSize - 5 ">
      <i class="fa fa-minus" aria-hidden="true"></i>
    </button>

  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  fontSize: number = 30;
  constructor() { }

  ngOnInit(): void {
  }

}
