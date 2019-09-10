import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import {  DevAllocation }  from 'src/app/DevAllocation';
import {Observable,throwError} from "rxjs";
import {catchError,map} from 'rxjs/operators';
import { ProjectConfig } from 'src/project-config';
import { Developer } from 'src/Developer';

@Injectable({
  providedIn: 'root'
})
export class DevAllocationService {

  readonly APP_URL = 'http://localhost:1246/Springmvcangular';
  constructor(private _http: HttpClient) { }
  
  
  onDeveloperConfig( id:number,configid:number) : Observable<DevAllocation>{

    console.log('I m here in service'+id+"/"+configid);
    
    
    



     let head= new HttpHeaders({'Content-Type':'Application/json'});
    return this._http.post<DevAllocation>(this.APP_URL+ '/' +"developerAllocation"+"/"+id+"/"+configid,{headers:head})
    .pipe(catchError(this.errorhandler));
      };

      errorhandler(error : Response)
  { 
    console.log('I m in error handler');
   console.log(error.status);
   console.log(error);
   
   return throwError(error);
 }



 getAllConfig():Observable<ProjectConfig[]>{


  
    
  //  let head= new HttpHeaders({'Content-Type':'Application/json'});
 return this._http.get<ProjectConfig[]>(this.APP_URL+ '/' +"getAllProjectConfig" ) 
  .pipe(catchError(this.errorhandler));
    
};

   
getAllDeveloper():Observable<Developer[]>{



  
  //  let head= new HttpHeaders({'Content-Type':'Application/json'});
 return this._http.get<Developer[]>(this.APP_URL+ '/' +"getAllDeveloper" ) 
  .pipe(catchError(this.errorhandler));
    
};





}
