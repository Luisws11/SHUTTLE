import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.page.html',
  styleUrls: ['./onboarding.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon, RouterModule]
})
export class OnboardingPage {
  constructor() {}
}