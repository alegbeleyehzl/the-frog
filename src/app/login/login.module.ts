import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { ShowHidePasswordComponent } from '../show-hide-password/show-hide-password.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  exports: [ShowHidePasswordComponent],
  declarations: [LoginPage, ShowHidePasswordComponent ]
})
export class LoginPageModule {}
