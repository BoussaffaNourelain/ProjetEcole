import { Component, OnInit } from '@angular/core';
import { DevisService } from 'src/app/services/devis.service';
import { FacteurService } from 'src/app/services/facteur.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashbored-financial',
  templateUrl: './dashbored-financial.component.html',
  styleUrls: ['./dashbored-financial.component.css'],
})
export class DashboredFinancialComponent implements OnInit {
  devisTab: any = [];
  facturesTab: any = [];
  usersTab: any = [];

  constructor(
    private dService: DevisService,
    private fService: FacteurService,
    private uService: UserService
  ) {}

  ngOnInit(): void {
    this.dService.getAllDevis().subscribe((data) => {
      console.log('Here data from service ', data.deviss);
      this.devisTab = data.deviss;
    });
    this.fService.getAllFactures().subscribe((data) => {
      console.log('Here data from service ', data.facture);
      this.facturesTab = data.facture;
    });
    this.uService.getAllUsers().subscribe((data) => {
      console.log('Here data from service ', data.users);
      this.usersTab = data.users;
    });
  }
  isUserAllowed(role: string): boolean {
    return ['apprenant'].includes(role);
  }
}
