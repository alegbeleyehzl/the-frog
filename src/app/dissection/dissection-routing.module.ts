import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DissectionPage } from './dissection.page';

const routes: Routes = [
  {
    path: '',
    component: DissectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DissectionPageRoutingModule {}
