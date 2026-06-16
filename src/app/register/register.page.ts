import { Component, inject } from '@angular/core';
import { RouterModule, Router } from '@angular/router'; // <-- Tambahkan Router di sini
import { FormsModule } from '@angular/forms'; // <-- Wajib untuk menangkap isi box input
import { CommonModule } from '@angular/common';

import {
  IonContent,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonItem,
  IonInput
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';

import {
  chevronBackOutline,
  logoFacebook,
  logoGoogle,
  logoApple
} from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule, // <-- Masukkan ke sini agar [(ngModel)] aktif
    RouterModule,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonItem,
    IonInput
  ]
})
export class RegisterPage {
  // Inject Router dengan gaya modern Angular Standalone
  private router = inject(Router);

  // 📝 Variabel untuk mengikat (binding) kotak inputan di HTML
  name = '';
  email = '';
  password = '';
  role = 'user'; // Default sebagai user biasa, nanti bisa dikembangkan untuk multi-role

  constructor() {
    addIcons({
      chevronBackOutline,
      logoFacebook,
      logoGoogle,
      logoApple
    });
  }

  /**
   * Fungsi untuk memproses pendaftaran akun
   */
  onRegister() {
    // Validasi sederhana jika ada kolom yang masih kosong melompong
    if (!this.name || !this.email || !this.password) {
      alert('Waduh! Semua kolom box input wajib diisi ya, Luis!');
      return;
    }

    // Tampilkan log di console untuk memastikan data box sukses ditangkap
    console.log('Data Register Ditangkap:', {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role
    });

    // Pancing alert sukses sementara (Nanti di sini kita ganti pakai tembakan API Laravel kamu)
    alert('Registrasi Berhasil! Akun kamu sudah terdaftar. Silakan lakukan login.');

    // Alihkan otomatis user ke halaman login setelah daftar sukses
    this.router.navigate(['/login']);
  }
}