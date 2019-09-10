import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import {  Developer }  from '../../src/Developer';
import {Observable,throwError} from "rxjs";
import {catchError,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  readonly APP_URL = 'http://localhost:1246/Springmvcangular';
  constructor(private _http: HttpClient) { }
  
  
  onLogin(id:number,password:string) : Observable<Developer>{

    console.log('I m here in service'+id+"/"+password);
    
     let head= new HttpHeaders({'Content-Type':'Application/json'});
    return this._http.post<Developer>(this.APP_URL+ '/' +id+ "/"+password,{headers:head})
    .pipe(catchError(this.errorhandler));
      };

      errorhandler(error : Response)
  { 
    console.log('I m in error handler');
   console.log(error.status);
   console.log(error);
   
   return throwError(error);
 }
//  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};







//Project

// projectConfig(pConfig:ProjectConfig) : Observable<Developer>{

//   //console.log('I m here in service'+id+"/"+password);
  
//    let head= new HttpHeaders({'Content-Type':'Application/json'});
//   return this._http.post<string>(this.APP_URL+ '/' +pConfig,{headers:head})
//   .pipe(
//     map((res:Response)=>
//       return res;
//       ),
//     catchError(this.errorhandler));
//     };

//     errorhandler(error : Response)
// { 
//   console.log('I m in error handler');
//  console.log(error.status);
//  console.log(error);
 
//  return throwError(error);
// }


// }
 


