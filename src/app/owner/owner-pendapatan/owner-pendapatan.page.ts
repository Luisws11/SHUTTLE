import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-owner-pendapatan',
  templateUrl: './owner-pendapatan.page.html',
  styleUrls: ['./owner-pendapatan.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class OwnerPendapatanPage {

  constructor(
    private router: Router
  ) {}

  goBack() {
    this.router.navigate(['/owner-dashboard']);
  }

}