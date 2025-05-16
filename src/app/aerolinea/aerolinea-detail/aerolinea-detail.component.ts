import { Component, OnInit } from '@angular/core';
import { Aerolinea } from '../Aerolinea';
import { ActivatedRoute, Router } from '@angular/router';
import { AerolineaService } from '../aerolinea.service';

@Component({
  selector: 'app-aerolinea-detail',
  templateUrl: './aerolinea-detail.component.html',
  styleUrls: ['./aerolinea-detail.component.css'],
  standalone: false
})
export class AerolineaDetailComponent implements OnInit {

  aerolinea!: Aerolinea;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private aerolineaService: AerolineaService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.aerolineaService.getAerolineaPorId(id).subscribe(data => {
        this.aerolinea = data;
      });
    }
  }

  verVuelos(): void {
    this.router.navigate(['/aerolinea', this.aerolinea.id, 'vuelos']);
  }
}