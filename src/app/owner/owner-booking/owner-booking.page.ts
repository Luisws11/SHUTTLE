import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-owner-booking',
  templateUrl: './owner-booking.page.html',
  styleUrls: ['./owner-booking.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class OwnerBookingPage {

  constructor(
    private router: Router
  ) {}

  bookings = [
    {
      nama: 'Thoriq Reva',
      lapangan: 'Lapangan A',
      tanggal: '15 Juni 2026',
      jam: '19.00 - 21.00',
      status: 'Pending'
    },
    {
      nama: 'Rizky',
      lapangan: 'Lapangan B',
      tanggal: '16 Juni 2026',
      jam: '18.00 - 20.00',
      status: 'Dikonfirmasi'
    }
  ];

  goBack() {
    this.router.navigate(['/owner-dashboard']);
  }

  terimaBooking(item: any) {
    item.status = 'Dikonfirmasi';
  }

  tolakBooking(item: any) {
    item.status = 'Ditolak';
  }

}