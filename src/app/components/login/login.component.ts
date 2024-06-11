import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMsg: string = '';
  userId: any;
  user = { email: '', password: '' };

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  // login() {
  //   this.userService.login(this.user).subscribe((response) => {
  //     console.log('here response after login ', response);
  //     if (response.token) {
  //       let decodedToken: any = jwtDecode(response.token);
  //       // Vérifier si l'utilisateur est activé
  //       if (decodedToken.status === 'activé') {
  //         sessionStorage.setItem('token', response.token);
  //         console.log('decodedToken', decodedToken);
  //         switch (decodedToken.role) {
  //           case 'admin':
  //             this.router.navigate(['dashboredAdministrateur']);
  //             break;
  //           case 'agentAdministratif':
  //             this.router.navigate(['dashboredAgentAdministratif']);
  //             break;
  //           case 'financier':
  //             this.router.navigate(['dashboredFinancier']);
  //             break;
  //           case 'apprenant':
  //             this.router.navigate(['dashboredApprenant']);
  //             break;
  //           case 'formateur':
  //             this.router.navigate(['dashboredFormateur']);
  //             break;
  //           default:
  //             this.router.navigate(['']);
  //             break;
  //         }
  //       } else {
  //         // Afficher un message si l'utilisateur n'est pas activé
  //         this.errorMsg =
  //           "Votre compte n'est pas activé. Veuillez attendre que l'administrateur l'active.";
  //       }
  //     } else {
  //       this.errorMsg = 'Veuillez vérifier votre email/mot de passe !';
  //     }
  //   });
  // }
  login() {
    this.userService.login(this.user).subscribe((response) => {
      console.log('here response after login ', response);
      if (response.token) {
        let decodedToken: any = jwtDecode(response.token);
        sessionStorage.setItem('token', response.token);
        console.log('decodedToken', decodedToken);
        switch (decodedToken.role) {
          case 'admin':
            this.router.navigate(['dashboredAdministrateur']);
            break;
          case 'agentAdministratif':
            this.router.navigate(['dashboredAgentAdministratif']);
            break;
          case 'financier':
            this.router.navigate(['dashboredFinancier']);
            break;
          case 'apprenant':
            this.router.navigate(['dashboredApprenant']);
            break;
          case 'formateur':
            this.router.navigate(['dashboredFormateur']);
            break;
          default:
            this.router.navigate(['']);
            break;
        }
      } else {
        this.errorMsg = 'Veuillez vérifier votre email/mot de passe !';
      }
    });
  }
}
