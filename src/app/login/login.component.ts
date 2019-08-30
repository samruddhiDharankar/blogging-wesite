import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

// import { groupBy } from 'rxjs/internal/operators/groupBy';
// import { stringify } from '@angular/compiler/src/util';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',  
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  myForm : FormGroup; 
  message : string = "";
  userError : any;

  constructor(public fb: FormBuilder, public authService: AuthService, public router: Router) {

    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit(form){
    console.log(form.value);

    this.authService.login(form.value.email, form.value.password).
    then((data) => {
      console.log(data);
      this.message = "you have logged in successfully."

      this.router.navigate(['/myblogs'])

    }).catch((error) => {
      console.log(error);
      this.userError = error;
    })

  }
  ngOnInit() {
  }

}
