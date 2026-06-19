import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonIcon
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  arrowBackOutline,
  personCircle
} from 'ionicons/icons';

@Component({
  selector: 'app-informasi-akun',
  templateUrl: './informasi-akun.page.html',
  styleUrls: ['./informasi-akun.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonIcon,

    RouterModule
  ]
})
export class InformasiAkunPage implements OnInit {

  constructor() {

    addIcons({
      arrowBackOutline,
      personCircle
    });

  }

  ngOnInit() {
  }

}