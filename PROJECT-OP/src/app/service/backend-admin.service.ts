import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import {TimeRange} from '../interfaces/timerange';
import {TimeRangeType} from '../interfaces/timerange-type';
import { CutOffInterface } from '../interfaces/cut-off';
import { ServiveCenterInterface } from '../interfaces/service-center';

@Injectable({
  providedIn: 'root'
})
export class BackendAdminService {

  private _endPoint:string;
  private localIp:any;

  constructor(private http:HttpClient) { 
    this.localIp = this.getAbsoluteDomainUrl();
    this._endPoint = (this.localIp != "" && this.localIp != null)? "http://"+this.localIp+":3000/api/v1":"http://localhost:3000/api/v1";
    console.log("DB SERVER IP:"+this._endPoint);
  }

  public getTimeRange(Type_ID:number):any {
    return this.http.get(this._endPoint+"/timerange/"+Type_ID).pipe(map(res => <TimeRange[]>res));
  }

  public getTimeRangeAll():any {
    return this.http.get(this._endPoint+"/timerange").pipe(map(res => <TimeRange[]>res));
  }

  public getTimeRangeType():any {
    return this.http.get(this._endPoint+"/timerangetype").pipe(map(res => <TimeRangeType[]>res));
  }

  public updateTimeRangeData(timerangeUpdate:TimeRange):any {
    const body = {
      "Id": timerangeUpdate.Id,
      "Name_display": timerangeUpdate.Name_display,
      "Start_time": timerangeUpdate.Start_time,
      "End_time": timerangeUpdate.End_time,
      "Type_ID": timerangeUpdate.Type_ID
  };
    console.log("Update with ID : "+timerangeUpdate.Id);
    return this.http.put(this._endPoint+"/update/timerange",body);
  }

  public addnewTimeRangeData(timerangeUpdate:TimeRange):any {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const body = {
      "Name_display": timerangeUpdate.Name_display,
      "Start_time": timerangeUpdate.Start_time,
      "End_time": timerangeUpdate.End_time,
      "Type_ID": timerangeUpdate.Type_ID
    };
    console.log("AddNew TypeId : "+timerangeUpdate.Type_ID);
    if (timerangeUpdate.Type_ID == 1){
      console.log("AddNew URL : "+this._endPoint+"/addnewtemplate/servicecenter");
      return this.http.post(this._endPoint+"/addnewtemplate/servicecenter",body,{headers});
    }else {
      console.log("AddNew URL : "+this._endPoint+"/addnewtemplate/cutoff");
      return this.http.post(this._endPoint+"/addnewtemplate/cutoff",body,{headers});
    }
  }


  public deleteTimeSchedule(timerangeUpdate:TimeRange):any {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const body = {
      "Id":timerangeUpdate.Id,
      "Name_display": timerangeUpdate.Name_display,
      "Start_time": timerangeUpdate.Start_time,
      "End_time": timerangeUpdate.End_time,
      "Type_ID": timerangeUpdate.Type_ID
    };
    console.log("Delete ID : "+timerangeUpdate.Id);
    if (timerangeUpdate.Type_ID == 1){
      console.log("Delete ID : "+this._endPoint+"/delete/servicecenter");
      return this.http.post(this._endPoint+"/delete/servicecenter",body,{headers});
    }else {
      console.log("Delete ID : "+this._endPoint+"/delete/cutoff");
      return this.http.post(this._endPoint+"/delete/cutoff",body,{headers});
    }
  }



  public updateServiceCenterData(servicecenterUpdate:ServiveCenterInterface):any {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const body = {
      "M_Id": servicecenterUpdate.M_Id,
      "Source": servicecenterUpdate.Source,
      "Time1": servicecenterUpdate.Time1,
      "Time2": servicecenterUpdate.Time2,
      "Time3": servicecenterUpdate.Time3,
      "Time4": servicecenterUpdate.Time4,
      "Time5": servicecenterUpdate.Time5,
      "Time6": servicecenterUpdate.Time6,
      "Time7": servicecenterUpdate.Time7,
      "Time8": servicecenterUpdate.Time8,
      "Time9": servicecenterUpdate.Time9,
      "Time10": servicecenterUpdate.Time10,
      "Time11": servicecenterUpdate.Time11,
      "Time12": servicecenterUpdate.Time12,
      "Time13": servicecenterUpdate.Time13,
      "Time14": servicecenterUpdate.Time14,
      "Time15": servicecenterUpdate.Time15,
      "Time16": servicecenterUpdate.Time16,
      "TimeRangeId": servicecenterUpdate.TimeRangeId
  };
    return this.http.put(this._endPoint+"/update/servicecenter",body,{headers});
  }

  public updateCutOffData(cutoffUpdate:CutOffInterface):any {
    const headers = new HttpHeaders().set("Content-Type", "application/json");
    const body = {
      "M_Id": cutoffUpdate.M_Id,
      "Source": cutoffUpdate.Source,
      "Destination": cutoffUpdate.Destination,
      "Time1": cutoffUpdate.Time1,
      "Time2": cutoffUpdate.Time2,
      "Time3": cutoffUpdate.Time3,
      "Time4": cutoffUpdate.Time4,
      "TimeRangeId": cutoffUpdate.TimeRangeId
  };
    return this.http.put(this._endPoint+"/update/cutoff",body,{headers});
  }

  public getDataServiceCenterHasCondition(conditionTime:string):any {
      return this.http.get(this._endPoint+'/getservicecenter/"'+conditionTime+'"').pipe(map(res => <ServiveCenterInterface[]>res));
  }

  public getDataCutOffHasCondition(conditionTime:string):any {
    console.log(this._endPoint+"/getcutoff/"+conditionTime)
      return this.http.get(this._endPoint+'/getcutoff/"'+conditionTime+'"').pipe(map(res => <CutOffInterface[]>res));
  }

  public getAbsoluteDomainUrl(): string {
    if (window
        && "location" in window
        && "protocol" in window.location
        && "host" in window.location) {
        return  window.location.hostname;
    }
    return null;
  }
}
