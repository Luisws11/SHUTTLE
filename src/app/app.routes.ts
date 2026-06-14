import { Routes } from '@angular/router';

export const routes: Routes = [

{
path: '',
redirectTo: 'onboarding',
pathMatch: 'full'
},

{
path: 'onboarding',
loadComponent: () =>
import('./onboarding/onboarding.page')
.then(m => m.OnboardingPage)
},

{
path: 'login',
loadComponent: () =>
import('./login/login.page')
.then(m => m.LoginPage)
},

{
path: 'register',
loadComponent: () =>
import('./register/register.page')
.then(m => m.RegisterPage)
},

{
path: 'forgot-password',
loadComponent: () =>
import('./forgot-password/forgot-password.page')
.then(m => m.ForgotPasswordPage)
},

{
path: 'otp',
loadComponent: () =>
import('./otp/otp.page')
.then(m => m.OtpPage)
},

{
path: 'reset-password',
loadComponent: () =>
import('./reset-password/reset-password.page')
.then(m => m.ResetPasswordPage)
},

{
path: 'home',
loadComponent: () =>
import('./home/home.page')
.then(m => m.HomePage)
},

{
path: 'detail-lapangan',
loadComponent: () =>
import('./detail-lapangan/detail-lapangan.page')
.then(m => m.DetailLapanganPage)
},

{
path: 'booking-lapangan',
loadComponent: () =>
import('./booking-lapangan/booking-lapangan.page')
.then(m => m.BookingLapanganPage)
},

{
path: 'payment',
loadComponent: () =>
import('./payment/payment.page')
.then(m => m.PaymentPage)
},

{
path: 'payment-method',
loadComponent: () => import('./payment-method/payment-method.page').then( m => m.PaymentMethodPage)
},

{
path: 'payment-success',
loadComponent: () => import('./payment-success/payment-success.page').then( m => m.PaymentSuccessPage)
},

{
path: 'success',
loadComponent: () =>
import('./success/success.page')
.then(m => m.SuccessPage)
},

{
path: '**',
redirectTo: 'onboarding'
},

];
