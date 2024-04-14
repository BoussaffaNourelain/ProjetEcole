import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(private formBuider: FormBuilder) {}

  ngOnInit(): void {
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
  signup() {}
}
