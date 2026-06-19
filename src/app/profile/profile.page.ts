import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  personOutline,
  lockClosedOutline,
  receiptOutline,
  helpCircleOutline,
  informationCircleOutline,
  chevronForwardOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonIcon
  ]
})
export class ProfilePage implements OnInit {

constructor(
  private router: Router
) {

  addIcons({
    personOutline,
    lockClosedOutline,
    receiptOutline,
    helpCircleOutline,
    informationCircleOutline,
    chevronForwardOutline
  });

}

  ngOnInit() {}

  goToInformasiAkun() {
  this.router.navigate(['/informasi-akun']);
}

}