import { Component, OnInit } from '@angular/core';
import { BackendAdminService } from '../../service/backend-admin.service';
import { from } from 'rxjs';
import {TimeRange} from '../../interfaces/timerange';
import { BackendService } from '../../service/backend.service';
import { ServiveCenterInterface } from '../../interfaces/service-center';

@Component({
  selector: 'app-panel-service-center',
  templateUrl: './panel-service-center.component.html',
  styleUrls: ['./panel-service-center.component.css']
})
export class PanelServiveCenterComponent implements OnInit {

  data:ServiveCenterInterface[] = [];
  editField: string;
  timeRangeData:TimeRange[] = [];
  TimeRangeValue:string;
  showTable:boolean = false;
  constructor(private adk:BackendAdminService) {
    this.getTimeRangeData();
   }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.data[id][property] = editField;
    this.adk.updateServiceCenterData(this.data[id]).subscribe(
      val => {
          console.log("PUT call successful value returned in body", 
                      val);
      },
      response => {
          console.log("PUT call in error", response);
      },
      () => {
          console.log("The PUT observable is now completed.");
      });
  }

  changeValue(id: number, property: string, event: KeyboardEvent) {
    this.editField += (event.target as HTMLInputElement).value.replace(/\n/g,'');
  }

 onSelectionChange(){
  console.log(String(this.TimeRangeValue));
  this.showTable = false;
 }

  getTimeRangeData():any{
    this.adk.getTimeRange(1).subscribe(
      data => { 
        this.timeRangeData = data;
      },
      error => {
        console.log('oops',error);
      });
  }

  getData(){
    if(this.TimeRangeValue != "undefined"){
      this.adk.getDataServiceCenterHasCondition(String(this.TimeRangeValue)).subscribe(
      data => { 
        this.data = data;
        if(this.data.length <= 0){
          this.showTable = false;
        }else{
          this.showTable = true;
        }
      },
      error => {
        console.log('oops',error);
      });
    }else{
      console.log("else part.");
    }
    return false;
  }

  ngOnInit() {
  }

}
