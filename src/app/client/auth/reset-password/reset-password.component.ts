import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/interaction/validator.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['../register/register.component.css'],
    providers: [ValidatorService]
})
export class ResetPasswordComponent {

    constructor(private validatorsService: ValidatorService) { }

    resetPasswordForm = new FormGroup({
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        passwordRepeat: new FormControl('', Validators.required)
    },
        { validators: this.validatorsService.passwordMatch('password', 'passwordRepeat') });
    get password() { return this.resetPasswordForm.controls.password; }
    get passwordRepeat() { return this.resetPasswordForm.controls.passwordRepeat; }

    onSubmit() {
        console.log(this.password.value)
    }
}
