import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InternalDissectionPageRoutingModule } from './internal-dissection-routing.module';

import { InternalDissectionPage } from './internal-dissection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InternalDissectionPageRoutingModule
  ],
  declarations: [InternalDissectionPage]
})
export class InternalDissectionPageModule {}
