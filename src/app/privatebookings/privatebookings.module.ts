import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivatebookingsPageRoutingModule } from './privatebookings-routing.module';

import { PrivatebookingsPage } from './privatebookings.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivatebookingsPageRoutingModule
  ],
  declarations: [PrivatebookingsPage]
})
export class PrivatebookingsPageModule {}
