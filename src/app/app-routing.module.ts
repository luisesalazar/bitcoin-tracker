import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'bitcoin', pathMatch: 'full' },
  { path: 'bitcoin', loadChildren: './bitcoin/bitcoin.module#BitcoinPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
