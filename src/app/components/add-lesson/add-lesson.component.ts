import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from 'src/app/services/cours.service';
import { GroupeService } from 'src/app/services/groupe.service';

@Component({
  selector: 'app-add-lesson',

  templateUrl: './add-lesson.component.html',
  styleUrl: './add-lesson.component.css',
})
export class AddLessonComponent {
  lessonForm!: FormGroup;
  cours: any = {};
  groupesTab: any = [];
  idGroupe: any;

  constructor(
    private grService: GroupeService,
    private cService: CoursService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.grService.getAllGroupes().subscribe((reponse) => {
      console.log('here response from BE', reponse.groupes);
      this.groupesTab = reponse.groupes;
    });
  }
  selectGroupe(evt: any) {
    console.log('here event id', evt.target.value);
    this.idGroupe = evt.target.value;
  }
  addLesson() {
    this.cours.groupesID = this.idGroupe;
    console.log('here apprenant obj', this.cours);
    this.cService.addCours(this.cours).subscribe((response) => {
      console.log('here response ', response.msg);
    });
    this.router.navigate([`dashboredFormateur`]);
  }
}
