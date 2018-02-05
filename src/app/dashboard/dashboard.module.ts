import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/shared.module';
import { FeatureModule } from '../feature/feature.module';
import { HostDirective } from './host.directive';
import { HostComponent } from './host/host.component';
import { SampleWidget1Component } from '../feature/sample-widget1/sample-widget1.component';
import { SampleWidget2Component } from '../feature/sample-widget2/sample-widget2.component';


@NgModule({
  imports: [
    CommonModule, SharedModule, FeatureModule
  ],
  exports: [MainComponent],
  declarations: [MainComponent, HostDirective, HostComponent]
})
export class DashboardModule { }
