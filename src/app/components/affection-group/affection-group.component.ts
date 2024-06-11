import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupeService } from 'src/app/services/groupe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-affection-group',

  templateUrl: './affection-group.component.html',
  styleUrl: './affection-group.component.css',
})
export class AffectionGroupComponent {
  user: any = {};
  userId: string = '';
  userForm!: FormGroup;
  groupesTab: any = [];
  idGroupe: any;
  constructor(
    private route: ActivatedRoute,
    private gService: GroupeService,
    private router: Router,

    private userService: UserService
  ) {}
  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur depuis l'URL
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      // Charger les données de l'utilisateur en utilisant l'ID
      this.userService.getUserById(this.userId).subscribe((data) => {
        this.user = data.user;
      });
    });
    this.gService.getAllGroupes().subscribe((reponse) => {
      console.log('here response from BE', reponse.groupes);
      this.groupesTab = reponse.groupes;
    });
  }
  affectation(): void {
    this.userService
      .affecterGroupe(this.userId, this.idGroupe)
      .subscribe((response) => {
        console.log(response);
      });
    this.router.navigate([`dashboredAgentAdministratif`]);
  }
  selectGroupe(evt: any) {
    console.log('here event id', evt.target.value);
    this.idGroupe = evt.target.value;
  }
}
