import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

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
constructor(
  private router: Router
) {
  }
  goBack() {
  this.router.navigate(['/payment']);
}

selectedMethod = '';
selectMethod(method: string) {
  this.selectedMethod = method;
}

}