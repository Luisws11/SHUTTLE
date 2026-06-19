import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class AdminDashboardPage {

  stats = [
    {
      title: 'Total Booking',
      value: '125',
      icon: '📅'
    },
    {
      title: 'Hari Ini',
      value: '12',
      icon: '🔥'
    },
    {
      title: 'Pendapatan',
      value: 'Rp 4.5 Jt',
      icon: '💰'
    },
    {
      title: 'Pengguna',
      value: '85',
      icon: '👥'
    }
  ];

  recentBookings = [
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
      status: 'Selesai'
    },
    {
      nama: 'Rizky',
      lapangan: 'Lapangan C',
      jam: '18:00 - 20:00',
      status: 'Ditolak'
    }
  ];

}