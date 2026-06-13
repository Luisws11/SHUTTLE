import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full'
  },

  {
    path: 'splash',
    loadComponent: () => import('./splash/splash.page').then(m => m.SplashPage)
  },

  {
    path: 'welcome',
    loadComponent: () => import('./welcome/welcome.page').then(m => m.WelcomePage)
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
  }

];