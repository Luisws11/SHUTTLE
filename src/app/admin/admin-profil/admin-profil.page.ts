import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.page.html',
  styleUrls: ['./admin-profil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class AdminProfilPage {

  constructor(
    private router: Router
  ) {}

  admin = {
    nama: 'Admin SHUTTLE',
    email: 'admin@shuttle.com',
    phone: '08123456789',
    role: 'Administrator'
  };

  editProfil() {
    console.log('Edit Profil');
  }

  ubahPassword() {
    console.log('Ubah Password');
  }

  logout() {
    console.log('Logout');
  }

  // NAVBAR

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