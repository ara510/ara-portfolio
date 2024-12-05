import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NhComponent } from './nh/nh.component';
import { JlComponent } from './jl/jl.component';
import { RfamComponent } from './rfam/rfam.component';
import { AccComponent } from './acc/acc.component';
import { AraBeatComponent } from './ara-beat/ara-beat.component';
import { HomeComponent } from './home/home.component';
import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NhComponent,
    JlComponent,
    RfamComponent,
    AccComponent,
    AraBeatComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
