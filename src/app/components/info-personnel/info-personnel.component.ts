import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-info-personnel',
  templateUrl: './info-personnel.component.html',
  styleUrls: ['./info-personnel.component.css'],
})
export class InfoPersonnelComponent implements OnInit {
  infoForm!: FormGroup;
  user: any;
  result: any;
  users: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private uService: UserService // Injectez votre service
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      let userId = params.get('id');
      console.log("ID de l'utilisateur : ", userId);
      // Maintenant, vous pouvez utiliser cet ID pour récupérer les informations de l'utilisateur
    });
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.uService.getUserById(id).subscribe((response) => {
      console.log('Here response from BE', response.user);
      this.result = response.user;
    });
  }
}
