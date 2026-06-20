import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-admin-operasional',
  templateUrl: './admin-operasional.page.html',
  styleUrls: ['./admin-operasional.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class AdminOperasionalPage {

  constructor(
    private router: Router
  ) {}

  // MENU OPERASIONAL

  goToLapangan() {
    this.router.navigate(['/admin-lapangan']);
  }

  goToBooking() {
    this.router.navigate(['/admin-booking']);
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