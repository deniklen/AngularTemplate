import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/interaction/validator.service';

@Component({
    selector: 'app-reset-password',
    templateUrl: './activate.component.html',
})
export class ActivateUserComponent {

    message = "FAILED NOT FAILED IDK"
    constructor() { }

    onSubmit() {
        
    }
}
