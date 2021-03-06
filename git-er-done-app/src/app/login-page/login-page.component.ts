import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'
import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  isLoading = false;
  

  constructor(public authService: AuthService, public router: Router ) { }

  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }else {
    this.authService.login(form.value.username,
      form.value.password,
      form.value.employeeFirstName,
      form.value.employeeLastName,
      form.value.employeeCellNumber,
      form.value.employeeID);
    }setTimeout( () =>
      this.router.navigate(['my-jobs']), 500
    )
  }

  ngOnInit(): void{ }
}
