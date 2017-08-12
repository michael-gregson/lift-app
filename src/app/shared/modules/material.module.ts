import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdButtonModule,
  MdIconModule,
  MdSidenavModule,
  MdCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdCardModule
  ],
  exports: [
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdCardModule
  ],
  declarations: []
})
export class MaterialModule { }
