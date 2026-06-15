import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonItem,
  IonInput,
  IonInputPasswordToggle
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  trophyOutline,
  mailOutline,
  lockClosedOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    IonIcon,
    IonItem,
    IonInput,
    IonInputPasswordToggle,
    RouterModule
  ]
})
export class LoginPage {

 constructor(
  private router: Router
) {

  addIcons({
    chevronBackOutline,
    trophyOutline,
    mailOutline,
    lockClosedOutline
  });

}
 login() {

  // nanti bisa ditambah validasi

  this.router.navigate(['/home']);

}

}