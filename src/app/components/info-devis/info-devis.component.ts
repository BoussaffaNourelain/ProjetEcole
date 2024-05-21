import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DevisService } from 'src/app/services/devis.service';

@Component({
  selector: 'app-info-devis',

  templateUrl: './info-devis.component.html',
  styleUrl: './info-devis.component.css',
})
export class InfoDevisComponent {
  result: any;
  devis: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private dService: DevisService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let groupId = params.get('id');
      console.log('ID de groupe : ', groupId);
      // Maintenant, vous pouvez utiliser cet ID pour récupérer les informations de l'utilisateur
    });
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.dService.getDevisById(id).subscribe((response) => {
      console.log('Here response from BE', response.devis);
      this.result = response.devis;
    });
  }
}
