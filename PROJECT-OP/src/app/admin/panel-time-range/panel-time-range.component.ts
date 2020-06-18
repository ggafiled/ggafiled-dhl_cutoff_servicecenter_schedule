import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatTable } from '@angular/material';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { TimeRange } from '../../interfaces/timerange';
import { from } from 'rxjs';
import { BackendAdminService } from '../../service/backend-admin.service';

@Component({
  selector: 'app-panel-time-range',
  templateUrl: './panel-time-range.component.html',
  styleUrls: ['./panel-time-range.component.css']
})
export class PanelTimeRangeComponent implements OnInit {

  timeRangeData: TimeRange[] = [];
  displayedColumns: string[] = ['Id','Name_display','Start_time','End_time','Type_name','action'];
  @ViewChild(MatTable, {
    static: true
  }) table: MatTable < any > ;

  constructor(private adk: BackendAdminService, public dialog: MatDialog) {
    this.getTimeRangeData();
  }

  ngOnInit() {
  }

  getTimeRangeData() {
    this.adk.getTimeRangeAll().subscribe(
      data => {
        this.timeRangeData = data;
      },
      error => {
        console.log('oops', error);
      });
  }

  openDialog(action, obj) {
    obj.action = action;
    console.log("Dialog action : "+action);
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj) {
    this.adk.addnewTimeRangeData(row_obj as TimeRange).subscribe(
      data => {
        alert(data.message);
        this.getTimeRangeData();
      },
      error => {
        alert("ERROR : Something is wrong");
        console.log('oops', error)
      });
  }
  updateRowData(row_obj) {
    this.adk.updateTimeRangeData(row_obj as TimeRange).subscribe(
      data => {
        alert(data.message);
        this.getTimeRangeData();
      },
      error => {
        alert("ERROR : Something is wrong");
        console.log('oops', error)
      });
  }

  deleteRowData(row_obj) {
    this.adk.deleteTimeSchedule(row_obj as TimeRange).subscribe(
      data => {
        alert(data.message);
        this.getTimeRangeData();
      },
      error => {
        alert("ERROR : Something is wrong");
        console.log('oops', error)
      });
  }

}
