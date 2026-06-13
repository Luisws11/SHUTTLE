import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

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
      image: 'https://images.unsplash.com/photo-1613918431703-aa50889c0f7d?q=80&w=1200'
    },
    {
      name: 'GOR Dagus',
      location: 'Karawang Timur',
      price: '35.000',
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200'
    },
    {
      name: 'GOR Lapangan Dewi',
      location: 'Karawang Barat',
      price: '40.000',
      image: 'https://images.unsplash.com/photo-1613918431703-aa50889c0f7d?q=80&w=1200'
    },
    {
      name: 'GOR Dagus',
      location: 'Karawang Timur',
      price: '35.000',
      image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?q=80&w=1200'
    }
  ];

  constructor() {
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
}