import { 
    Component, OnInit,
    Input, ViewChild, AfterViewInit, OnDestroy,
    ComponentFactoryResolver, ChangeDetectionStrategy,ChangeDetectorRef
 } from '@angular/core';

//import { Control, IComponent, ControlComponentMap } from '../../shared/models/common.model';
import { Control, IComponent, ControlComponentMap } from '../../dashboard/component.model';

import {  HostDirective } from './../host.directive';

@Component({
  selector: 'app-host',
  templateUrl: './host.component.html',
  changeDetection: ChangeDetectionStrategy.Default
})

export class HostComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() control: Control;
  @Input() depControls: Control[];
  @ViewChild(HostDirective) host:HostDirective;
 
  DepControl:Control;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private changeDetectorRef:ChangeDetectorRef) {
  }

  ngOnInit() {}

  ngAfterViewInit() {}

  ngAfterContentInit(){
      this.load();
  }

  ngOnDestroy() {
    this.dispose();
  }

  load(){

    //  if(!this.host)
    //     return;

     let cf = this.componentFactoryResolver.resolveComponentFactory(this.control.Component);

     let viewContainerRef =  this.host.viewContainerRef;
     viewContainerRef.clear();

     let c= viewContainerRef.createComponent(cf);
     (<IComponent>c.instance).Self = this.control;
    // (<IComponent>c.instance).DepControls = this.depControls;

      // this.DepControl = this.depControls.filter(d=> {
      //                                       return this.control.Dep && d.Id == this.control.Dep.Id 
      //                                     })[0];

  }

  dispose(){}

}
