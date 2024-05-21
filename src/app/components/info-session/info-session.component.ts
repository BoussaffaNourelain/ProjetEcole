import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionFormationService } from 'src/app/services/session-formation.service';

@Component({
  selector: 'app-info-session',
  templateUrl: './info-session.component.html',
  styleUrls: ['./info-session.component.css'],
})
export class InfoSessionComponent implements OnInit {
  resultat: any;
  session: any = {};

  constructor(
    private activatedRoute: ActivatedRoute,
    private sService: SessionFormationService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let sessionId = params.get('id');
      console.log("ID de l'utilisateur : ", sessionId);
    });
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.sService.getSessionsFormationsById(id).subscribe((response) => {
      console.log('Here response from BE', response.session);
      this.resultat = response.session;
    });
  }
}
