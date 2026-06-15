import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  timeOutline,
  checkmarkCircle,
  closeCircle,
  locationOutline,
  calendarOutline,
  homeOutline,
  tennisballOutline,
  receiptOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-pesanan',
  templateUrl: './pesanan.page.html',
  styleUrls: ['./pesanan.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonIcon
  ]
})
export class PesananPage {

  activeTab = 'upcoming';

  bookings = [
    {
      venue: 'GOR Lapangan Dewi',
      location: 'Karawang Barat',
      date: '15 Juni 2026',
      time: '19:00 - 21:00',
      court: 'Lapangan A',
      price: 'Rp 200.000',
      image: 'assets/images/home/lapangan1.png'
    },
    {
      venue: 'GOR Dagus',
      location: 'Karawang Timur',
      date: '20 Juni 2026',
      time: '18:00 - 20:00',
      court: 'Lapangan B',
      price: 'Rp 180.000',
      image: 'assets/images/home/lapangan2.png'
    }
  ];

  constructor(private router: Router) {

    addIcons({
      timeOutline,
      checkmarkCircle,
      closeCircle,
      locationOutline,
      calendarOutline,
      homeOutline,
      tennisballOutline,
      receiptOutline
    });

  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

}