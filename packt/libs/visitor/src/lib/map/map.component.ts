import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { PoiSelectors, PoiActions } from '@packt/poi';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'packt-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @ViewChild(MapInfoWindow) info: MapInfoWindow | undefined;
  poi$ = this.store.select(PoiSelectors.getSelected);

  constructor(private store: Store) { }

  ngOnInit(): void {}

  showInfo(marker: MapMarker, poiId: string | number) {
    this.store.dispatch(PoiActions.visitPoi({poiId}));
    this.info?.open(marker);
  }

}
