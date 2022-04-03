import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DissectionPageRoutingModule } from './dissection-routing.module';

import { DissectionPage } from './dissection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DissectionPageRoutingModule
  ],
  declarations: [DissectionPage]
})
export class DissectionPageModule {}
