import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { CommonModule } from "@angular/common"

@Component({
  selector: 'app-reactiveform',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.html',
  styleUrl: './reactiveform.scss',
})
export class Reactiveform {
   registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

    this.registerForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3)
      ]],

      email: ['', [
        Validators.required,
        Validators.email
      ]],

      password: ['', [
        Validators.required,
        Validators.minLength(6)
      ]],

      confirmPassword: ['', Validators.required],

      age: ['', [
        Validators.required,
        Validators.min(18)
      ]],

      terms: [false, Validators.requiredTrue]

    }, {
      validators: this.passwordMatchValidator
    });

  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {

    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword
      ? null
      : { passwordMismatch: true };
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log(this.registerForm.value);

    alert('Form Submitted Successfully');
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
