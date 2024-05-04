import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-formations-table',
  templateUrl: './formations-table.component.html',
  styleUrls: ['./formations-table.component.css'],
})
export class FormationsTableComponent implements OnInit {
  formationsTab: any = [];
  constructor(private fService: FormationService) {}

  ngOnInit(): void {
    this.fService.getAllFormations().subscribe((data) => {
      console.log('Here data from service ', data.formations);
      this.formationsTab = data.formations;
    });
  }
}
