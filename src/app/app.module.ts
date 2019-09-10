// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';

// import { AppComponent } from './app.component';
 

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpClientModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {  ReactiveFormsModule} from '@angular/forms';
import { MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { ProjectConfigComponent } from './admin/project-config/project-config.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { RoutesTable } from './router/router.module';
import { MidAdminComponent } from './mid-admin/mid-admin.component';
import { MiddeoComponent } from './middeo/middeo.component';

import { DeveloperConfigComponent } from './admin/developer-config/developer-config.component';
import { DeveloperattendanceComponent } from './dataentry/developerattendance/developerattendance.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import {FormsModule} from '@angular/forms'
import {BillingComponent} from './admin/billing/billing.component'
 

@NgModule({
  declarations: [
    AppComponent,
    ProjectConfigComponent,
    LoginComponent,
    NavigationComponent,
    HomepageComponent,
    MidAdminComponent,
    MiddeoComponent,
   
    DeveloperConfigComponent,
    ProjectConfigComponent,
    DeveloperattendanceComponent,
    AboutComponent,
    GalleryComponent,
    BillingComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(RoutesTable),
    MatMenuModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
