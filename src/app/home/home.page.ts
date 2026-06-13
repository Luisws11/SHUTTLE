import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  IonHeader, IonToolbar, IonContent, IonIcon, IonGrid, IonRow, IonCol,
  IonTabs, IonTabBar, IonTabButton, IonLabel 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  searchOutline, personOutline, notificationsOutline, locationOutline, 
  star, homeOutline, tennisballOutline, receiptOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    CommonModule, IonHeader, IonToolbar, IonContent, IonIcon, IonGrid, IonRow, IonCol,
    IonTabs, IonTabBar, IonTabButton, IonLabel
  ],
})
export class HomePage {
  constructor() {
    addIcons({
      'search-outline': searchOutline,
      'person-outline': personOutline,
      'notifications-outline': notificationsOutline,
      'location-outline': locationOutline,
      'star': star,
      'home-outline': homeOutline,
      'tennisball-outline': tennisballOutline,
      'receipt-outline': receiptOutline
    });
  }
}