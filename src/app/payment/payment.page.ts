import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

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
  IonIcon,
  RouterModule
]
})
export class PaymentPage {

  selectedPayment = 'DANA';

 constructor(
  private router: Router
) {

  addIcons({
    arrowBackOutline
  });

  const nav = history.state;

  if (nav.paymentMethod) {
    this.selectedPayment = nav.paymentMethod;
  }

}

  selectPayment(method: string) {
    this.selectedPayment = method;
  }

  goBack() {
  this.router.navigate(['/booking-lapangan']);
}

}