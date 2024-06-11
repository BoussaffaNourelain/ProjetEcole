import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css'],
})
export class AddFormationComponent implements OnInit {
  usersTab: any = [];

  constructor(
    private uService: UserService,

    private router: Router
  ) {}

  ngOnInit(): void {
    this.uService.getAllUsers().subscribe((reponse) => {
      console.log('here response from BE', reponse.users);
      this.usersTab = reponse.users;
    });
  }
  isUserAllowed(role: string): boolean {
    return ['formateur'].includes(role);
  }
  affiche(id: string) {
    this.router.navigate([`affectationFormateurGroup/${id}`]);
  }
}
