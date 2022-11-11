import { Injectable } from '@angular/core';
import { PoiEntity } from '@packt/poi';
import { stat } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor() { }

  getStatistics(pois: PoiEntity[]) {
    return pois.map(poi => {
      const stat = localStorage.getItem('tour-' + poi.id) ?? 0;
      return +stat;
    })
  }

  getStatistic(poi: PoiEntity) {
    const stat = localStorage.getItem('tour-' + poi.id) ?? 0;
      return +stat;
  }
}
