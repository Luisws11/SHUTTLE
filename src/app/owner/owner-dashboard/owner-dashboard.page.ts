import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  businessOutline,
  cashOutline,
  calendarOutline,
  personOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-owner-dashboard',
  templateUrl: './owner-dashboard.page.html',
  styleUrls: ['./owner-dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonIcon
  ]
})
export class OwnerDashboardPage {

  constructor(
    private router: Router
  ) {

    addIcons({
      businessOutline,
      cashOutline,
      calendarOutline,
      personOutline
    });

  }

  goToLapangan() {
    this.router.navigate(['/owner-lapangan']);
  }

  goToBooking() {
    this.router.navigate(['/owner-booking']);
  }

  goToPendapatan() {
    this.router.navigate(['/owner-pendapatan']);
  }

  goToProfil() {
    this.router.navigate(['/owner-profil']);
  }

}