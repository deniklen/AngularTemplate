import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/interaction/validator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ValidatorService]
})
export class RegisterComponent implements OnInit {


  constructor(private validatorService: ValidatorService) { }

  registerForm = new FormGroup({
    name: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    passwordRepeat: new FormControl('', [Validators.required])
  },
    { validators: this.validatorService.passwordMatch('password', 'passwordRepeat') }
  );

  get email() { return this.registerForm.controls.email; }
  get password() { return this.registerForm.controls.password; }
  get passwordRepeat() { return this.registerForm.controls.passwordRepeat; }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.email.value, this.password.value)
  }


}
