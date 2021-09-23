import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

// Services
import { WeatherServices } from './core/weather.services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateAlertService } from './update-alert.service';
import { AreaAlertService } from './area-alert.service';


// mat 
import { MatSliderModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import { AreaDetailsComponent } from './area-details/area-details.component';



@NgModule({
  declarations: [
    AppComponent,
    AreaDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatExpansionModule,
    MatButtonModule,
    RouterModule.forRoot([
      {path:'area-details', component:AreaDetailsComponent},
      {path:'app', component:AppComponent}
    ])
    
  ],
  providers: [
    WeatherServices,
    UpdateAlertService,
    AreaAlertService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
