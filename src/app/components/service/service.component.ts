import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import { SessionFormationService } from 'src/app/services/session-formation.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css'],
})
export class ServiceComponent implements OnInit {
  formationsTab: any = [];
  formation: any;
  sessionformation: any;
  sessionsformationTab: any = [];

  constructor(
    private fService: FormationService,
    private sService: SessionFormationService
  ) {}

  ngOnInit(): void {
    this.fService.getAllFormations().subscribe((data) => {
      console.log('Here data from service ', data.formations);
      this.formationsTab = data.formations;
    });
    this.sService.getAllSessionsFormations().subscribe((data) => {
      console.log('Here data from service ', data.sessionFormation);
      this.sessionsformationTab = data.sessionFormation;
    });
  }
  checkUserAuthentication(): boolean {
    const token =
      sessionStorage.getItem('token') || localStorage.getItem('token');

    if (token) {
      const decodedToken: any = jwtDecode(token);
      const currentTime = Date.now() / 1000;
      return decodedToken.exp > currentTime;
    } else {
      return false;
    }
  }

  // Fonction appelée lors du clic sur le bouton "Participer"
  onParticiperClick() {
    if (this.checkUserAuthentication()) {
      // L'utilisateur est connecté, effectuer l'action de participation ici
      console.log('Action de participation');
    } else {
      // L'utilisateur n'est pas connecté, afficher une alerte
      alert('Veuillez vous connecter ou vous inscrire pour participer.');
    }
  }
}
