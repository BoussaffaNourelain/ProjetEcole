import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';
import { GroupeService } from 'src/app/services/groupe.service';
import { SessionFormationService } from 'src/app/services/session-formation.service';

@Component({
  selector: 'app-dashbored-learner',
  templateUrl: './dashbored-learner.component.html',
  styleUrls: ['./dashbored-learner.component.css'],
})
export class DashboredLearnerComponent implements OnInit {
  userId: string = '';
  groupes: any[] = [];
  formations: any[] = [];
  sessions: any[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private groupeService: GroupeService,
    private formationService: FormationService,
    private sessionFormationService: SessionFormationService
  ) {}

  ngOnInit(): void {
    // const userIdParam = this.route.snapshot.paramMap.get('userId');
    // if (userIdParam) {
    //   this.userId = userIdParam;
    // }
    // this.loadData();
  }

  // loadData(): void {
  //   this.loading = true;
  //   this.error = null;

  //   this.groupeService.getGroupesByUserId(this.userId).subscribe(
  //     (groupes: any[]) => {
  //       this.groupes = groupes;
  //     },
  //     (error) => {
  //       this.error = 'Error loading groupes data.';
  //       this.loading = false;
  //     }
  //   );

  //   this.formationService.getFormationsByUserId(this.userId).subscribe(
  //     (formations: any[]) => {
  //       this.formations = formations;
  //     },
  //     (error) => {
  //       this.error = 'Error loading formations data.';
  //       this.loading = false;
  //     }
  //   );

  //   this.sessionFormationService.getSessionsByUserId(this.userId).subscribe(
  //     (sessions: any[]) => {
  //       this.sessions = sessions;
  //       this.loading = false;
  //     },
  //     (error) => {
  //       this.error = 'Error loading sessions data.';
  //       this.loading = false;
  //     }
  //   );
  // }
}
