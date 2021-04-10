import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AstronautsComponent } from './astronauts/astronauts.component';
import { AstronautComponent } from './astronauts/astronaut/astronaut.component';
import { AstronautListComponent } from './astronauts/astronaut-list/astronaut-list.component';
import { AstronautService } from './shared/astronaut.service';

@NgModule({
  declarations: [
    AppComponent,
    AstronautsComponent,
    AstronautComponent,
    AstronautListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AstronautService],
  bootstrap: [AppComponent]
})
export class AppModule { }
