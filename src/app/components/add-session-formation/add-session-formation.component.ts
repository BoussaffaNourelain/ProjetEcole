import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SessionFormationService } from 'src/app/services/session-formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-session-formation',
  templateUrl: './add-session-formation.component.html',
  styleUrls: ['./add-session-formation.component.css'],
})
export class AddSessionFormationComponent implements OnInit {
  formateurForm!: FormGroup;
  user: any = {};
  sessionsTab: any = [];
  idSession: any;
  constructor(
    private sService: SessionFormationService,
    private uService: UserService
  ) {}

  ngOnInit(): void {
    this.sService.getAllSessionsFormations().subscribe((reponse) => {
      console.log('here response from BE', reponse.sessionFormation);
      this.sessionsTab = reponse.sessionFormation;
    });
  }
  addFormateurSession() {
    this.user.sessionID = this.idSession;
    console.log('here formateur obj', this.user);
    this.uService.addUser(this.user).subscribe((response) => {
      console.log('here response ', response.msg);
    });
  }
  selectGroupe(evt: any) {
    console.log('here event id', evt.target.value);
    this.idSession = evt.target.value;
  }
}
