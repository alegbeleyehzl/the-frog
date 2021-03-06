import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AutoLoginGuard } from './guards/auto-login.guard';
import { IntroGuard } from './guards/intro.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canLoad: [AutoLoginGuard] // Check if we should show the introduction or forward to inside
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canLoad: [IntroGuard, AuthGuard] // Secure all child pages
    
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule),
    // canLoad: [IntroGuard] // Check if we should show the introduction or forward to 
  },
  {
    path: 'topics',
    loadChildren: () => import('./topics/topics.module').then( m => m.TopicsPageModule),
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule),
  },
  {
    path: 'assessment',
    loadChildren: () => import('./assessment/assessment.module').then( m => m.AssessmentPageModule),
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'single-topic',
    loadChildren: () => import('./single-topic/single-topic.module').then( m => m.SingleTopicPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'quiz',
    loadChildren: () => import('./quiz/quiz.module').then( m => m.QuizPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'score',
    loadChildren: () => import('./score/score.module').then( m => m.ScorePageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'dissection',
    loadChildren: () => import('./dissection/dissection.module').then( m => m.DissectionPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: 'internal-dissection',
    loadChildren: () => import('./internal-dissection/internal-dissection.module').then( m => m.InternalDissectionPageModule),
    // canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'intro',
    loadChildren: () => import('./intro/intro.module').then( m => m.IntroPageModule)
  }
  // ,{
  //   path: 'home/dashboard',
  //   redirectTo: '/home/dashboard',
  //   canLoad: [IntroGuard] // Check if we should show the introduction or forward to 
  //   // pathMatch: 'full'
  // }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
