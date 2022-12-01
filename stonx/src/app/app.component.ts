import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  multi: any[] = [];
  view: any[] = [700, 300];

    // options
  legend: boolean = true;
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Year';
  yAxisLabel: string = 'Population';
  timeline: boolean = true;

  constructor() {
    this.multi = [
      {
        "name": "Germany",
        "series": [
          {
            "name": "1990",
            "value": 62000000
          },
          {
            "name": "2010",
            "value": 73000000
          },
          {
            "name": "2011",
            "value": 89400000
          }
        ]
      },
    
      {
        "name": "USA",
        "series": [
          {
            "name": "1990",
            "value": 250000000
          },
          {
            "name": "2010",
            "value": 309000000
          },
          {
            "name": "2011",
            "value": 311000000
          }
        ]
      },
    
      {
        "name": "France",
        "series": [
          {
            "name": "1990",
            "value": 58000000
          },
          {
            "name": "2010",
            "value": 50000020
          },
          {
            "name": "2011",
            "value": 58000000
          }
        ]
      },
      {
        "name": "UK",
        "series": [
          {
            "name": "1990",
            "value": 57000000
          },
          {
            "name": "2010",
            "value": 62000000
          }
        ]
      }
    ];
    console.log(this.multi);
  }

  onSelect(data:any): void {
    //console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    //console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    //console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
