import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AndhraComponent } from './andhra/andhra.component';
import { TelanganaComponent } from './telangana/telangana.component';
import { StatesComponent } from './states/states.component';

@NgModule({
  declarations: [
    AppComponent,
    AndhraComponent,
    TelanganaComponent,
    StatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
