import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UpdateAlertService {
    url="https://api.weather.gov/alerts/active/count";
  constructor(private http: HttpClient) { }
getData()
{
  
  return this.http.get(this.url)
}
}
//   .pipe(
//     map(data=>{
//       const areaArray: Array<any> = [];
//       for (const areas in data){
      
//         areaArray.push(data[areas]);
//       }
//       // console.log(areaArray[4])
//       let keys =Object.keys(areaArray[4]);
//       // console.log('keys',keys);
//     })
//   )
