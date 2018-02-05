import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Control, ControlComponentMap, InputData } from './models/common.model';

@NgModule({
  imports: [
    CommonModule
  ],
  exports:[Control, ControlComponentMap, InputData],
  declarations: []
})
export class SharedModule { }
