import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importer le Router à partir d'Angular
import { response } from 'express';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  path: string = '';
  imagePreview: any;
  constructor(
    private formBuider: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.path = this.router.url;

    console.log(this.path);
    this.signupForm = this.formBuider.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      tel: [''],
      lastName: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(10),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.minLength(10),
        ],
      ],
      adress: [''],
      img: [''],
    });
  }

  signup() {
    const role =
      this.path === '/admin'
        ? 'admin'
        : this.path === '/formateur'
        ? 'formateur'
        : this.path === '/apprenant'
        ? 'apprenant'
        : this.path === '/agentAdministratif'
        ? 'agentAdministratif'
        : this.path === '/financier'
        ? 'financier'
        : '';

    this.signupForm.value.role = role;
    console.log('here object ', this.signupForm.value);
    this.userService.signup(this.signupForm.value).subscribe((response) => {
      console.log('here response from BE', response.msg);
    });
  }

  onImageSelected(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement && inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      console.log('here selected file', file);
      this.signupForm.patchValue({ img: file });
      this.signupForm.updateValueAndValidity();
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }
}
