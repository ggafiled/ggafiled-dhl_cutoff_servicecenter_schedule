import { Component, OnInit ,Input, ElementRef, Renderer2, ViewChild} from '@angular/core';
import { BackendService } from '../../service/backend.service';
import { CutOffInterface } from '../../interfaces/cut-off';
import { from } from 'rxjs';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-panel_cut_off_normal',
  templateUrl: './panel_cut_off_normal.component.html',
  styleUrls: ['./panel_cut_off_normal.component.css']
})

export class PanelCutOffNormalComponent implements OnInit {

  dateTime:any;
  data:CutOffInterface[] = [];
  loadDataIsSuccess:boolean;
  urlStreamimg:string;
  videoShow:boolean;
  @ViewChild("tablePanel",{static:false}) tablePanel:ElementRef;
  
  constructor(private k:BackendService,private renderer: Renderer2) { 
    this.getData();
    this.dateTime  = Date.now();
    setInterval( async ()=>{
      this.dateTime  = Date.now();
    },1);
  }

  getData(){
    this.k.getDataPanelOne().subscribe(
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
