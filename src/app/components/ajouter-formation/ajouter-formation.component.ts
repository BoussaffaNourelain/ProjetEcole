import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css'],
})
export class AjouterFormationComponent implements OnInit {
  Formation: any = {};
  formationForm!: FormGroup;
  constructor(private fService: FormationService) {}

  ngOnInit(): void {}
  addFormation() {
    this.fService.addFormation(this.Formation).subscribe((response) => {
      console.log('here response ', response.msg);
    });
  }
}
