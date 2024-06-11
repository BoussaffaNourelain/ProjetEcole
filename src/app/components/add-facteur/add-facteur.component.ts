import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FacteurService } from 'src/app/services/facteur.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-facteur',
  templateUrl: './add-facteur.component.html',
  styleUrls: ['./add-facteur.component.css'],
})
export class AddFacteurComponent implements OnInit {
  factureForm!: FormGroup;
  facture: any = {};
  constructor(private fService: FacteurService, private router: Router) {}

  ngOnInit(): void {}
  addFacture() {
    this.fService.addFactures(this.facture).subscribe((response) => {
      console.log('here response ', response.msg);
    });
    this.router.navigate([`dashboredFinancier`]);
  }
}
