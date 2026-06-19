import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-admin-lapangan',
  templateUrl: './admin-lapangan.page.html',
  styleUrls: ['./admin-lapangan.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class AdminLapanganPage {

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

  tambahLapangan() {
    console.log('Tambah Lapangan');
  }

  editLapangan(lapangan: any) {
    console.log('Edit', lapangan);
  }

  hapusLapangan(lapangan: any) {
    console.log('Hapus', lapangan);
  }

}