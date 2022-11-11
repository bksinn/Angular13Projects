import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiActions, PoiEntity, PoiSelectors } from '@packt/poi';
import { Subscription } from 'rxjs';
import { LegendPosition } from '@swimlane/ngx-charts';
import { AdminService } from './admin.service';
import { PieChartType } from './PieChartType';

@Component({
  selector: 'packt-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit, OnDestroy {
  subscription: Subscription | undefined;
  pieChartData: PieChartType[] = []
  legendPosition: LegendPosition = LegendPosition.Below;

  constructor(private store: Store, private adminService: AdminService) { }

  ngOnInit(): void {
    this.subscription = this.store.select(PoiSelectors.getAllPoi).subscribe(pois => {
      this.buildChart(pois);
    });
    this.store.dispatch(PoiActions.initPoi());
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }

  buildChart(pois: PoiEntity[]) {
    this.pieChartData = pois.map(poi => {
      const chartData: PieChartType = {
        name: poi.name,
        value: this.adminService.getStatistic(poi)
      }
      return chartData;
    });
  }

}