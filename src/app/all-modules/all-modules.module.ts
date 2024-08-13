import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllModulesRoutingModule } from './all-modules-routing.module';
import { AllModulesComponent } from './all-modules.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AllModulesComponent
  ],
  imports: [
    CommonModule,
    AllModulesRoutingModule,
    NgbModule
  ]
})
export class AllModulesModule { }
