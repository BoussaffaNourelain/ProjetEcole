import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-edit-session',
  templateUrl: './edit-session.component.html',
  styleUrl: './edit-session.component.css',
})
export class EditSessionComponent {
  formationForm!: FormGroup;
  formation: any;
  formationId: any;
  constructor(
    private route: ActivatedRoute,
    private fService: FormationService
  ) {}
  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur depuis l'URL
    this.route.params.subscribe((params) => {
      this.formationId = params['id'];
      // Charger les données de l'utilisateur en utilisant l'ID
      this.fService.getFormationsById(this.formationId).subscribe((data) => {
        this.formation = data.formation;
      });
    });
  }
  editFormation() {
    // Envoyer les données modifiées de l'utilisateur au service
    this.fService.editFormation(this.formation).subscribe((response) => {
      console.log('Modification réussie :', response);
      // Vous pouvez ajouter une redirection ou un message de succès ici
    });
  }
}
