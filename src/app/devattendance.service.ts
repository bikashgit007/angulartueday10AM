import { Injectable } from '@angular/core';

import { HttpClient,HttpHeaders, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';

import {   DevAttendance }  from 'src/DevAttendance';

import {Observable,throwError} from "rxjs";

import {catchError,map} from 'rxjs/operators';





@Injectable({

  providedIn: 'root'

})

export class DevattendanceService {



  readonly APP_URL = 'http://localhost:1246/Springmvcangular';

  constructor(private _http: HttpClient) { }

  

  

  onDeveloperAttendance(devId:number, month:string,year:number,totalnoofhourpresent:number) : Observable<DevAttendance>{



    console.log('I m here in service'+month+"/"+year);

    

     let head= new HttpHeaders({'Content-Type':'Application/json'});

    return this._http.post<DevAttendance>(this.APP_URL+ '/'+"addAttendance"+"/"+ devId+"/"+month+ "/"+year+"/"+totalnoofhourpresent,{headers:head})

    .pipe(catchError(this.errorhandler));

      };



      errorhandler(error : Response)

  { 

    console.log('I m in error handler');

   console.log(error.status);

   console.log(error);

   

   return throwError(error);

 }

//  private _options = { headers: new HttpHeaders({ 'Content-Type': 'applicati

}
