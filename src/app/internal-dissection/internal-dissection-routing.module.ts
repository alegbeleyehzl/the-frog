import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InternalDissectionPage } from './internal-dissection.page';

const routes: Routes = [
  {
    path: '',
    component: InternalDissectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InternalDissectionPageRoutingModule {}
