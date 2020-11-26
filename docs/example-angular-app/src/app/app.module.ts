import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {StreamlineWrapperAngularModule} from '@streamlinehq/streamline-wrapper-angular';
import {StreamlineIconModule} from 'streamline-wrapper-angular';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // StreamlineWrapperAngularModule,
    StreamlineIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
