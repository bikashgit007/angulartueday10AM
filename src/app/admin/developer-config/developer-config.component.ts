import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { DevAllocation } from 'src/app/DevAllocation';
import {DevAllocationService} from 'src/app/dev-allocation.service';
import { Developer } from 'src/Developer';
import { ProjectConfig } from 'src/project-config';

@Component({
  selector: 'app-developer-config',
  templateUrl: './developer-config.component.html',
  styleUrls: ['./developer-config.component.css']
})
export class DeveloperConfigComponent implements OnInit {

  DeveloperAllocationForm:FormGroup;
  // projectconfig: ProjectConfig[];
  result:DevAllocation;
  
  dalloc:DevAllocation;
  id:number;
  configid:number;
 


  developers:Developer[];

  configs:ProjectConfig[];


  constructor(private service:DevAllocationService,private fb: FormBuilder) { }

  ngOnInit() {
      this.DeveloperAllocationForm = this.fb.group({

        'id':[],
       'configid': []
    
      

        

      }) ;




      this.service.getAllConfig().subscribe((res)=> {
        console.log('Here');
        console.log(res);
        this.configs=res;
      })

      this.service.getAllDeveloper().subscribe((res)=> {
        console.log('Here');
        console.log(res);
        this.developers=res;
      })

    }

    onDeveloperConfig()
    {
      console.log(this.DeveloperAllocationForm.value);
      let i=this.DeveloperAllocationForm.value;
      this.service.onDeveloperConfig(i.id,i.configid).subscribe((res)=> {
        console.log('Here');
        console.log(res);
        this.result= res
      })

    }



    OnSelectedDevId($event)
  {


    


    let selectedOptions = event.target['options'];

   let selectedIndex = selectedOptions.selectedIndex;

   let selectElementText = selectedOptions[selectedIndex].text;

   console.log(selectElementText)

  }

  OnSelectedConfigId($event)
  {


    


    let selectedOptions = event.target['options'];

   let selectedIndex = selectedOptions.selectedIndex;

   let selectElementText = selectedOptions[selectedIndex].text;

   console.log(selectElementText)

  }




  }

