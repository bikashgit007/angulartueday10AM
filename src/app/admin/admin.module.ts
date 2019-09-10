import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectConfigComponent } from '../Admin/project-config/project-config.component';
import { DeveloperConfigComponent } from '../Admin/developer-config/developer-config.component';
import { BillingComponent } from './billing/billing.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProjectConfigComponent, DeveloperConfigComponent, BillingComponent]
})
export class AdminModule { }
