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
  user: any = {};
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
  EditUser(id: string) {
    this.router.navigate([`changementDonnees/${id}`]);
  }
  Edit(id: string) {
    // Obtenir les données de l'utilisateur par son identifiant
    this.uService.getUserById(id).subscribe((userData) => {
      // Vérifier si les données utilisateur existent
      if (userData && userData.user) {
        // Mettre à jour le statut de l'utilisateur
        const newStatus =
          userData.user.status === 'bloqué' ? 'activé' : 'bloqué';

        // Créer un objet avec l'identifiant de l'utilisateur et le nouveau statut
        const updatedUserData = {
          _id: id,
          status: newStatus,
        };

        // Appeler la fonction editUser du service pour mettre à jour l'utilisateur
        this.uService.editUser(updatedUserData).subscribe((response) => {
          console.log('Statut mis à jour avec succès :', response);

          // Actualiser la liste des utilisateurs après la mise à jour du statut
          this.uService.getAllUsers().subscribe((data) => {
            this.usersTab = data.users;
          });
        });
      } else {
        console.log(
          'Erreur : Impossible de récupérer les données utilisateur.'
        );
      }
    });
  }

  deleteUser(id: string) {
    this.uService.deleteUser(id).subscribe((response) => {
      console.log('Here response after delete', response.msg);
      this.uService.getAllUsers().subscribe((data) => {
        this.usersTab = data.users;
      });
    });
  }
}
