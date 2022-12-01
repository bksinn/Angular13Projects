import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, map } from "rxjs";
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Component({
  selector: 'app-stock-test',
  templateUrl: './stock-test.component.html',
  styleUrls: ['./stock-test.component.scss']
})
export class StockTestComponent implements OnInit, OnDestroy {
  webSocket: WebSocket = new WebSocket('wss://ws.finnhub.io?token=ce41n5iad3i38glcil6gce41n5iad3i38glcil70');

  //ngxs shit
  multi: any[] = [];
  single: BarChartData[] = [];
  view: any[] = [700, 500];

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
    this.single = [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      },
      {
        "name": "France",
        "value": 7200000
      }
    ];
  }

  ngOnInit(): void {
    this.webSocket.addEventListener("open", () => {
      console.log("HELLO! socket opened");
      this.webSocket.send(JSON.stringify({'type':'subscribe', 'symbol': 'AAPL'}))
      this.webSocket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
      this.webSocket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
    })

    this.webSocket.addEventListener("message", (event) => {
      var data = JSON.parse(event.data).data; //Array of objects
      data.forEach((element:any) => {
        console.log(element);
        var dataPoint: BarChartData = {
          "name": element.s,
          "value": element.p
        };
        this.single = [
          {
            "name": "Germany",
            "value": 18000
          },
          {
            "name": "USA",
            "value": 16000
          },
          {
            "name": "France",
            "value": 20000
          },
          dataPoint
        ];
      });
      this.webSocket.close();
    })
  }

  ngOnDestroy(): void {
      
  }

}

interface BarChartData {
  name: string,
  value: number
}
