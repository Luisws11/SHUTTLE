import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-lapangan',
  templateUrl: './owner-lapangan.page.html',
  styleUrls: ['./owner-lapangan.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule
  ]
})
export class OwnerLapanganPage {

  constructor(
    private router: Router
  ) {}

  lapanganList = [
    {
      nama: 'Lapangan A',
      tipe: 'Indoor',
      slot: 4,
      harga: '50.000'
    },
    {
      nama: 'Lapangan B',
      tipe: 'Indoor',
      slot: 4,
      harga: '50.000'
    },
    {
      nama: 'Lapangan C',
      tipe: 'Outdoor',
      slot: 3,
      harga: '40.000'
    }
  ];

  goBack() {
    this.router.navigate(['/owner-dashboard']);
  }

  tambahLapangan() {
    console.log('Tambah');
  }

  editLapangan(item: any) {
    console.log(item);
  }

  hapusLapangan(item: any) {
    console.log(item);
  }

}