export class Control
{
    constructor(id:string, label:string, component: any, value:any, options:any='', dep:any=null){
      this.Id = id;
      this.Label = label;
      this.Component = component;
      this.Options = options;
      this.Value = value;
      this.Dep = dep;
    }
    
    Id:string ='';
    Label: string ='';
    Component: any;    
    Options:any;
    Value:any ='';
    Dep:any;
}
export interface IComponent {
   Self:Control;
   DepControls:Control[];   
}

export interface IControlData {
   Data: any;
}

export class InputData implements IControlData{
    Data:any;
}

export class ControlComponentMap
{
  constructor(type:string, component:any){
      this.Type = type;
      this.Component = component;
  }

  Type:string;
  Component:any;

}