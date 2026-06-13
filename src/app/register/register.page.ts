import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { 
  IonContent, IonHeader, IonToolbar, IonButtons, 
  IonButton, IonIcon, IonItem, IonInput 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonToolbar, IonButtons, 
    IonButton, IonIcon, IonItem, IonInput, RouterModule
  ]
})
export class RegisterPage {
  constructor() {}
}