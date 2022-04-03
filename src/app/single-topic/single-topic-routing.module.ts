import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleTopicPage } from './single-topic.page';

const routes: Routes = [
  {
    path: '',
    component: SingleTopicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleTopicPageRoutingModule {}
