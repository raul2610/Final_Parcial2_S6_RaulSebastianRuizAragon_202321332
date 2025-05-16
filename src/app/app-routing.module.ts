import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AerolineaListComponent } from './aerolinea/aerolinea-list/aerolinea-list.component';
import { AerolineaDetailComponent } from './aerolinea/aerolinea-detail/aerolinea-detail.component';
import { AerolineaVuelosComponent } from './aerolinea/aerolinea-vuelos/aerolinea-vuelos.component';

const routes: Routes = [
  { path: '', component: AerolineaListComponent },
  { path: 'aerolinea/:id', component: AerolineaDetailComponent },
  { path: 'aerolinea/:id/vuelos', component: AerolineaVuelosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
