import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from "../../services/auth.service"

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  isLoading = false

  constructor(public authService: AuthService) { }

  onAddUser(form: NgForm ) {
    if (form.invalid) {
      return;
    }
    this.authService.createUser(
      form.value.username,
      form.value.password,
      form.value.employeeFirstName,
      form.value.employeeLastName,
      form.value.employeeCellNumber,
      form.value.employeeID);
}

  ngOnInit(): void {
  }

}











