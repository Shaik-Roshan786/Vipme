import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivatebookingsPage } from './privatebookings.page';

const routes: Routes = [
  {
    path: '',
    component: PrivatebookingsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivatebookingsPageRoutingModule {}
