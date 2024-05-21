import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SessionFormationService } from 'src/app/services/session-formation.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css'],
})
export class EditFormationComponent {
  sessionForm!: FormGroup;
  sessionformation: any;
  sessionId: any;
  constructor(
    private route: ActivatedRoute,
    private sService: SessionFormationService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur depuis l'URL
    this.route.params.subscribe((params) => {
      this.sessionId = params['id'];
      // Charger les données de l'utilisateur en utilisant l'ID
      this.sService
        .getSessionsFormationsById(this.sessionId)
        .subscribe((data) => {
          this.sessionformation = data.session;
        });
    });
  }
  editSession() {
    // Envoyer les données modifiées de l'utilisateur au service
    this.sService
      .editSessionsFormations(this.sessionformation)
      .subscribe((response) => {
        console.log('Modification réussie :', response);
        // Vous pouvez ajouter une redirection ou un message de succès ici
      });
  }
}
