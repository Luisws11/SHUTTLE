import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonIcon,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  searchOutline,
  notificationsOutline,
  personCircle,
  location,
  chevronDownOutline,
  star,
  homeOutline,
  tennisballOutline,
  receiptOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonContent,
    IonIcon,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonLabel
  ]
})
export class HomePage {

  courts = [
        {
        name: 'GOR Lapangan Dewi',
        location: 'Karawang Barat',
        price: '40.000',
        image: 'assets/images/home/lapangan1.png'
        },
        {
        name: 'GOR Dagus',
        location: 'Karawang Timur',
        price: '35.000',
        image: 'assets/images/home/lapangan2.png'
        },
        {
        name: 'GOR Lapangan Dewi',
        location: 'Karawang Barat',
        price: '40.000',
        image: 'assets/images/home/lapangan3.png'
        },
        {
        name: 'GOR Dagus',
        location: 'Karawang Timur',
        price: '35.000',
        image: 'assets/images/home/lapangan4.png'
        }
  ];


  constructor(private router: Router) {

    addIcons({
  searchOutline,
  notificationsOutline,
  personCircle,
  location,
  chevronDownOutline,
  star,
  homeOutline,
  tennisballOutline,
  receiptOutline
});

  }

  openCourt(court: any): void {

    this.router.navigate(
      ['/detail-lapangan'],
      {
        state: {
          court: court
        }
      }
    );
  }

  goToPesanan(): void {
  this.router.navigate(['/pesanan']);
  }
  
}