import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-donna',
  templateUrl: './grafico-donna.component.html',
  styles: []
})
export class GraficoDonnaComponent implements OnInit {
//  @Input() public doughnutChartLabels: Label[] = [];
//  @Input() public doughnutChartData: MultiDataSet = [];
//  @Input() public doughnutChartType: ChartType = '';
 @Input() public doughnutChartLabels = [];
 @Input() public doughnutChartData = [];
 @Input() public doughnutChartType = '';

  constructor() { }

  ngOnInit() {
  }

}
