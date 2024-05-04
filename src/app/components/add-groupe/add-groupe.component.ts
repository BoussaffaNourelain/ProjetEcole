import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-add-groupe',
  templateUrl: './add-groupe.component.html',
  styleUrls: ['./add-groupe.component.css'],
})
export class AddGroupeComponent implements OnInit {
  groupeForm!: FormGroup;
  groupe: any = {};

  constructor(private gService: GroupeService) {}

  ngOnInit(): void {}
  addGroupe() {
    this.gService.addGroupe(this.groupe).subscribe((response) => {
      console.log('here response ', response.msg);
    });
  }
}
