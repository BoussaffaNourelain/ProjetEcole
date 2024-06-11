import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormationService } from 'src/app/services/formation.service';
import { GroupeService } from 'src/app/services/groupe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-formation-group',
  templateUrl: './add-formation-group.component.html',
  styleUrls: ['./add-formation-group.component.css'],
})
export class AddFormationGroupComponent implements OnInit {
  formationForm!: FormGroup;
  formation: any = {};
  groupesTab: any = [];
  idGroupe: any;
  formationsTab: any = [];

  constructor(
    private gService: GroupeService,
    private fService: FormationService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.gService.getAllGroupes().subscribe((reponse) => {
      console.log('here response from BE', reponse.groupes);
      this.groupesTab = reponse.groupes;
    });
    this.fService.getAllFormations().subscribe((data) => {
      console.log('Here data from service ', data.formations);
      this.formationsTab = data.formations;
    });
  }

  addFormation() {
    // Vérifier si la formation existe dans la base de données
    this.fService.getAllFormations().subscribe((response) => {
      const formationsFromDB = response.formations;

      // Rechercher la formation par son titre ou toute autre propriété pertinente
      const existingFormation = formationsFromDB.find((formation: any) => {
        // Définir explicitement le type de 'formation'
        return formation.name === this.formation.name; // Adapter cette condition selon vos besoins
      });

      if (existingFormation) {
        // La formation existe, affecter le groupe à cette formation
        if (!existingFormation.groupesID.includes(this.idGroupe)) {
          existingFormation.groupesID.push(this.idGroupe);
          // Mettre à jour la formation dans la base de données
          this.fService
            .editFormation(existingFormation)
            .subscribe((response) => {
              console.log('Le groupe a été ajouté à la formation avec succès.');
              // Afficher un message de succès à l'utilisateur ou effectuer d'autres actions si nécessaire
            });
        } else {
          console.log('Le groupe est déjà associé à cette formation.');
          // Afficher un message à l'utilisateur indiquant que le groupe est déjà associé à la formation
        }
      } else {
        console.log("La formation n'existe pas dans la base de données.");
        // Afficher un message à l'utilisateur indiquant que la formation n'existe pas
        // ou effectuer d'autres actions en conséquence
      }
    });
    this.router.navigate([`dashboredAgentAdministratif`]);
  }

  selectGroupe(evt: any) {
    console.log('here event id', evt.target.value);
    this.idGroupe = evt.target.value;
  }
  affectation(id: string) {
    this.router.navigate([`affectationFormationGroup${id}`]);
  }
}
