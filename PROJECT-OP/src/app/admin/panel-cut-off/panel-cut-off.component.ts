import {Component, ViewChild, ElementRef, AfterViewInit,OnInit} from '@angular/core';
import {TimeRange} from '../../interfaces/timerange';
import { BackendService } from '../../service/backend.service';
import { CutOffInterface } from '../../interfaces/cut-off';
import { BackendAdminService } from '../../service/backend-admin.service';
import * as $ from 'jquery';
import { from } from 'rxjs';

@Component({
  selector: 'app-panel-cut-off',
  templateUrl: './panel-cut-off.component.html',
  styleUrls: ['./panel-cut-off.component.css']
})
export class PanelCutOffComponent implements OnInit {

  @ViewChild('table',{static:true})
  table: ElementRef;
  data:CutOffInterface[] = [];
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
      this.adk.updateCutOffData(this.data[id]).subscribe(
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

    changeValue(id: number, property: string, event: any) {
      this.editField += (event.target as HTMLInputElement).value.replace(/\n/g,'');
    }

   onSelectionChange(){
    this.showTable = false;
   }

   getTimeRangeData():any{
    this.adk.getTimeRange(2).subscribe(
      data => { 
        this.timeRangeData = data;
      },
      error => {
        console.log('oops',error);
      });
  }

  getData(){
    if(this.TimeRangeValue != "undefined"){
      this.adk.getDataCutOffHasCondition(String(this.TimeRangeValue)).subscribe(
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
    }
    return false;
  }
  

  ngOnInit() {
  }

}
