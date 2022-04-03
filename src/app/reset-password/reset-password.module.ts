import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResetPasswordPageRoutingModule } from './reset-password-routing.module';

import { ResetPasswordPage } from './reset-password.page';
import { ShowHidePasswordComponent } from '../show-hide-password/show-hide-password.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResetPasswordPageRoutingModule
  ],
  exports: [ShowHidePasswordComponent],
  declarations: [ResetPasswordPage, ShowHidePasswordComponent]
})
export class ResetPasswordPageModule {}
