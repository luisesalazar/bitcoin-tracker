import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BitcoinPage } from './bitcoin.page';
import { BitcoinService } from '../bitcoin.service';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: BitcoinPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  providers: [BitcoinService, HttpClient],
  declarations: [BitcoinPage]
})
export class BitcoinPageModule {}
