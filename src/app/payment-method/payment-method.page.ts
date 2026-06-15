import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  arrowBackOutline,
  chevronForwardOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonIcon
  ]
})
export class PaymentMethodPage {

  selectedMethod = '';

  constructor(
    private router: Router
  ) {

    addIcons({
      arrowBackOutline,
      chevronForwardOutline
    });

  }

  goBack() {
    this.router.navigate(['/payment']);
  }

  selectMethod(method: string) {
    this.selectedMethod = method;
  }

  confirmPayment() {

    this.router.navigate(
      ['/payment'],
      {
        state: {
          paymentMethod: this.selectedMethod
        }
      }
    );

  }

}