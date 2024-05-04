import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SessionFormationService } from 'src/app/services/session-formation.service';

@Component({
  selector: 'app-ajouter-session',
  templateUrl: './ajouter-session.component.html',
  styleUrls: ['./ajouter-session.component.css'],
})
export class AjouterSessionComponent implements OnInit {
  SessionFormation: any = {};
  sessionForm!: FormGroup;
  constructor(private sService: SessionFormationService) {}

  ngOnInit(): void {}
  addSession() {
    this.sService
      .addSessionsFormations(this.SessionFormation)
      .subscribe((response) => {
        console.log('here response ', response.msg);
      });
  }
}
