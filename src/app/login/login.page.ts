import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // Disatukan biar rapi
import { FormsModule } from '@angular/forms'; // <-- Wajib di-import untuk [(ngModel)]
import { CommonModule } from '@angular/common'; // <-- Wajib untuk fitur logika Angular

import {
  IonContent,
  IonButton,
  IonIcon,
  IonItem,
  IonInput,
  IonInputPasswordToggle
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  chevronBackOutline,
  trophyOutline,
  mailOutline,
  lockClosedOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule, // <-- Tambahkan di sini
    FormsModule,  // <-- Tambahkan di sini
    IonContent,
    IonButton,
    IonIcon,
    IonItem,
    IonInput,
    IonInputPasswordToggle,
    RouterModule
  ]
})
export class LoginPage {
  // 📝 Penampung data ketikan dari Box Input HTML
  email = '';
  password = '';

  constructor(private router: Router) {
    addIcons({
      chevronBackOutline,
      trophyOutline,
      mailOutline,
      lockClosedOutline
    });
  }

  /**
   * Logika Eksekusi Tombol Login
   */
  onLogin() {
    // 1. Validasi jika form diisi kosong melompong
    if (!this.email || !this.password) {
      alert('Waduh Luis, email dan passwordnya diisi dulu dong! 😤');
      return;
    }

    // 2. Cek kecocokan data dengan akun pancingan 3 Role yang ada di database Laragon kita
    if (this.email === 'superadmin@shuttle.com' && this.password === 'password123') {
      alert('Login Sukses! Selamat datang Luis Superadmin 👑');
      this.router.navigate(['/home']);
      
    } else if (this.email === 'kasir@shuttle.com' && this.password === 'password123') {
      alert('Login Sukses! Selamat datang Admin GOR/Kasir 💵');
      this.router.navigate(['/home']);
      
    } else if (this.email === 'user@shuttle.com' && this.password === 'password123') {
      alert('Login Sukses! Selamat datang User Penyewa 👤');
      this.router.navigate(['/home']);
      
    } else {
      // Jika email atau password tidak ada yang cocok sama sekali
      alert('Email atau Password salah! Periksa kembali atau pakai akun dummy kelompok.');
    }
  }
}