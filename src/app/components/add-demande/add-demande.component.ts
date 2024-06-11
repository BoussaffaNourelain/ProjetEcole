import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.css'],
})
export class AddDemandeComponent implements OnInit {
  demandeForm!: FormGroup;
  demande: any = {};

  constructor(
    private dService: DemandeService,
    private router: Router,
    private authService: AuthentificationService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.demandeForm = this.fb.group({
      sexe: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      function: ['', Validators.required],
      adress: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      titleFormation: ['', Validators.required],
      duration: ['', Validators.required],
      priceEstimation: ['', Validators.required],
    });
  }
  addDemande() {
    const userId = this.authService.getUserIdFromToken();
    this.demande = { ...this.demandeForm.value, userID: userId };

    this.dService.addDemande(this.demande).subscribe((response) => {
      console.log('here response ', response.msg);
    });
    this.router.navigate([`dashboredAgentAdministratif`]);
  }
}
