import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';
import { AppComponent } from './app.component';
import { PanelCutOffNormalComponent } from './normal/panel_cut_off_normal/panel_cut_off_normal.component';
import {RouteRoutingModule} from '../app/route/route-routing.module';
import { IndexComponent } from './normal/index/index.component';
import { PanelServiceCenterNormalComponent } from './normal/panel_service_center_normal/panel_service_center_normal.component';
import { PanelFieldComponent } from './normal/panel-field/panel-field.component';
import { HttpClientModule } from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PanelCutOffComponent } from './admin/panel-cut-off/panel-cut-off.component';
import { PanelServiveCenterComponent } from './admin/panel-service-center/panel-service-center.component';
import { IndexAdminComponent } from './admin/index-admin/index-admin.component';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { 
  MatTableModule, 
  MatDialogModule, 
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule
} from '@angular/material';
import { DialogBoxComponent } from './admin/dialog-box/dialog-box.component';
import { ToastrModule } from 'ngx-toastr';
import { FileUploadModule, FileSelectDirective } from 'ng2-file-upload';
import { PanelTimeRangeComponent } from './admin/panel-time-range/panel-time-range.component';
import { MomentModule } from 'ngx-moment';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@NgModule({
  declarations: [
    AppComponent,
    PanelCutOffNormalComponent,
    IndexComponent,
    PanelServiceCenterNormalComponent,
    PanelFieldComponent,
    PanelCutOffComponent,
    PanelServiveCenterComponent,
    IndexAdminComponent,
    DialogBoxComponent,
    PanelTimeRangeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouteRoutingModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    MatTableModule, 
    MatDialogModule, 
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    ToastrModule.forRoot(),
    FileUploadModule,
    MomentModule.forRoot({
      relativeTimeThresholdOptions:{
        'm':59
      }
    })
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
