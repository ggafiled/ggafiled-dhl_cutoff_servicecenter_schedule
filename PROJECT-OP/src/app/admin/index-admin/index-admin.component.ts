import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { BackendService } from '../../service/backend.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-index-admin',
  templateUrl: './index-admin.component.html',
  styleUrls: ['./index-admin.component.css']
})
export class IndexAdminComponent implements OnInit {

   uploader: FileUploader = new FileUploader({ url: "http://localhost:3000/api/v1/upload/vtr", itemAlias: 'video',autoUpload:false,removeAfterUpload:true,maxFileSize:1024*1024*500});;

  constructor(private k:BackendService,private location: Location) {
    console.log("URL Upload:"+this.k.getUrlUploading());
   }

  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => { 
      file.withCredentials = false; 
      console.log("holding file for uploading.");
    };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
    };
  }

}
