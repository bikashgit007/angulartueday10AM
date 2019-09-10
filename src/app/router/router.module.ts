import { NgModule,Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {RouterModule} from '@angular/router';

import {HomepageComponent } from '../homepage/homepage.component';
import {LoginComponent} from '../login/login.component';
import { NavigationComponent } from '../navigation/navigation.component';
import {MidAdminComponent} from '../mid-admin/mid-admin.component';
import { MiddeoComponent} from '../middeo/middeo.component';

import {ProjectConfigComponent} from '../admin/project-config/project-config.component';
import {DeveloperConfigComponent} from '../admin/developer-config/developer-config.component';
import {DeveloperattendanceComponent} from '../dataentry/developerattendance/developerattendance.component';
import {AboutComponent} from '../about/about.component';
import {GalleryComponent} from '../gallery/gallery.component';

import {BillingComponent} from '../admin/billing/billing.component'







export const RoutesTable : Routes = [
  { path: 'homepage', component:HomepageComponent },
  { path: 'login',      component:LoginComponent},
  {path:'admin', component: MidAdminComponent },
  {path:'dataentry', component: MiddeoComponent },
  
  {path:'projectconfig', component:ProjectConfigComponent},
  {path:'developerallocation',component:DeveloperConfigComponent},
  {path:'addattendance', component:DeveloperattendanceComponent},
  {path:'about',component:AboutComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'billing',component:BillingComponent}

  

]


@NgModule({
  declarations: [HomepageComponent,LoginComponent,NavigationComponent,MidAdminComponent,MiddeoComponent,ProjectConfigComponent,DeveloperattendanceComponent,DeveloperConfigComponent,BillingComponent],
  imports: [
    CommonModule,RoutingModule,NavigationComponent,MidAdminComponent,MiddeoComponent,ProjectConfigComponent,DeveloperattendanceComponent,DeveloperConfigComponent
  ],
  exports:[HomepageComponent,LoginComponent,NavigationComponent,MidAdminComponent,MiddeoComponent,ProjectConfigComponent,DeveloperattendanceComponent,DeveloperConfigComponent,BillingComponent]
})
export class RoutingModule { }
