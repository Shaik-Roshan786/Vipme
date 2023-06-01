import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NightclubsPageRoutingModule } from './nightclubs-routing.module';

import { NightclubsPage } from './nightclubs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NightclubsPageRoutingModule
  ],
  declarations: [NightclubsPage]
})
export class NightclubsPageModule {}
