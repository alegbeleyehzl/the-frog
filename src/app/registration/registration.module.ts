import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import { ShowHidePasswordComponent } from '../show-hide-password/show-hide-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule
  ],
  exports:[ShowHidePasswordComponent],
  declarations: [RegistrationPage, ShowHidePasswordComponent]
})
export class RegistrationPageModule {}
