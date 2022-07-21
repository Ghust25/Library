import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibTestModule } from 'lib-test';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LibTestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
