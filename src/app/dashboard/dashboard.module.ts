import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {SharedModule} from '../shared/shared.module';
import { HostDirective } from './host.directive';
import { HostComponent } from './host/host.component'

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  exports: [MainComponent],
  declarations: [MainComponent, HostDirective, HostComponent]
})
export class DashboardModule { }
