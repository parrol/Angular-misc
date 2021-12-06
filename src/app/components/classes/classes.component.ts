import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styles: [
  ]
})
export class ClassesComponent implements OnInit {

  alert: string = 'alert-danger';
  loading: boolean = false;
  props: any = {
    danger: false
  }

  constructor() { }

  ngOnInit(): void {
    this.props.danger = false;
  }

  execute() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
