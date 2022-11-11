import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { PoiModule } from '@packt/poi';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
      {path: '', component: AdminComponent}]
    ),
    PoiModule,
    NgxChartsModule
  ],
  declarations: [
    AdminComponent
  ],
})
export class AdminModule {}
