import {
  Component, OnInit,
  Input, ViewChild, AfterViewInit, OnDestroy,
  ComponentFactoryResolver, ChangeDetectionStrategy, ChangeDetectorRef
} from '@angular/core';
//import { Control, IComponent, ControlComponentMap } from '../../shared/models/common.model';
import { Control, IComponent, ControlComponentMap } from '../../dashboard/component.model';
import { HostDirective } from './../host.directive';
import { SampleWidget1Component } from '../../feature/sample-widget1/sample-widget1.component'
import { SampleWidget2Component } from '../../feature/sample-widget2/sample-widget2.component'



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  changeDetection: ChangeDetectionStrategy.Default,
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit {

  controls: Control[];
  depControls: Control[];
  style1 = 'col-sm-6 col-md-6 col-lg-6';
  IsVisible: boolean = true;
  controlMapper: ControlComponentMap[];

  ngOnInit() {
    this.controlMapper = [
      new ControlComponentMap('Widget1', SampleWidget1Component),
      new ControlComponentMap('Widget2', SampleWidget2Component)
    ];

    this.controls = [
      { "Id": "wd1", "Label": "Widget 1", "Component": SampleWidget1Component, "Options": null, "Value": null, "Dep": null },
      { "Id": "wd2", "Label": "Widget 2", "Component": SampleWidget2Component, "Options": null, "Value": null, "Dep": null },
      { "Id": "wd1", "Label": "Widget 1", "Component": SampleWidget1Component, "Options": null, "Value": null, "Dep": null },
      { "Id": "wd2", "Label": "Widget 2", "Component": SampleWidget2Component, "Options": null, "Value": null, "Dep": null },
      { "Id": "wd1", "Label": "Widget 1", "Component": SampleWidget1Component, "Options": null, "Value": null, "Dep": null },
      { "Id": "wd2", "Label": "Widget 2", "Component": SampleWidget2Component, "Options": null, "Value": null, "Dep": null },
      { "Id": "wd1", "Label": "Widget 1", "Component": SampleWidget1Component, "Options": null, "Value": null, "Dep": null },
      { "Id": "wd2", "Label": "Widget 2", "Component": SampleWidget2Component, "Options": null, "Value": null, "Dep": null }
    ]

    // this.apiService.getSchema().subscribe(data=>{
    //       let schema = data;

    //       let controlList = schema.map(s=> {
    //             var  c = this.controlMapper.filter(function(x){
    //               return x.Type ==s.Type;
    //             })[0];
    //             return  new Control(s.Id, s.Label,c.Component, s.Value,s.Options, s.Dep);
    //       });

    //       this.controls = controlList;

    //       let temp =  controlList.filter(c=>  c.Dep && c.Dep.Id != '');

    //       this.depControls =  controlList.filter(c=> temp.filter(x=>x.Dep && x.Dep.Id == c.Id).length > 0);
    // },
    // err=>{
    //       console.log(err);
    // });

  }

}
