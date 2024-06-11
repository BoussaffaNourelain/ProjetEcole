import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-affectation-formation-group',
  templateUrl: './affectation-formation-group.component.html',
  styleUrl: './affectation-formation-group.component.css',
})
export class AffectationFormationGroupComponent {
  formation: any = {};
  formationId: string = '';
  groupesTab: any = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fService: FormationService,
    private gService: GroupeService
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
    this.gService.getAllGroupes().subscribe((reponse) => {
      console.log('here response from BE', reponse.groupes);
      this.groupesTab = reponse.groupes;
    });
  }
}
