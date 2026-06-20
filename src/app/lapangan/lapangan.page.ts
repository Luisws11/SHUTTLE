import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { addIcons } from 'ionicons';

import {
  searchOutline,
  locationOutline,
  homeOutline,
  tennisballOutline,
  receiptOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-lapangan',
  templateUrl: './lapangan.page.html',
  styleUrls: ['./lapangan.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class LapanganPage {

  constructor(private router: Router) {

    addIcons({
      searchOutline,
      locationOutline,
      homeOutline,
      tennisballOutline,
      receiptOutline
    });

  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToPesanan() {
    this.router.navigate(['/pesanan']);
  }

  openCourt(court: any): void {

  this.router.navigate(
    ['/detail-lapangan'],
    {
      state: {
        court: {
          name: court.nama,
          location: court.lokasi,
          price: court.harga,
          image: court.image
        }
      }
    }
  );

}

  searchText = '';

  selectedFilter = 'Semua';

  lapanganList = [
    {
      id: 1,
      nama: 'GOR Dagus',
      lokasi: 'Karawang Timur',
      rating: 4.9,
      harga: '35.000',
      image: 'assets/images/home/lapangan1.png'
    },
    {
      id: 2,
      nama: 'GOR Dewi',
      lokasi: 'Karawang Barat',
      rating: 4.9,
      harga: '40.000',
      image: 'assets/images/home/lapangan2.png'
    },
    {
      id: 3,
      nama: 'GOR Mutiara',
      lokasi: 'Karawang Barat',
      rating: 4.8,
      harga: '45.000',
      image: 'assets/images/home/lapangan3.png'
    },
    {
      id: 4,
      nama: 'Grand Badminton',
      lokasi: 'Karawang Tengah',
      rating: 4.7,
      harga: '50.000',
      image: 'assets/images/home/lapangan4.png'
    }
  ];

}