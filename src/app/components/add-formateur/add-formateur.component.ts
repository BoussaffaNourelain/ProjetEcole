import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormationService } from 'src/app/services/formation.service';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.css'],
})
export class AddFormateurComponent implements OnInit {
  formateurForm!: FormGroup;
  user: any = {};
  formationsTab: any = [];
  idFormation: any;
  constructor(
    private fService: FormationService,
    private uService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fService.getAllFormations().subscribe((reponse) => {
      console.log('here response from BE', reponse.formations);
      this.formationsTab = reponse.formations;
    });
  }
  addFormateur() {
    this.user.formationID = this.idFormation;
    console.log('here formateur obj', this.user);
    this.uService.addUser(this.user).subscribe((response) => {
      console.log('here response ', response.msg);
    });
    this.router.navigate([`dashboredAgentAdministratif`]);
  }
  selectGroupe(evt: any) {
    console.log('here event id', evt.target.value);
    this.idFormation = evt.target.value;
  }
}
