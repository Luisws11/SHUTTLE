import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import {
  IonContent
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-owner-profil',
  templateUrl: './owner-profil.page.html',
  styleUrls: ['./owner-profil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class OwnerProfilPage {

  constructor(
    private router: Router
  ) {}

  goBack() {
    this.router.navigate(['/owner-dashboard']);
  }

}