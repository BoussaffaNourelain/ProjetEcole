import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-formation-details',

  templateUrl: './formation-details.component.html',
  styleUrl: './formation-details.component.css',
})
export class FormationDetailsComponent {
  groupe: any = {};
  groupeId: string = '';
  formationsTab: any = [];
  constructor(
    private route: ActivatedRoute,
    private fService: FormationService,
    private gService: GroupeService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID du groupe depuis l'URL
    this.route.params.subscribe((params) => {
      this.groupeId = params['id'];
      // Charger les données du groupe en utilisant l'ID
      this.gService.getGroupeById(this.groupeId).subscribe((data) => {
        this.groupe = data.groupe;
      });
      // Charger les formations associées au groupe
      this.fService
        .getFormationsByGroupesId([this.groupeId])
        .subscribe((data) => {
          this.formationsTab = data.formations;
        });
    });
  }
}
