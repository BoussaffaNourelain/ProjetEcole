import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-status',
  templateUrl: './edit-status.component.html',
  styleUrls: ['./edit-status.component.css'],
})
export class EditStatusComponent implements OnInit {
  user: any = {};
  userId: string = '';
  userForm!: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID de l'utilisateur depuis l'URL
    this.route.params.subscribe((params) => {
      this.userId = params['id'];
      // Charger les données de l'utilisateur en utilisant l'ID
      this.userService.getUserById(this.userId).subscribe((data) => {
        this.user = data.user;
      });
    });
  }

  edit(): void {
    // Envoyer les données modifiées de l'utilisateur au service
    this.userService.editUser(this.user).subscribe((response) => {
      console.log('Modification réussie :', response);
      // Vous pouvez ajouter une redirection ou un message de succès ici
    });
  }
}
