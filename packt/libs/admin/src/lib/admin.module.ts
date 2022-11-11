import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { PoiModule } from '@packt/poi';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
      {path: '', component: AdminComponent}]
    ),
    PoiModule
  ],
  declarations: [
    AdminComponent
  ],
})
export class AdminModule {}
