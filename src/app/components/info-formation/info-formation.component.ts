import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-info-formation',
  standalone: true,
  imports: [],
  templateUrl: './info-formation.component.html',
  styleUrl: './info-formation.component.css',
})
export class InfoFormationComponent {
  result: any;
  formation: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private fService: FormationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let formationId = params.get('id');
      console.log("ID de l'utilisateur : ", formationId);
      // Maintenant, vous pouvez utiliser cet ID pour récupérer les informations de l'utilisateur
    });
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.fService.getFormationsById(id).subscribe((response) => {
      console.log('Here response from BE', response.formation);
      this.result = response.formation;
    });
  }
}
