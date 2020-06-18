import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TimeRange } from '../../interfaces/timerange';
import { TimeRangeType } from '../../interfaces/timerange-type';
import { BackendAdminService } from '../../service/backend-admin.service';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  form: FormGroup;
  action:string;
  local_data:any;
  timeRangeTypeData:TimeRangeType[] = [];
 
  constructor(
    public dialogRef: MatDialogRef<DialogBoxComponent>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: TimeRange,public adk:BackendAdminService,fb: FormBuilder) {
    console.log(data);
    this.dialogRef.disableClose = true;
    this.local_data = {...data};
    this.action = this.local_data.action;
    this.form = fb.group({
      Name_display:[this.local_data.Name_display, [Validators.required, Validators.maxLength(20)]],
      Start_time:[this.local_data.Start_time, [Validators.required, Validators.pattern('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:?:[0-5][0-9])?$')]],
      End_time:[this.local_data.End_time, [Validators.required, Validators.pattern('^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9](:?:[0-5][0-9])?$')]],
      Type_ID:[this.local_data.Type_ID, [Validators.required]]
  });
  }

  async getTimeRangeData() {
    await this.adk.getTimeRangeType().subscribe(
      data => {
        this.timeRangeTypeData = data;
      },
      error => {
        console.log('oops', error);
      });
  }
 
  doAction(){
    if(this.form.valid && this.action != 'Delete') {
      this.dialogRef.close({event:this.action,data:this.local_data});
    }else if(this.action === 'Delete'){
      this.dialogRef.close({event:this.action,data:this.local_data});
    }
  }
 
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

  ngOnInit() {
    this.getTimeRangeData();
  }

}
