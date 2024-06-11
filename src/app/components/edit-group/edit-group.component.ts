import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-edit-group',

  templateUrl: './edit-group.component.html',
  styleUrl: './edit-group.component.css',
})
export class EditGroupComponent {
  groupForm!: FormGroup;
  groupe: any;
  groupId: any;
  constructor(
    private route: ActivatedRoute,
    private gService: GroupeService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur depuis l'URL
    this.route.params.subscribe((params) => {
      this.groupId = params['id'];
      // Charger les données de l'utilisateur en utilisant l'ID
      this.gService.getGroupeById(this.groupId).subscribe((data) => {
        this.groupe = data.groupe;
      });
    });
  }
  editGroup() {
    // Envoyer les données modifiées de l'utilisateur au service
    this.gService.editGroupe(this.groupe).subscribe((response) => {
      console.log('Modification réussie :', response);
      // Vous pouvez ajouter une redirection ou un message de succès ici
    });
    this.router.navigate([`dashboredAgentAdministratif`]);
  }
}
