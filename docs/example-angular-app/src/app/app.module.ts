import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {StreamlineIconModule} from '@streamlinehq/streamline-wrapper-angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StreamlineIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
