import { Component, OnInit } from '@angular/core';
import { AlertType } from './core/models/alert-type.model';
import { WeatherServices } from './core/weather.services';
import{UpdateAlertService} from './update-alert.service';
import { AreaAlertService } from './area-alert.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  alertTypes: AlertType[];
  codeData=[];
  title = 'interview-app';
  areaAlert=[];
  
  

  constructor( private router:Router,
    private weatherServices: WeatherServices, private alert:UpdateAlertService, private area:AreaAlertService) {
    
  }


  public ngOnInit(){
    this.weatherServices.getAlertTypes().subscribe(res => {
      this.alertTypes = res;
    });

    // this.alert.getData().subscribe(data=>{
    //   console.log("object.keys",data)

      this.alert.getData().subscribe(data=>{
        this.codeData=Object.keys(data['areas'])
        console.log(Object.keys(data['areas']))
      })
      this.area.getArea(this.codeData[0]).subscribe(area=>{
       console.log(this.codeData[0])
      })
    }

   
  
}