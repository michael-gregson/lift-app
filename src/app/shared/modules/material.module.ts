import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdSidenavModule
} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule
  ],
  exports: [
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule
  ],
  declarations: []
})
export class MaterialModule { }
