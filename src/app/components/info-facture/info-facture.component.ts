import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacteurService } from 'src/app/services/facteur.service';

@Component({
  selector: 'app-info-facture',

  templateUrl: './info-facture.component.html',
  styleUrl: './info-facture.component.css',
})
export class InfoFactureComponent {
  result: any;
  facture: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fService: FacteurService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let factureId = params.get('id');
      console.log('ID de groupe : ', factureId);
      // Maintenant, vous pouvez utiliser cet ID pour récupérer les informations de l'utilisateur
    });
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.fService.getFacturesById(id).subscribe((response) => {
      console.log('Here response from BE', response.facture);
      this.result = response.facture;
    });
  }
}
