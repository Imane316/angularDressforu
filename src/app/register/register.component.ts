import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  message: string = '';


  constructor(private formBuilder: FormBuilder, private http: HttpClient, private userService: UserService) {
    this.registerForm = this.formBuilder.group({
      pseudo: '',
      password: '',
      role: ''
    });
  }

  onSubmit() {
    const pseudo = (<string>this.registerForm.get('pseudo')?.value) || '';
    const password = (<string>this.registerForm.get('password')?.value) || '';
    const role = (<string>this.registerForm.get('role')?.value) || '';
    this.userService.userNew(pseudo, password, role).subscribe();
    console.log("ok");
    this.registerForm.reset();



  }

}
