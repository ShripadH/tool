import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleWidget1Component } from './sample-widget1/sample-widget1.component';
import { SampleWidget2Component } from './sample-widget2/sample-widget2.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SampleWidget1Component, SampleWidget2Component],
  declarations: [SampleWidget1Component, SampleWidget2Component],
  entryComponents: [SampleWidget1Component, SampleWidget2Component]
})
export class FeatureModule { }
