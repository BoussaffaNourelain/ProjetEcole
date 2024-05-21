import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupeService } from 'src/app/services/groupe.service';
import { SessionFormationService } from 'src/app/services/session-formation.service';

@Component({
  selector: 'app-add-session-group',
  templateUrl: './add-session-group.component.html',
  styleUrls: ['./add-session-group.component.css'],
})
export class AddSessionGroupComponent implements OnInit {
  sessionForm!: FormGroup;
  sessionformation: any = {};
  groupesTab: any = [];
  idGroupe: any;

  constructor(
    private gService: GroupeService,
    private sService: SessionFormationService
  ) {}

  ngOnInit(): void {
    this.gService.getAllGroupes().subscribe((reponse) => {
      console.log('here response from BE', reponse.groupes);
      this.groupesTab = reponse.groupes;
    });
  }

  addSession() {
    // Assure-toi de définir les propriétés de sessionformation avant de les utiliser
    this.sService.getAllSessionsFormations().subscribe((response) => {
      const formationsFromDB = response.sessionFormation;
      console.log(formationsFromDB);
      // Rechercher la session de formation par son titre ou toute autre propriété pertinente
      const existingSessionFormation = formationsFromDB.find(
        (sessionformation: any) => {
          // Définir explicitement le type de 'sessionformation'
          return sessionformation.name === this.sessionformation.name; // Adapter cette condition selon vos besoins
        }
      );
      console.log(this.sessionformation.name);

      if (existingSessionFormation) {
        // La session de formation existe, affecter le groupe à cette session
        if (!existingSessionFormation.groupesID.includes(this.idGroupe)) {
          existingSessionFormation.groupesID.push(this.idGroupe);
          // Mettre à jour la session de formation dans la base de données
          this.sService
            .editSessionsFormations(existingSessionFormation)
            .subscribe((response) => {
              console.log(
                'Le groupe a été ajouté à la session de formation avec succès.'
              );
              // Afficher un message de succès à l'utilisateur ou effectuer d'autres actions si nécessaire
            });
        } else {
          console.log(
            'Le groupe est déjà associé à cette session de formation.'
          );
          // Afficher un message à l'utilisateur indiquant que le groupe est déjà associé à la session de formation
        }
      } else {
        console.log(
          "La session de formation n'existe pas dans la base de données."
        );
        // Afficher un message à l'utilisateur indiquant que la session de formation n'existe pas
        // ou effectuer d'autres actions en conséquence
      }
    });
  }

  selectGroupe(evt: any) {
    console.log('here event id', evt.target.value);
    this.idGroupe = evt.target.value;
  }
}
