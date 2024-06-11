import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DevisService } from 'src/app/services/devis.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-devis',
  templateUrl: './add-devis.component.html',
  styleUrls: ['./add-devis.component.css'],
})
export class AddDevisComponent implements OnInit {
  devisForm!: FormGroup;
  devis: any = {};
  constructor(private dService: DevisService, private router: Router) {}

  ngOnInit(): void {}
  addDevis() {
    this.dService.addDevis(this.devis).subscribe((response) => {
      console.log('here response ', response.msg);
    });
    this.router.navigate([`dashboredFinancier`]);
  }
}
