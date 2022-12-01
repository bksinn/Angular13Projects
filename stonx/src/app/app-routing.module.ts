import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockTestComponent } from './stock-test/stock-test.component';

const routes: Routes = [
  {path: 'stock-test', component: StockTestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
