import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ProjectConfig } from 'src/project-config';
import {ProjectConfigService} from 'src/app/project-config.service';
import { Project } from '../Project';
import { DeveloperRole } from 'src/app/DeveloperRole';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-project-config',
  templateUrl: './project-config.component.html',
  styleUrls: ['./project-config.component.css']
})
export class ProjectConfigComponent implements OnInit {

  ProjectConfigForm:FormGroup;
  // projectconfig: ProjectConfig[];
  result:ProjectConfig;
  
  pconfig:ProjectConfig;
  configid:number;
  projectid:number;
  roleid:string;
  location:string[];
  perhourbilling:number;



  projects:Project[];

    roles:DeveloperRole[];

  constructor(private service:ProjectConfigService,private fb: FormBuilder) { }

  ngOnInit() {
      this.ProjectConfigForm = this.fb.group({

    'configid': [],
    'projectid':[],
    'roleid':[],
    'location':[],
    'perhourbilling':['',[Validators.required,Validators.minLength(0),Validators.maxLength(3)]]

      }) ;


      this.location=[
      "onsite","offside" ];
   


        this.service.getAllProject().subscribe((res)=>{
          this.projects=res;
          console.log(this.projects);
        })

        this.service.getAllRole().subscribe((res)=>{
          this.roles=res;
          console.log(this.projects);
        })




    }
    onProjectConfig()
    {
      console.log(this.ProjectConfigForm.value);
      let i=this.ProjectConfigForm.value;
      console.log("hey"+i);
      console.log(this.ProjectConfigForm.value);
      this.service.onProjectConfig(i.projectid,i.roleid,i.location,i.perhourbilling).subscribe((res)=> {
        console.log('Here');
        console.log(res);
        this.result= res
      }






      )
    }








    OnSelectedLocation(event)

  {

    let selectedOptions = event.target['options'];

   let selectedIndex = selectedOptions.selectedIndex;

   let selectElementText = selectedOptions[selectedIndex].text;

   console.log(selectElementText)

  }


  OnSelectedProject($event)
  {


    


    let selectedOptions = event.target['options'];

   let selectedIndex = selectedOptions.selectedIndex;

   let selectElementText = selectedOptions[selectedIndex].text;

   console.log(selectElementText)

  }



  OnSelectedRole($event){




    let selectedOptions = event.target['options'];

   let selectedIndex = selectedOptions.selectedIndex;

   let selectElementText = selectedOptions[selectedIndex].text;
    
   console.log(selectElementText)

  }


  }
  
  

  
