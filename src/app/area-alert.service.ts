import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AreaAlertService {
  areaurl="https://api.weather.gov/alerts/active/area/";
  constructor(private http:HttpClient) { }
  getArea(us: String)
  {
    return this.http.get(this.areaurl+us);
    console.log()
  }
}
 