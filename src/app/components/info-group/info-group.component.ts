import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-info-group',
  standalone: true,
  imports: [],
  templateUrl: './info-group.component.html',
  styleUrl: './info-group.component.css',
})
export class InfoGroupComponent {
  result: any;
  groupe: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private gService: GroupeService
  ) {}
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let groupId = params.get('id');
      console.log('ID de groupe : ', groupId);
      // Maintenant, vous pouvez utiliser cet ID pour récupérer les informations de l'utilisateur
    });
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.gService.getGroupeById(id).subscribe((response) => {
      console.log('Here response from BE', response.groupe);
      this.result = response.groupe;
    });
  }
}
