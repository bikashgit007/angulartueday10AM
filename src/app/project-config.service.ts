import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';
import {  ProjectConfig }  from '../project-config';
import {Observable,throwError} from "rxjs";
import {catchError,map} from 'rxjs/operators';
import {Project} from './admin/Project';
import { DeveloperRole } from './DeveloperRole';


@Injectable({
  providedIn: 'root'
})
export class ProjectConfigService {

  readonly APP_URL = 'http://localhost:1246/Springmvcangular';
  constructor(private _http: HttpClient) { }
  
  
project:Project[];

  onProjectConfig( projectid:number,roleid:string, location:string ,perhourbilling:number) : Observable<ProjectConfig>{

    console.log('I m here in service'+projectid+"/"+roleid);
    




     let head= new HttpHeaders({'Content-Type':'Application/json'});
    return this._http.post<ProjectConfig>(this.APP_URL+ '/' +"addProjectConfig"+ "/"+projectid+"/"+roleid+"/"+location+"/"+perhourbilling,{headers:head})
    .pipe(catchError(this.errorhandler));
      };

      errorhandler(error : Response)
  { 
    console.log('I m in error handler');
   console.log(error.status);
   console.log(error);
   
   return throwError(error);
 }




getAllProject():Observable<Project[]>{


  
    
    //  let head= new HttpHeaders({'Content-Type':'Application/json'});
   return this._http.get<Project[]>(this.APP_URL+ '/' +"getAllProject" ) 
    .pipe(catchError(this.errorhandler));
      
  };

     
  getAllRole():Observable<DeveloperRole[]>{


  
    
    //  let head= new HttpHeaders({'Content-Type':'Application/json'});
   return this._http.get<DeveloperRole[]>(this.APP_URL+ '/' +"getAllRole" ) 
    .pipe(catchError(this.errorhandler));
      
  };





}

//  private _options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })




