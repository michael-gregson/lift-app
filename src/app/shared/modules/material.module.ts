import { NgModule } from '@angular/core';
import {
  MdToolbarModule,
  MdButtonModule,
  MdIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MdToolbarModule,
    MdButtonModule,
    MdIconModule
  ],
  exports: [
    MdToolbarModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: []
})
export class MaterialModule { }
