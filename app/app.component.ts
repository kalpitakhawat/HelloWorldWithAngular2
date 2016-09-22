import { Component,OnInit } from '@angular/core';
import { DataService } from './shared/data.service';
@Component({
  selector: 'my-project',
  template: '{{projectName}}'
})
export class AppComponent { 
  projectName:string;
  constructor(private DataService:DataService){}
  ngOnInit(){
    this.projectName= this.DataService.getProjectName();
  }
}
