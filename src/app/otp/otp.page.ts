import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  IonContent,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  chevronBackOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonIcon,
    RouterModule
  ]
})
export class OtpPage {

  constructor() {
    addIcons({
      chevronBackOutline
    });
  }

}