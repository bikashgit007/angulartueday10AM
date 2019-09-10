// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {

//   checked = false;
//   indeterminate = false;
//   labelPosition = 'after';
//   disabled = false;

  
//   title = 'Spring Mvc Angular Tutorial';
//   myresponse: any;
//   readonly APP_URL = 'http://localhost:1246/Springmvcangular';
//   constructor(private _http: HttpClient) { }
//   getAllEmployees() {
//     this._http.get(this.APP_URL + '/getemployees').subscribe(
//       data => {
//         this.myresponse = data;
//       },
//       error => {
//         console.log('Error occured', error);
//       }
//     );
//   }
// }

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoginService} from '../app/login.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
// import {ReactiveFormsModule} from '@angular/forms';
import { Developer } from 'src/Developer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // result: Developer= "";

  // // indeterminate = false;
  // // labelPosition = 'after';
  // // disabled = false;

  
  // title = 'Spring Mvc Angular Tutorial';
  
  // id : number;
  // password : string;
  // developer : Developer;
    
  // constructor(private service : LoginService,private formBuilder: FormBuilder)
  //   {}
  //   onLogin()
  //   {
  //     console.log('I  m here ');
  //     console.log(this.LoginForm.value);
  //   let i=this.LoginForm.value;

  
      
  //     this.service.onLogin(i.id,i.password).subscribe((res)=> {
  //       console.log('Here');
  //       console.log(res);
  //       this.result= res

  //       if(this.result.name.length>0)
        
  //       {
        
  //       alert("Yu are a valid User");
  //     //  router.navigate(['dashboard']);

  //       }
  //       else
  //       {
  //         alert("You are not a valid User")
  //       }
        
        
        
  //       },
        
  //       (error) => { alert(error)
      
  //     alert(error);
  //     console.log(error);
  //   }
        
      
        
  //       }

      
      
      

  //   //     onProjectConfig()
  //   //     {

  //   //       let i=this.ProjectConfigForm.value;
          
  //   //       this.service.projectConfig(i).subscribe((res)=>{





  //   //       })


  //   // }

  //   LoginForm: FormGroup;
  //    ProjectConfigForm : FormGroup;

    ngOnInit(){
      
    }
  }

