import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  arrowBackOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonIcon
  ]
})
export class PaymentPage {

  selectedPayment = 'DANA';

  constructor() {

    addIcons({
      arrowBackOutline
    });

  }

  selectPayment(method: string) {
    this.selectedPayment = method;
  }

}