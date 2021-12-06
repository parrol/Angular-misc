import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-new-user',
  template: `
    <p>
      new-user works!
    </p>
  `,
  styles: [
  ]
})
export class NewUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    if (!this.activatedRoute.parent) return;

    this.activatedRoute.parent.params.subscribe(params => {
      console.log('child route new user');
      console.log(params);
    })
  }

  ngOnInit(): void {
  }

}
