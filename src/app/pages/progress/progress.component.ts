import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  porcentaje1: number;
  porcentaje2: number;

  constructor() {
    this.porcentaje1 = 45;
    this.porcentaje2 = 55;
  }

  ngOnInit() {
  }


}

