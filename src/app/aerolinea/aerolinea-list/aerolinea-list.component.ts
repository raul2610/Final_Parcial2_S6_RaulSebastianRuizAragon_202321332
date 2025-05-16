import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../Aerolinea';
import { AerolineaService } from '../aerolinea.service';

@Component({
  selector: 'app-aerolinea-list',
  templateUrl: './aerolinea-list.component.html',
  styleUrls: ['./aerolinea-list.component.css'],
  standalone: false
})
export class AerolineaListComponent implements OnInit {

  aerolineas: Array<Aerolinea> = [];
  selected: Boolean = false;
  selectedAerolinea!: Aerolinea;

  constructor(private aerolineaService: AerolineaService) { }

  ngOnInit() {
    this.aerolineaService.getAerolineas().subscribe(aerolineas =>{
      this.aerolineas = aerolineas;
    });
  }

  onSelected(aerolinea: Aerolinea) {
    this.selected = true;
    this.selectedAerolinea = aerolinea;
  }

  verDetallesGenerales(id: string) {
    
  }
}