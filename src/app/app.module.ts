import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AppComponent} from "./app.component"; // <-- NgModel lives here


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
