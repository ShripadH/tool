import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {SharedModule} from './shared/shared.module';
import {FeatureModule} from './feature/feature.module';
import {SampleWidget1Component} from './feature/sample-widget1/sample-widget1.component';
import {SampleWidget2Component} from './feature/sample-widget2/sample-widget2.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    SharedModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent], 
  entryComponents: [SampleWidget1Component, SampleWidget2Component]
})
export class AppModule { }
