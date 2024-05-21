import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DemandeService } from 'src/app/services/demande.service';

@Component({
  selector: 'app-add-demande',
  templateUrl: './add-demande.component.html',
  styleUrls: ['./add-demande.component.css'],
})
export class AddDemandeComponent implements OnInit {
  demandeForm!: FormGroup;
  demande: any = {};

  constructor(private dService: DemandeService) {}

  ngOnInit(): void {}
  addDemande() {
    this.dService.addDemande(this.demande).subscribe((response) => {
      console.log('here response ', response.msg);
    });
  }
}
