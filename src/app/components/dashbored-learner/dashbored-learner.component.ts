import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { UserService } from 'src/app/services/user.service';
import { GroupeService } from 'src/app/services/groupe.service';
import { SessionFormationService } from 'src/app/services/session-formation.service';
import { FormationService } from 'src/app/services/formation.service';
import { CoursService } from 'src/app/services/cours.service'; // Ajout du service CoursService
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashbored-learner',
  templateUrl: './dashbored-learner.component.html',
  styleUrls: ['./dashbored-learner.component.css'],
})
export class DashboredLearnerComponent implements OnInit {
  groupesTab: any[] = [];
  user: any;
  sessionsTab: any[] = [];
  formationsTab: any[] = [];
  coursTab: any[] = []; // Nouvelle variable pour stocker les cours

  constructor(
    private authService: AuthentificationService,
    private router: Router,
    private uService: UserService,
    private gService: GroupeService,
    private sService: SessionFormationService,
    private fService: FormationService,
    private coursService: CoursService // Injection du service CoursService
  ) {}

  ngOnInit(): void {
    const userId = this.authService.getUserIdFromToken();
    if (userId) {
      console.log('User ID:', userId); // Vérifiez l'ID de l'utilisateur
      this.uService.getUserById(userId).subscribe(
        (data) => {
          this.user = data.user;
          console.log('User:', this.user);

          if (this.user && this.user.groupesID) {
            this.gService.getGroupeById(this.user.groupesID).subscribe(
              (data) => {
                // Si data.groupe est un tableau
                if (Array.isArray(data.groupe)) {
                  this.groupesTab = data.groupe;
                } else {
                  // Si data.groupe est un objet unique
                  this.groupesTab = [data.groupe];
                }
                console.log('Groupe:', this.groupesTab);

                // Récupérer les sessions basées sur les groupes
                const groupIds = this.groupesTab.map((g) => g._id);
                this.sService.getAllSessionsFormations().subscribe(
                  (sessionsData) => {
                    // Filtrer les sessions basées sur les groupes de l'utilisateur
                    this.sessionsTab = sessionsData.sessionFormation.filter(
                      (session: any) =>
                        session.groupesID.some((groupId: any) =>
                          groupIds.includes(groupId)
                        )
                    );
                    console.log('Sessions:', this.sessionsTab);
                  },
                  (error) => {
                    console.error(
                      'Erreur lors de la récupération des sessions de formation basées sur les groupes:',
                      error
                    );
                  }
                );

                // Récupérer les formations basées sur les groupes
                this.fService.getFormationsById(groupIds).subscribe(
                  (formationsData: any) => {
                    this.formationsTab = Array.isArray(formationsData)
                      ? formationsData
                      : [formationsData];
                    console.log('Formations:', this.formationsTab);
                  },
                  (error: any) => {
                    console.error(
                      'Erreur lors de la récupération des formations basées sur les groupes:',
                      error
                    );
                  }
                );

                // Récupérer les cours associés au groupe
                this.coursService.getCoursByGroupeId(groupIds).subscribe(
                  (coursData) => {
                    this.coursTab = coursData.cours;
                    console.log('Cours associés au groupe:', this.coursTab);
                  },
                  (error) => {
                    console.error(
                      'Erreur lors de la récupération des cours associés au groupe:',
                      error
                    );
                  }
                );
              },
              (error) => {
                console.error(
                  'Erreur lors de la récupération du groupe:',
                  error
                );
              }
            );
          } else {
            console.error("L'utilisateur n'a pas de groupesID");
          }
        },
        (error) => {
          console.error(
            "Erreur lors de la récupération de l'utilisateur:",
            error
          );
        }
      );
    } else {
      console.error('Utilisateur non authentifié');
    }
  }
  afficheFormation(id: string) {
    this.router.navigate([`detailsFormationGroup/${id}`]);
  }
}
