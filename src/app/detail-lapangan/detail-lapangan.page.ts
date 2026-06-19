import { Component } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';


import {
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  arrowBackCircleOutline,
  location
} from 'ionicons/icons';

@Component({
  selector: 'app-detail-lapangan',
  templateUrl: './detail-lapangan.page.html',
  styleUrls: ['./detail-lapangan.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class DetailLapanganPage {

  court: any;

 constructor(
  private router: Router
) {

    addIcons({
      arrowBackCircleOutline,
      location
    });

    const nav = history.state;

    if (nav.court) {
      this.court = nav.court;
    }

  }

  goBack() {
  this.router.navigate(['/home']);
}

goToJadwal() {
  this.router.navigate(['/booking-lapangan']);
}

}