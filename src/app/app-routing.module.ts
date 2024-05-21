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
import { AddFormationGroupComponent } from './components/add-formation-group/add-formation-group.component';
import { AddFormationComponent } from './components/add-formation/add-formation.component';
import { AddGroupeComponent } from './components/add-groupe/add-groupe.component';
import { AddLessonComponent } from './components/add-lesson/add-lesson.component';
import { AddSessionFormationComponent } from './components/add-session-formation/add-session-formation.component';
import { AddSessionGroupComponent } from './components/add-session-group/add-session-group.component';
import { AjouterFormationComponent } from './components/ajouter-formation/ajouter-formation.component';
import { AjouterSessionComponent } from './components/ajouter-session/ajouter-session.component';
import { ContactComponent } from './components/contact/contact.component';
import { ContactezNousComponent } from './components/contactez-nous/contactez-nous.component';
import { DashboredAdminComponent } from './components/dashbored-admin/dashbored-admin.component';
import { DashboredFinancialComponent } from './components/dashbored-financial/dashbored-financial.component';
import { DashboredLearnerComponent } from './components/dashbored-learner/dashbored-learner.component';
import { DashboredStaffAdComponent } from './components/dashbored-staff-ad/dashbored-staff-ad.component';
import { DashboredTrainerComponent } from './components/dashbored-trainer/dashbored-trainer.component';
import { EditDevisComponent } from './components/edit-devis/edit-devis.component';
import { EditFactureComponent } from './components/edit-facture/edit-facture.component';
import { EditFormationComponent } from './components/edit-formation/edit-formation.component';
import { EditGroupComponent } from './components/edit-group/edit-group.component';
import { EditSessionComponent } from './components/edit-session/edit-session.component';
import { EditStatusComponent } from './components/edit-status/edit-status.component';
import { HomeComponent } from './components/home/home.component';
import { InfoDevisComponent } from './components/info-devis/info-devis.component';
import { InfoFactureComponent } from './components/info-facture/info-facture.component';
import { InfoFormationComponent } from './components/info-formation/info-formation.component';
import { InfoGroupComponent } from './components/info-group/info-group.component';
import { InfoPersonnelComponent } from './components/info-personnel/info-personnel.component';
import { InfoSessionComponent } from './components/info-session/info-session.component';
import { LoginComponent } from './components/login/login.component';
import { NosFormationsComponent } from './components/nos-formations/nos-formations.component';
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
  { path: 'affecterFormationGroup', component: AddFormationGroupComponent },
  { path: 'affecterSessionGroup', component: AddSessionGroupComponent },
  { path: 'changementDonnees/:id', component: EditStatusComponent },
  { path: 'info-formation/:id', component: InfoFormationComponent },
  { path: 'info-session/:id', component: InfoSessionComponent },
  { path: 'info-groupe/:id', component: InfoGroupComponent },
  { path: 'modifier-session/:id', component: EditFormationComponent },
  { path: 'modifier-formation/:id', component: EditSessionComponent },
  { path: 'modifier-groupe/:id', component: EditGroupComponent },
  { path: 'info-devis/:id', component: InfoDevisComponent },
  { path: 'info-facture/:id', component: InfoFactureComponent },
  { path: 'edit-devis/:id', component: EditDevisComponent },
  { path: 'edit-facture/:id', component: EditFactureComponent },
  { path: 'ajouterCours', component: AddLessonComponent },
  { path: 'conatctez-Nous', component: ContactezNousComponent },
  { path: 'nos-Formations', component: NosFormationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
