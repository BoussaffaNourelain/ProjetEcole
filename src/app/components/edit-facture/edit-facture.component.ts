import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FacteurService } from 'src/app/services/facteur.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-edit-facture',

  templateUrl: './edit-facture.component.html',
  styleUrl: './edit-facture.component.css',
})
export class EditFactureComponent {
  factureForm!: FormGroup;
  facture: any;
  factureId: any;
  usersTab: any = [];
  idUser: any;
  constructor(
    private route: ActivatedRoute,
    private fService: FacteurService,
    private uService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur depuis l'URL
    this.route.params.subscribe((params) => {
      this.factureId = params['id'];
      // Charger les données de l'utilisateur en utilisant l'ID
      this.fService.getFacturesById(this.factureId).subscribe((data) => {
        this.facture = data.facture;
      });
    });

    this.uService.getAllUsers().subscribe((reponse) => {
      console.log('here response from BE', reponse.users);
      this.usersTab = reponse.users;
    });
  }
  editFacture() {
    // Envoyer les données modifiées de l'utilisateur au service
    this.fService.editFactures(this.facture).subscribe((response) => {
      console.log('Modification réussie :', response);
      // Vous pouvez ajouter une redirection ou un message de succès ici
    });
    this.router.navigate([`dashboredFinancier`]);
  }

  selectUser(evt: any) {
    console.log('here event id', evt.target.value);
    this.idUser = evt.target.value;
  }
}
