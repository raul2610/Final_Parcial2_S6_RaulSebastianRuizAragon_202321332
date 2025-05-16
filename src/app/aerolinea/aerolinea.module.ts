import { NgModule } from '@angular/core';
import { AerolineaListComponent } from './aerolinea-list/aerolinea-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AerolineaDetailComponent } from './aerolinea-detail/aerolinea-detail.component';
import { AerolineaVuelosComponent } from './aerolinea-vuelos/aerolinea-vuelos.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AerolineaListComponent, AerolineaDetailComponent, AerolineaVuelosComponent],
  exports: [AerolineaListComponent, AerolineaDetailComponent, AerolineaVuelosComponent]
})
export class AerolineaModule { }
