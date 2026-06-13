import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem,
  IonInput
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  chevronBackOutline,
  logoFacebook,
  logoGoogle,
  logoApple
} from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonItem,
    IonInput,
    RouterModule
  ]
})
export class RegisterPage {

  constructor() {
    addIcons({
      chevronBackOutline,
      logoFacebook,
      logoGoogle,
      logoApple
    });
  }

}