import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [AppComponent, AdminComponent],
  imports: [BrowserModule, BrowserAnimationsModule, RouterModule.forRoot([
    {path: 'admin', loadChildren: () => import ('@packt/admin').then(m => m.AdminModule)},
    {path: 'tour', loadChildren: () => import ('@packt/visitor').then(m => m.VisitorModule)},
    {path: '', pathMatch: 'full', redirectTo: 'tour'}
  ])],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
