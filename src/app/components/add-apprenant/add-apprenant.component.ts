import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupeService } from 'src/app/services/groupe.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.css'],
})
export class AddApprenantComponent implements OnInit {
  userForm!: FormGroup;
  user: any = { role: 'apprenant', groupesID: [] }; // Ajouter le rôle de l'utilisateur et les groupes
  groupesTab: any = [];
  usersTab: any = [];
  selectedUser: any; // Ajouter une propriété pour stocker l'utilisateur sélectionné
  idGroupe: any;
  selectedGroupId: any; // Define selectedGroupId property

  constructor(
    private uService: UserService,
    private grService: GroupeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.grService.getAllGroupes().subscribe((reponse) => {
      console.log('here response from BE', reponse.groupes);
      this.groupesTab = reponse.groupes;
    });
    this.uService.getAllUsers().subscribe((reponse) => {
      console.log('here response from BE', reponse.users);
      this.usersTab = reponse.users;
    });
  }
  isUserAllowed(role: string): boolean {
    return ['apprenant'].includes(role);
  }
  affiche(id: string) {
    this.router.navigate([`affectationApprenantGroup/${id}`]);
  }
}
