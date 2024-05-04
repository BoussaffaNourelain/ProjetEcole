import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import { GroupeService } from 'src/app/services/groupe.service';
import { SessionFormationService } from 'src/app/services/session-formation.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashbored-staff-ad',
  templateUrl: './dashbored-staff-ad.component.html',
  styleUrls: ['./dashbored-staff-ad.component.css'],
})
export class DashboredStaffAdComponent implements OnInit {
  constructor(
    private fService: FormationService,
    private gService: GroupeService,
    private uService: UserService,
    private sService: SessionFormationService
  ) {}
  usersTab: any = [];
  sessionFormationTab: any = [];
  formationsTab: any = [];
  groupesTab: any = [];

  ngOnInit(): void {
    this.fService.getAllFormations().subscribe((data) => {
      console.log('Here data from service ', data.formations);
      this.formationsTab = data.formations;
    });
    this.gService.getAllGroupes().subscribe((data) => {
      console.log('Here data from service ', data.groupes);
      this.groupesTab = data.groupes;
    });
    this.uService.getAllUsers().subscribe((data) => {
      console.log('Here data from service ', data.users);
      this.usersTab = data.users;
    });
    this.sService.getAllSessionsFormations().subscribe((data) => {
      console.log('Here data from service ', data.sessionFormation);
      this.sessionFormationTab = data.sessionFormation;
    });
  }
  isUserAllowed(role: string): boolean {
    return ['apprenant'].includes(role);
  }
}
