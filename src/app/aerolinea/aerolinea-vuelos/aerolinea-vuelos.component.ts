import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../Aerolinea';
import { ActivatedRoute } from '@angular/router';
import { AerolineaService } from '../aerolinea.service';

@Component({
  selector: 'app-aerolinea-vuelos',
  templateUrl: './aerolinea-vuelos.component.html',
  styleUrls: ['./aerolinea-vuelos.component.css'],
  standalone: false
})
export class AerolineaVuelosComponent implements OnInit {

  aerolinea!: Aerolinea;

  constructor(
    private route: ActivatedRoute,
    private aerolineaService: AerolineaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.aerolineaService.getAerolineaPorId(id).subscribe(aerolineaTraida => {
        this.aerolinea = aerolineaTraida;
        console.log(this.aerolinea.flights);
      });
    }
  }
}