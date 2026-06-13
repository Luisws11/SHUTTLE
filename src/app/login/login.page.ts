import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  IonContent, IonHeader, IonToolbar, IonButtons, IonButton, 
  IonIcon, IonItem, IonInput, IonInputPasswordToggle 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonButtons, IonButton, 
    IonIcon, IonItem, IonInput, IonInputPasswordToggle, RouterModule
  ]
})
export class LoginPage {
  constructor() {}
}