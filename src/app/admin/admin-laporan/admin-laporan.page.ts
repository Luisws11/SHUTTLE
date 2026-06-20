import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-admin-laporan',
  templateUrl: './admin-laporan.page.html',
  styleUrls: ['./admin-laporan.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class AdminLaporanPage {

  constructor(
    private router: Router
  ) {}

  transaksiList = [
    {
      nama: 'Thoriq Reva',
      nominal: '100.000',
      status: 'Selesai'
    },
    {
      nama: 'Andi Saputra',
      nominal: '50.000',
      status: 'Selesai'
    },
    {
      nama: 'Rizky',
      nominal: '150.000',
      status: 'Selesai'
    }
  ];

  goToDashboard() {
    this.router.navigate(['/admin-dashboard']);
  }

  goToOperasional() {
    this.router.navigate(['/admin-operasional']);
  }

  goToLaporan() {
    this.router.navigate(['/admin-laporan']);
  }

  goToProfil() {
    this.router.navigate(['/admin-profil']);
  }

}