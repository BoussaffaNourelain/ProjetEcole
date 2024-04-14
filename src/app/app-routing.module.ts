import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceComponent } from './components/service/service.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamComponent } from './components/team/team.component';
import { TrainersComponent } from './components/trainers/trainers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signupAdmin', component: SignupComponent },
  { path: 'signupTrainer', component: SignupComponent },
  { path: 'signupLearner', component: SignupComponent },
  { path: 'signupAdministrativeStaff', component: SignupComponent },
  { path: 'signupFinancialAdministrator', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'trainers', component: TrainersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
