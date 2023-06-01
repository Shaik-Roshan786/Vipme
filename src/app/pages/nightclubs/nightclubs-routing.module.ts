import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NightclubsPage } from './nightclubs.page';

const routes: Routes = [
  {
    path: '',
    component: NightclubsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NightclubsPageRoutingModule {}
