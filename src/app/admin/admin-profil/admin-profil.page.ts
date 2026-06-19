import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-admin-profil',
  templateUrl: './admin-profil.page.html',
  styleUrls: ['./admin-profil.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent
  ]
})
export class AdminProfilPage {

  admin = {
    nama: 'Admin SHUTTLE',
    email: 'admin@shuttle.com',
    phone: '08123456789',
    role: 'Administrator'
  };

  editProfil() {
    console.log('Edit Profil');
  }

  ubahPassword() {
    console.log('Ubah Password');
  }

  logout() {
    console.log('Logout');
  }

}