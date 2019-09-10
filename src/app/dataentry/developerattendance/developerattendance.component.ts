import { Component, OnInit } from '@angular/core';

import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import {DevAttendance} from 'src/DevAttendance';

import {DevattendanceService} from 'src/app/devattendance.service';


import {Developer} from 'src/Developer'

import {DevAllocationService} from 'src/app/dev-allocation.service';



@Component({

  selector: 'app-developerattendance',

  templateUrl: './developerattendance.component.html',

  styleUrls: ['./developerattendance.component.css']

})

export class DeveloperattendanceComponent implements OnInit {



  DeveloperAttendanceForm:FormGroup;

  // projectconfig: ProjectConfig[];

  result:DevAttendance;

  

  dattend:DevAttendance;

  month:string;

  year:number;

  

  totalnoofhourpresent:number;

  developers:Developer[];

  constructor(private service_dev:DevAllocationService,private service:DevattendanceService,private fb: FormBuilder) { }



  ngOnInit() {

      this.DeveloperAttendanceForm = this.fb.group({


    'devId':[],
    'month': [],

    'year':[],
    'HalfDay':[],
    'FullDay':[],
    'totalnoofhourpresent':[],
      }) ;

   

      this.service_dev.getAllDeveloper().subscribe((res)=> {
        console.log('Here');
        console.log(res);
        this.developers=res;
      })




    }

    onDeveloperAttendance()

    {

      console.log(this.DeveloperAttendanceForm.value);

      let i=this.DeveloperAttendanceForm.value;

      this.service. onDeveloperAttendance(i.devId,i.month, i.year,this.totalnoofhourpresent).subscribe((res)=> {

        console.log('Here');



        console.log(res);

        this.result= res

      }



      )

    }


    totalnum(){

      let i=this.DeveloperAttendanceForm.value;
      
      this.totalnoofhourpresent=parseInt(i.HalfDay)*4+ parseInt(i.FullDay)*8;

      console.log(this.totalnoofhourpresent);
    }

    OnSelectedDevId($event)
  {


    


    let selectedOptions = event.target['options'];

   let selectedIndex = selectedOptions.selectedIndex;

   let selectElementText = selectedOptions[selectedIndex].text;

   console.log(selectElementText)

  }
}
