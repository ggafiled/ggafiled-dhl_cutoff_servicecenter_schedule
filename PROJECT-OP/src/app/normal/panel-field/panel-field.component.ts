import { Component, OnInit, Input } from '@angular/core';
import { async } from '@angular/core/testing';
import * as moment from 'moment';
import { from } from 'rxjs';

@Component({
  selector: 'app-panel-field',
  templateUrl: './panel-field.component.html',
  styleUrls: ['./panel-field.component.css']
})
export class PanelFieldComponent implements OnInit {

  @Input('date') data: any;
  @Input('alertIcon') alertIcon:boolean = true;
  
  alert:boolean = false;
  dateTime:Date;
  srtdate:string;
  constructor() { 
    setInterval( async ()=>{
      this.dateTime  = new Date();
      if(moment(this.dateTime,"HH:mm").add(10,'minutes') >= moment(this.data,"HH:mm") && moment(this.dateTime,"HH:mm") <= moment(this.data,"HH:mm").add(10,'minutes')){
        this.alert = true;
        console.log("Alert:"+this.data);
      }else{
        this.alert = false;
        console.log("Not Alert");
      }
      // if(this.data == "13:00"){
      //   console.info("Now:"+moment(this.dateTime,"HH:mm").add(10,'minutes')+" Data:"+moment(this.data,"HH:mm").add(10,'minutes'));
      // }
    },1);

  }

  ngOnInit() {
  }

}
