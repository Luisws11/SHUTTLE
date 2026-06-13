import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  arrowBackCircleOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-booking-lapangan',
  templateUrl: './booking-lapangan.page.html',
  styleUrls: ['./booking-lapangan.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent,
    IonIcon
  ]
})
export class BookingLapanganPage {

  selectedDate = 0;

  dates = [
    '01 Jan',
    '02 Jan',
    '03 Jan',
    '04 Jan',
    '05 Jan'
  ];

  timeSlots = [
    '08.00',
    '09.00',
    '10.00',
    '11.00',
    '12.00',
    '13.00',
    '14.00',
    '15.00',
    '16.00',
    '17.00',
    '18.00',
    '19.00',
    '20.00',
    '21.00',
    '22.00',
    '23.00'
  ];

  constructor() {
    addIcons({
      arrowBackCircleOutline
    });
  }

}