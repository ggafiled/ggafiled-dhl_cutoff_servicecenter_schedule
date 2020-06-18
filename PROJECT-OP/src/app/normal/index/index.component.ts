import { Component, OnInit,ViewEncapsulation  } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class IndexComponent implements OnInit {

  dateTime:any;
  constructor() { 
    setInterval(()=>{
      this.dateTime  = Date.now();
    },1000);
  }

  ngOnInit() {
  }

}
