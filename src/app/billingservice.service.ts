import { Injectable } from '@angular/core';
import { DevBilling } from './admin/DevBilling';
import {Observable,throwError} from "rxjs";
import { HttpClient,HttpHeaders, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import {catchError,map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class BillingserviceService {

  constructor(private _http: HttpClient) { }


  readonly APP_URL = 'http://localhost:1246/Springmvcangular';


  onDeveloperBilling( id:number,month:String,year:number) : Observable<number>{

    console.log('I m here in service'+id+"/"+"");
    
    
    



     let head= new HttpHeaders({'Content-Type':'Application/json'});
    return this._http.get<number>(this.APP_URL+ '/' +"developerBilling"+"/"+id+"/"+month+"/"+year,{headers:head})
    .pipe(catchError(this.errorhandler));
      };

      errorhandler(error : Response)
  { 
    console.log('I m in error handler');
   console.log(error.status);
   console.log(error);
   
   return throwError(error);
 }

}
