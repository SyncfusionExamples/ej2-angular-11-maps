import { Component, ViewEncapsulation, ViewChild, OnInit } from '@angular/core';
import { Maps } from '@syncfusion/ej2-angular-maps';
import { world_map } from './world-map';

@Component({
  selector: 'app-root',
  template: `<ejs-maps id='rn-container' >
  <e-layers>
  <e-layer  [shapeData]= 'shapeData'  [shapePropertyPath]= 'shapePropertyPath' [shapeDataPath]= 'shapeDataPath' [dataSource] = 'dataSource'></e-layer>
  </e-layers>
  </ejs-maps>`
})
export class AppComponent implements OnInit {
  title = 'angular11Map-app';
  public dataSource: Object[];
  public shapeData: Object;
  public shapePropertyPath: String;
  public shapeDataPath: String;
  ngOnInit(): void {
    this.dataSource = [{  "Country": "China", "Membership": "Permanent"},
        {"Country": "France","Membership": "Permanent" },
        { "Country": "Russia","Membership": "Permanent"},
        {"Country": "Kazakhstan","Membership": "Non-Permanent"},
        { "Country": "Poland","Membership": "Non-Permanent"},
        {"Country": "Sweden","Membership": "Non-Permanent"}];
        this.shapeData = world_map;
this.shapePropertyPath = 'name';
 this.shapeDataPath= 'Country';
}
};
