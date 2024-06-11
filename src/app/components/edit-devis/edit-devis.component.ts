import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-edit-devis',

  templateUrl: './edit-devis.component.html',
  styleUrl: './edit-devis.component.css',
})
export class EditDevisComponent {
  devisForm!: FormGroup;
  devis: any;
  devisId: any;
  constructor(
    private route: ActivatedRoute,
    private dService: DevisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur depuis l'URL
    this.route.params.subscribe((params) => {
      this.devisId = params['id'];
      // Charger les données de l'utilisateur en utilisant l'ID
      this.dService.getDevisById(this.devisId).subscribe((data) => {
        this.devis = data.devis;
      });
    });
  }
  editDevis() {
    // Envoyer les données modifiées de l'utilisateur au service
    this.dService.editDevis(this.devis).subscribe((response) => {
      console.log('Modification réussie :', response);
      // Vous pouvez ajouter une redirection ou un message de succès ici
    });
    this.router.navigate([`dashboredFinancier`]);
  }
}
