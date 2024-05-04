import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ObjectId } from 'mongoose';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashbored-admin',
  templateUrl: './dashbored-admin.component.html',
  styleUrls: ['./dashbored-admin.component.css'],
})
export class DashboredAdminComponent implements OnInit {
  constructor(
    private uService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}
  usersTab: any = [];
  ngOnInit(): void {
    this.uService.getAllUsers().subscribe((data) => {
      console.log('Here data from service ', data.users);
      this.usersTab = data.users;
    });
  }
  isUserAllowed(role: string): boolean {
    return ['admin', 'financier', 'agentAdministratif', 'formateur'].includes(
      role
    );
  }
  gotoInfo(id: string) {
    this.router.navigate([`info-personnel/${id}`]);
  }
}
