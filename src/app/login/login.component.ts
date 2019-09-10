import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {LoginService} from '../login.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
// import {ReactiveFormsModule} from '@angular/forms';
import { Developer } from 'src/Developer';
import { Navigation } from 'selenium-webdriver';
import{Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  result: Developer;

  // indeterminate = false;
  // labelPosition = 'after';
  // disabled = false;

  
  title = 'Spring Mvc Angular Tutorial';
  
  id : number;
  password : string;
  developer : Developer;
  role : string;
    
  constructor(private service : LoginService,private formBuilder: FormBuilder,private  router:Router )
    {

    }

    LoginForm: FormGroup;
    ngOnInit() {
      this.LoginForm = this.formBuilder.group({
        'id' : ['',Validators.required],
        'password' :['',[Validators.required, Validators.minLength(5),Validators.maxLength(10)]]
        
      });
    }
    onLogin()
    {
     
    let i=this.LoginForm.value;

  
      
      this.service.onLogin(i.id,i.password).subscribe((res)=> {
        console.log('Here');
        console.log(res);
        this.result= res

        if(this.result.name.length>0)
        
        {
          
          this.role = this.result.applicationRole;

           
          if(this.role=="Admin"){
            console.log(this.role);
            this.router.navigate(['/admin']);

          }


          if(this.role=="DEO"){
            console.log(this.role);
            this.router.navigate(['/dataentry']);

          }
          
        }
        else
        {
          alert("You are not a valid User")
        }
        
        
        
        }



        
          
        


    );
    // console.log(value.F_Name);
    // alert(value);


    
  }

        
      
        
        

      
        

}
