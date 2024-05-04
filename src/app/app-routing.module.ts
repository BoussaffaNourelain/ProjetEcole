import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddAgentAdministratifComponent } from './components/add-agent-administratif/add-agent-administratif.component';
import { AddApprenantComponent } from './components/add-apprenant/add-apprenant.component';
import { AddDemandeComponent } from './components/add-demande/add-demande.component';
import { AddDevisComponent } from './components/add-devis/add-devis.component';
import { AddFacteurComponent } from './components/add-facteur/add-facteur.component';
import { AddFinancierComponent } from './components/add-financier/add-financier.component';
import { AddFormateurComponent } from './components/add-formateur/add-formateur.component';
import { AddFormationComponent } from './components/add-formation/add-formation.component';
import { AddGroupeComponent } from './components/add-groupe/add-groupe.component';
import { AddSessionFormationComponent } from './components/add-session-formation/add-session-formation.component';
import { AjouterFormationComponent } from './components/ajouter-formation/ajouter-formation.component';
import { AjouterSessionComponent } from './components/ajouter-session/ajouter-session.component';
import { ContactComponent } from './components/contact/contact.component';
import { DashboredAdminComponent } from './components/dashbored-admin/dashbored-admin.component';
import { DashboredFinancialComponent } from './components/dashbored-financial/dashbored-financial.component';
import { DashboredLearnerComponent } from './components/dashbored-learner/dashbored-learner.component';
import { DashboredStaffAdComponent } from './components/dashbored-staff-ad/dashbored-staff-ad.component';
import { DashboredTrainerComponent } from './components/dashbored-trainer/dashbored-trainer.component';
import { HomeComponent } from './components/home/home.component';
import { InfoPersonnelComponent } from './components/info-personnel/info-personnel.component';
import { LoginComponent } from './components/login/login.component';
import { ServiceComponent } from './components/service/service.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamComponent } from './components/team/team.component';
import { TrainersComponent } from './components/trainers/trainers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: SignupComponent },
  { path: 'formateur', component: SignupComponent },
  { path: 'apprenant', component: SignupComponent },
  { path: 'agentAdministratif', component: SignupComponent },
  { path: 'financier', component: SignupComponent },
  { path: 'seConnecter', component: LoginComponent },
  { path: 'sInscrire', component: SignupComponent },
  { path: 'nosFormations', component: ServiceComponent },
  { path: 'contactezNous', component: ContactComponent },
  { path: 'dashboredAdministrateur', component: DashboredAdminComponent },
  {
    path: 'dashboredAgentAdministratif',
    component: DashboredStaffAdComponent,
  },
  { path: 'dashboredFinancier', component: DashboredFinancialComponent },
  { path: 'dashboredApprenant', component: DashboredLearnerComponent },
  { path: 'dashboredFormateur', component: DashboredTrainerComponent },
  { path: 'ajouterAdmin', component: AddAdminComponent },
  { path: 'ajouterFinancier', component: AddFinancierComponent },
  { path: 'affecterApprenantGroupe', component: AddApprenantComponent },
  { path: 'ajouterFormateur', component: AddFormateurComponent },
  {
    path: 'ajouterAgentadministratif',
    component: AddAgentAdministratifComponent,
  },
  { path: 'ajouterGroupe', component: AddGroupeComponent },
  { path: 'ajouterFacture', component: AddFacteurComponent },
  { path: 'ajouterDevis', component: AddDevisComponent },
  { path: 'affecterFormateurFormation', component: AddFormationComponent },
  { path: 'ajouterDemande', component: AddDemandeComponent },
  { path: 'affecterFormateurSession', component: AddSessionFormationComponent },
  { path: 'info-personnel/:id', component: InfoPersonnelComponent },
  { path: 'ajouterFormation', component: AjouterFormationComponent },
  { path: 'ajouterSession', component: AjouterSessionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
