import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import { GroupeService } from 'src/app/services/groupe.service';
import { SessionFormationService } from 'src/app/services/session-formation.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-dashbored-staff-ad',
  templateUrl: './dashbored-staff-ad.component.html',
  styleUrls: ['./dashbored-staff-ad.component.css'],
})
export class DashboredStaffAdComponent implements OnInit {
  constructor(
    private fService: FormationService,
    private gService: GroupeService,
    private uService: UserService,
    private sService: SessionFormationService,
    private router: Router,
    private dService: DemandeService
  ) {}
  usersTab: any = [];
  sessionFormationTab: any = [];
  formationsTab: any = [];
  groupesTab: any = [];
  demandeTab: any = [];
  ngOnInit(): void {
    this.fService.getAllFormations().subscribe((data) => {
      console.log('Here data from service ', data.formations);
      this.formationsTab = data.formations;
    });
    this.gService.getAllGroupes().subscribe((data) => {
      console.log('Here data from service ', data.groupes);
      this.groupesTab = data.groupes;
    });
    this.uService.getAllUsers().subscribe((data) => {
      console.log('Here data from service ', data.users);
      this.usersTab = data.users;
    });
    this.sService.getAllSessionsFormations().subscribe((data) => {
      console.log('Here data from service ', data.sessionFormation);
      this.sessionFormationTab = data.sessionFormation;
    });
    this.dService.getAllDemandes().subscribe((data) => {
      console.log('Here data from service ', data.demandes);
      this.demandeTab = data.demandes;
    });
  }
  isUserAllowed(role: string): boolean {
    return ['apprenant'].includes(role);
  }
  gotoInfo(id: string) {
    this.router.navigate([`info-personnel/${id}`]);
  }
  deleteUser(id: string) {
    this.uService.deleteUser(id).subscribe((response) => {
      console.log('Here response after delete', response.msg);
      this.uService.getAllUsers().subscribe((data) => {
        this.usersTab = data.users;
      });
    });
  }
  Edit(id: string) {
    this.router.navigate([`changementDonnees/${id}`]);
  }
  gotoInfoo(id: string) {
    this.router.navigate([`info-formation/${id}`]);
  }
  deleteFormation(id: string) {
    this.fService.deleteFormation(id).subscribe((response) => {
      console.log('Here response after delete', response.msg);
      this.fService.getAllFormations().subscribe((data) => {
        this.formationsTab = data.formations;
      });
    });
  }
  EditFormation(id: string) {
    this.router.navigate([`modifier-formation/${id}`]);
  }
  gotoInfooo(id: string) {
    this.router.navigate([`info-session/${id}`]);
  }
  deleteSession(id: string) {
    this.sService.deleteSessionsFormations(id).subscribe((response) => {
      console.log('Here response after delete', response.msg);
      this.sService.getAllSessionsFormations().subscribe((data) => {
        this.sessionFormationTab = data.sessionFormation;
      });
    });
  }
  EditSession(id: string) {
    this.router.navigate([`modifier-session/${id}`]);
  }
  deleteDemande(id: string) {
    this.dService.deleteDemande(id).subscribe((response) => {
      console.log('Here response after delete', response.msg);
      this.dService.getAllDemandes().subscribe((data) => {
        this.demandeTab = data.demandes;
      });
    });
  }
  deleteGroupe(id: string) {
    this.gService.deleteGroupe(id).subscribe((response) => {
      console.log('Here response after delete', response.msg);
      this.gService.getAllGroupes().subscribe((data) => {
        this.groupesTab = data.groupes;
      });
    });
  }
  gotoInfoooo(id: string) {
    this.router.navigate([`info-groupe/${id}`]);
  }
  EditGroup(id: string) {
    this.router.navigate([`modifier-groupe/${id}`]);
  }
  Valider(id: string) {
    // Obtenir les données de l'utilisateur par son identifiant
    this.uService.getUserById(id).subscribe((userData) => {
      // Vérifier si les données utilisateur existent
      if (userData && userData.user) {
        // Mettre à jour le statut de l'utilisateur
        const newStatus =
          userData.user.status === 'bloqué' ? 'activé' : 'bloqué';

        // Créer un objet avec l'identifiant de l'utilisateur et le nouveau statut
        const updatedUserData = {
          _id: id,
          status: newStatus,
        };

        // Appeler la fonction editUser du service pour mettre à jour l'utilisateur
        this.uService.editUser(updatedUserData).subscribe((response) => {
          console.log('Statut mis à jour avec succès :', response);

          // Actualiser la liste des utilisateurs après la mise à jour du statut
          this.uService.getAllUsers().subscribe((data) => {
            this.usersTab = data.users;
          });
        });
      } else {
        console.log(
          'Erreur : Impossible de récupérer les données utilisateur.'
        );
      }
    });
  }
}
