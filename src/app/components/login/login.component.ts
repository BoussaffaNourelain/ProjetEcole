import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMsg: string = '';
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
  login() {
    this.userService.login(this.user).subscribe((response) => {
      console.log('here response after login ', response);
      if (response.user) {
        if (response.user.role == 'admin') {
          this.router.navigate(['dashboredAdministrateur']);
        }
        if (response.user.role == 'agentAdministratif') {
          this.router.navigate(['dashboredAgentAdministratif']);
        }
        if (response.user.role == 'financier') {
          this.router.navigate(['dashboredFinancier']);
        }
        if (response.user.role == 'apprenant') {
          this.router.navigate(['dashboredApprenant']);
        }
        if (response.user.role == 'formateur') {
          this.router.navigate(['dashboredFormateur']);
        }
        if (response.user.role == '') {
          this.router.navigate(['']);
        }
      } else {
        this.errorMsg = 'Veuillez vérifier votre email/mot de passe !';
      }
    });
  }
}
