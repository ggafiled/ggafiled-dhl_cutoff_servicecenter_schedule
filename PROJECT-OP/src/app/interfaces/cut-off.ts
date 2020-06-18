import { Time } from '@angular/common';

export interface CutOffInterface {
  M_Id:number;
  Id:string;
  Source:string;
  Destination:string;
  Time1:Time;
  Time2:Time;
  Time3:Time;
  Time4:Time;
  TimeRangeId:number;
  Type_ID:number;
}
