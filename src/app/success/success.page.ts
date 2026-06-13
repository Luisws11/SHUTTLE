import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonContent, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonButton,
    RouterModule
  ]
})
export class SuccessPage {}