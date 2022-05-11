import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import {} from 'ng2-charts';


@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
labels:string[];
data:any;
pieChartType:ChartType='pie';
colors:any=['#5fb2c6','#53a759','#e88b44','#e23f3d']
ChartLegend:boolean=true;
pieChartColors:any;
options:any={
  legend:{
    position:'right',
    orient:'vertical',
  }
}
  constructor() { }

  ngOnInit(){
    this.makeChartData();

  }
makeChartData(){
  this.pieChartColors=[{backgroundColor:this.colors}];
  this.data=[1000,3000,40.5,9999]
  this.labels=["2017","2018","2019","2020"]
}
}
