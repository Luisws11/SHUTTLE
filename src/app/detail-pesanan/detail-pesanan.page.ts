import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import {
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  arrowBackCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-detail-pesanan',
  templateUrl: './detail-pesanan.page.html',
  styleUrls: ['./detail-pesanan.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonIcon,
    CommonModule,
    FormsModule
  ]
})
export class DetailPesananPage implements OnInit {

  booking: any;

  constructor(
    private router: Router
  ) {

    addIcons({
      arrowBackCircleOutline
    });

    const nav = history.state;

    if (nav.booking) {
      this.booking = nav.booking;
    }

  }

  ngOnInit() {}

  goBack() {
    this.router.navigate(['/pesanan']);
  }

}