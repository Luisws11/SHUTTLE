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
    name: 'GOR Dewi',
    location: 'Karawang Barat',
    price: '40000',
    image: 'assets/images/home/banner2.png'
  },
  {
    name: 'GOR Dagus',
    location: 'Karawang Timur',
    price: '35000',
    image: 'assets/images/home/banner2.png'
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
          court
        }
      }
    );
  }
}