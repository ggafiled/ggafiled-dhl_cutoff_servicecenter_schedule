import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PanelCutOffNormalComponent} from '../normal/panel_cut_off_normal/panel_cut_off_normal.component';
import {IndexComponent} from '../normal/index/index.component';
import { PanelServiceCenterNormalComponent } from '../normal/panel_service_center_normal/panel_service_center_normal.component';
import { IndexAdminComponent } from '../admin/index-admin/index-admin.component';
import { PanelCutOffComponent } from '../admin/panel-cut-off/panel-cut-off.component';
import { PanelServiveCenterComponent } from '../admin/panel-service-center/panel-service-center.component';
import { PanelTimeRangeComponent } from '../admin/panel-time-range/panel-time-range.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path:"",component:IndexComponent},
  { path:"cutoff",component:PanelCutOffNormalComponent },
  { path:"servicecenter",component:PanelServiceCenterNormalComponent},
  { path:"admin",component:IndexAdminComponent},
  { path:"edit/servicecenter",component:PanelServiveCenterComponent},
  { path:"edit/cutoff",component:PanelCutOffComponent},
  { path:"edit/timerange",component:PanelTimeRangeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class RouteRoutingModule {}
