import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
  { path: '', redirectTo: '/rnc', pathMatch: 'full' },
  { path: '**', redirectTo: '/rnc' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true, // <- Indicar que se use el hash
    }),
    PagesRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
