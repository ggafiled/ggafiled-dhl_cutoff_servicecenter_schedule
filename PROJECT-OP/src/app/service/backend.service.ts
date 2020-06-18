import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable, interval } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { CutOffInterface } from '../interfaces/cut-off';
import { ServiveCenterInterface } from '../interfaces/service-center';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private _endPoint:string;
  private localIp:any;

  constructor(private http:HttpClient) { 
    this.localIp = this.getAbsoluteDomainUrl();
    this._endPoint = (this.localIp != "" && this.localIp != null)? "http://"+this.localIp+":3000/api/v1":"http://localhost:3000/api/v1";
    console.log("DB SERVER IP:"+this._endPoint);
  }

  public getDataPanelOne():Observable<CutOffInterface[]> {
    return interval(10000).pipe(flatMap( () => {
      return this.http.get(this._endPoint+"/getcutoff").pipe(map(res => <CutOffInterface[]>res));
    }));
  }

  public getDataPanelTwo():Observable<ServiveCenterInterface[]> {
    return interval(10000).pipe(flatMap( () => {
      return this.http.get(this._endPoint+"/getservicecenter").pipe(map(res => <ServiveCenterInterface[]>res));
    }));
  }

  public getUrlStreamimg():string{
    return this._endPoint+"/stream";
  }

  public getUrlUploading():string{
    return this._endPoint+"/upload/vtr";
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
