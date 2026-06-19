import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'onboarding',
    pathMatch: 'full'
  },
  {
    path: 'onboarding',
    loadComponent: () => import('./onboarding/onboarding.page').then(m => m.OnboardingPage)
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'forgot-password',
    loadComponent: () => import('./forgot-password/forgot-password.page').then(m => m.ForgotPasswordPage)
  },
  {
    path: 'otp',
    loadComponent: () => import('./otp/otp.page').then(m => m.OtpPage)
  },
  {
    path: 'reset-password',
    loadComponent: () => import('./reset-password/reset-password.page').then(m => m.ResetPasswordPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: 'lapangan',
    loadComponent: () => import('./lapangan/lapangan.page').then(m => m.LapanganPage)
  },
  {
    path: 'pesanan',
    loadComponent: () => import('./pesanan/pesanan.page').then(m => m.PesananPage)
  },
  {
    path: 'detail-lapangan',
    loadComponent: () => import('./detail-lapangan/detail-lapangan.page').then(m => m.DetailLapanganPage)
  },
  {
    path: 'booking-lapangan',
    loadComponent: () => import('./booking-lapangan/booking-lapangan.page').then(m => m.BookingLapanganPage)
  },
  {
    path: 'payment',
    loadComponent: () => import('./payment/payment.page').then(m => m.PaymentPage)
  },
  {
    path: 'payment-method',
    loadComponent: () => import('./payment-method/payment-method.page').then(m => m.PaymentMethodPage)
  },
  {
    path: 'payment-success',
    loadComponent: () => import('./payment-success/payment-success.page').then(m => m.PaymentSuccessPage)
  },
  {
    path: 'success',
    loadComponent: () => import('./success/success.page').then(m => m.SuccessPage)
  },
   {
    path: 'notifikasi',
    loadComponent: () => import('./notifikasi/notifikasi.page').then( m => m.NotifikasiPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
  
  {
    path: 'admin-dashboard',
    loadComponent: () => import('./admin/admin-dashboard/admin-dashboard.page').then( m => m.AdminDashboardPage)
  },
  {
    path: 'admin-operasional',
    loadComponent: () => import('./admin/admin-operasional/admin-operasional.page').then( m => m.AdminOperasionalPage)
  },
  {
    path: 'admin-laporan',
    loadComponent: () => import('./admin/admin-laporan/admin-laporan.page').then( m => m.AdminLaporanPage)
  },
  {
    path: 'admin-profil',
    loadComponent: () => import('./admin/admin-profil/admin-profil.page').then( m => m.AdminProfilPage)
  },
  {
  path: 'informasi-akun',
  loadComponent: () =>
    import('./informasi-akun/informasi-akun.page')
      .then(m => m.InformasiAkunPage)
},
  {
    path: '**',
    redirectTo: 'onboarding'
  
  },


];