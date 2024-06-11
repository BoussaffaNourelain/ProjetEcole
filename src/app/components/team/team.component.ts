import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
})
export class TeamComponent implements OnInit {
  usersTab: any = [];
  constructor(private uService: UserService) {}

  ngOnInit(): void {
    this.uService.getAllUsers().subscribe((data) => {
      console.log('Here data from service ', data.users);
      this.usersTab = data.users;
    });
  }
  isUserAllowed(role: string): boolean {
    return ['formateur'].includes(role);
  }
}
