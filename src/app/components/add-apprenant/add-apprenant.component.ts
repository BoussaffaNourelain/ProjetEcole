import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route } from '@angular/router';
import { response, Router } from 'express';
import { GroupeService } from 'src/app/services/groupe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-apprenant',
  templateUrl: './add-apprenant.component.html',
  styleUrls: ['./add-apprenant.component.css'],
})
export class AddApprenantComponent implements OnInit {
  userForm!: FormGroup;
  user: any = {};
  groupesTab: any = [];
  idGroupe: any;
  constructor(
    private uService: UserService,
    private grService: GroupeService
  ) {}

  ngOnInit(): void {
    this.grService.getAllGroupes().subscribe((reponse) => {
      console.log('here response from BE', reponse.groupes);
      this.groupesTab = reponse.groupes;
    });
  }
  addApprenant() {
    this.user.groupeID = this.idGroupe;
    console.log('here apprenant obj', this.user);
    this.uService.addUser(this.user).subscribe((response) => {
      console.log('here response ', response.msg);
    });
  }
  selectGroupe(evt: any) {
    console.log('here event id', evt.target.value);
    this.idGroupe = evt.target.value;
  }
}
