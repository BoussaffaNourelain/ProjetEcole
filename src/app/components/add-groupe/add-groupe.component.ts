import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupeService } from 'src/app/services/groupe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-groupe',
  templateUrl: './add-groupe.component.html',
  styleUrls: ['./add-groupe.component.css'],
})
export class AddGroupeComponent implements OnInit {
  groupeForm!: FormGroup;
  groupe: any = {};
  usersTab: any = [];
  idGroupe: any;

  constructor(
    private gService: GroupeService,
    private router: Router,
    private uService: UserService
  ) {}

  ngOnInit(): void {
    this.uService.getAllUsers().subscribe((reponse) => {
      console.log('here response from BE', reponse.users);
      this.usersTab = reponse.users;
    });
  }
  addGroupe() {
    this.gService.addGroupe(this.groupe).subscribe((response) => {
      console.log('here response ', response.msg);
    });
    this.router.navigate([`dashboredAgentAdministratif`]);
  }
  selectGroupe(evt: any) {
    console.log('here event id', evt.target.value);
    this.idGroupe = evt.target.value;
  }
  isUserAllowed(role: string): boolean {
    return ['formateur'].includes(role);
  }
}
