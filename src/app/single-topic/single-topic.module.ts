import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleTopicPageRoutingModule } from './single-topic-routing.module';

import { SingleTopicPage } from './single-topic.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleTopicPageRoutingModule
  ],
  declarations: [SingleTopicPage]
})
export class SingleTopicPageModule {}
