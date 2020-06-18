import { Component, OnInit, Input,ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { BackendService } from '../../service/backend.service';
import {ServiveCenterInterface} from '../../interfaces/service-center';
import { from } from 'rxjs';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-panel_service_center_normal',
  templateUrl: './panel_service_center_normal.component.html',
  styleUrls: ['./panel_service_center_normal.component.css']
})
export class PanelServiceCenterNormalComponent implements OnInit {

  dateTime:any;
  data:ServiveCenterInterface[] = [];
  loadDataIsSuccess:boolean;
  videoShow:boolean;
  urlStreamimg:string;
  @ViewChild("tablePanel",{static:false}) tablePanel:ElementRef;
  
  constructor(private k:BackendService,private renderer: Renderer2) { 
    this.getData();
    this.dateTime  = Date.now();
    setInterval( async ()=>{
      this.dateTime  = Date.now();
    },1);
  }

  getData(){
    this.k.getDataPanelTwo().subscribe(
    data => { 
      this.data = data;
      if(!(data && data.length)){
        this.loadDataIsSuccess = false;
        this.videoShow = true;
        this.renderer.setStyle(this.tablePanel.nativeElement,"height","20vh");
      }else{
        this.loadDataIsSuccess = true;
        this.renderer.setStyle(this.tablePanel.nativeElement,"height","80vh");
        this.videoShow = false;
      }
    },
    error => {
      console.log('oops',error);
      this.loadDataIsSuccess = false;
      this.videoShow = false;
      this.renderer.setStyle(this.tablePanel.nativeElement,"height","20vh");
    });
  }

  ngOnInit() {
    this.urlStreamimg = this.k.getUrlStreamimg();
  }

}
