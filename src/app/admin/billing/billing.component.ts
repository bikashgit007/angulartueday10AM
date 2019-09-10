import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {ProjectConfigService} from 'src/app/project-config.service'
import { Developer } from 'src/Developer';
import { ProjectConfig } from 'src/project-config';
import {DevAllocationService} from 'src/app/dev-allocation.service';

import {DevBilling} from 'src/app/admin/DevBilling';


import {BillingserviceService} from 'src/app/billingservice.service'

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {


  DeveloperForm:FormGroup;
  developers:Developer[];
  month:string[];
  year:number[];
  constructor(private service:DevAllocationService,private service_bill:BillingserviceService,private fb: FormBuilder) { }
  
  ngOnInit() {
    this.DeveloperForm = this.fb.group({

      'id':[],
     'month': [],
      'year':[],
    

      

    }) ;

    this.month=["jan","feb","mar"];
    this.year=[2018,2019]


    this.service.getAllDeveloper().subscribe((res)=> {
      console.log('Here');
      console.log(res);
      this.developers=res;
    })




  }


  onDeveloperBilling()
  {
    console.log(this.DeveloperForm.value);
    let i=this.DeveloperForm.value;
    this.service_bill.onDeveloperBilling(i.id,i.month,i.year).subscribe((res)=> {
      console.log('Here');
      console.log(res);
      
    })

}
}