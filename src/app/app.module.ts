import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DataMatrixComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    DataMatrixComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [DataMatrixComponent]
})
export class AppModule { }
