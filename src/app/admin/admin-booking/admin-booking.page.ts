import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-admin-booking',
  templateUrl: './admin-booking.page.html',
  styleUrls: ['./admin-booking.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class AdminBookingPage {

  bookingList = [
    {
      nama: 'Thoriq Reva',
      lapangan: 'Lapangan A',
      jam: '19:00 - 21:00',
      status: 'Pending'
    },
    {
      nama: 'Andi Saputra',
      lapangan: 'Lapangan B',
      jam: '20:00 - 22:00',
      status: 'Disetujui'
    },
    {
      nama: 'Rizky',
      lapangan: 'Lapangan C',
      jam: '18:00 - 20:00',
      status: 'Ditolak'
    }
  ];

  lihatDetail(data: any) {
    console.log(data);
  }

}