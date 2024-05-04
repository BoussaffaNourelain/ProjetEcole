import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { ServiceComponent } from './components/service/service.component';
import { WhyusComponent } from './components/whyus/whyus.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { TestimonalComponent } from './components/testimonal/testimonal.component';
import { TeamComponent } from './components/team/team.component';
import { ClientComponent } from './components/client/client.component';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainersComponent } from './components/trainers/trainers.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboredAdminComponent } from './components/dashbored-admin/dashbored-admin.component';
import { DashboredTrainerComponent } from './components/dashbored-trainer/dashbored-trainer.component';
import { DashboredLearnerComponent } from './components/dashbored-learner/dashbored-learner.component';
import { DashboredStaffAdComponent } from './components/dashbored-staff-ad/dashbored-staff-ad.component';
import { DashboredFinancialComponent } from './components/dashbored-financial/dashbored-financial.component';
import { AddAgentAdministratifComponent } from './components/add-agent-administratif/add-agent-administratif.component';
import { AddApprenantComponent } from './components/add-apprenant/add-apprenant.component';
import { AddFinancierComponent } from './components/add-financier/add-financier.component';
import { AddFormateurComponent } from './components/add-formateur/add-formateur.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddGroupeComponent } from './components/add-groupe/add-groupe.component';
import { AddFormationComponent } from './components/add-formation/add-formation.component';
import { AddFacteurComponent } from './components/add-facteur/add-facteur.component';
import { AddDevisComponent } from './components/add-devis/add-devis.component';
import { EditAgantAdministratifComponent } from './components/edit-agant-administratif/edit-agant-administratif.component';
import { EditApprenantComponent } from './components/edit-apprenant/edit-apprenant.component';
import { EditFinancierComponent } from './components/edit-financier/edit-financier.component';
import { EditAdminComponent } from './components/edit-admin/edit-admin.component';
import { FormationsTableComponent } from './components/formations-table/formations-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDemandeComponent } from './components/add-demande/add-demande.component';
import { AddSessionFormationComponent } from './components/add-session-formation/add-session-formation.component';
import { InfoPersonnelComponent } from './components/info-personnel/info-personnel.component';
import { AjouterFormationComponent } from './components/ajouter-formation/ajouter-formation.component';
import { AjouterSessionComponent } from './components/ajouter-session/ajouter-session.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeroComponent,
    AboutComponent,
    ServiceComponent,
    WhyusComponent,
    PortfolioComponent,
    TestimonalComponent,
    TeamComponent,
    ClientComponent,
    ContactComponent,
    TrainersComponent,
    DashboredAdminComponent,
    DashboredTrainerComponent,
    DashboredLearnerComponent,
    DashboredStaffAdComponent,
    DashboredFinancialComponent,
    AddAgentAdministratifComponent,
    AddApprenantComponent,
    AddFinancierComponent,
    AddFormateurComponent,
    AddAdminComponent,
    AddGroupeComponent,
    AddFormationComponent,
    AddFacteurComponent,
    AddDevisComponent,
    EditAgantAdministratifComponent,
    EditApprenantComponent,
    EditFinancierComponent,
    EditAdminComponent,
    FormationsTableComponent,
    AddDemandeComponent,
    AddSessionFormationComponent,
    InfoPersonnelComponent,
    AjouterFormationComponent,
    AjouterSessionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
