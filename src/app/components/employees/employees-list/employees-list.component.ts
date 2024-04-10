import { Component } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { CommonModule } from '@angular/common';
import { EmployeesService } from '../../../services/employees.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-employees-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './employees-list.component.html',
  styleUrl: './employees-list.component.css',
})
export class EmployeesListComponent {
  employees: Employee[] = [];
  constructor(private employeesService: EmployeesService) {}
  ngOnInit(): void {
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }
}
