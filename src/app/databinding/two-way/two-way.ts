import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User, Employee } from '../../user';

@Component({
  selector: 'app-two-way',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './two-way.html',
  styleUrl: './two-way.css'
})
export class TwoWayComponent {
  twoWName = '';
  twoWayName = '';
  twoWayEmail = '';
  twoWayAge = 18;
  twoWayGender = '';
  twoWaySubscribed = false;
  rangeValue = 50;
  twoWayLanguage = '';
  twoWayColor = '#563d7c';
  selectedId = 0;
  selectedName = '';
  selectedDepartment = '';
  selectedPosition = '';
  selectedRole = '';

  programmingLanguages = ['JavaScript', 'TypeScript', 'Python', 'Java', 'C#'];

  user: Employee[] = [
    { id: 1, name: 'Andrei Beran', department: 'IT', position: 'Developer', role: 'Editor' },
    { id: 2, name: 'Juan dela Cruz', department: 'HR', position: 'Manager', role: 'Admin' },
    { id: 3, name: 'Maria Santos', department: 'Finance', position: 'Analyst', role: 'Viewer' },
  ];

  get profileSummary() {
    return `${this.twoWayName} | ${this.twoWayEmail} | Age: ${this.twoWayAge} | Gender: ${this.twoWayGender}`;
  }

  onClick(u: Employee) {
    this.selectedId = u.id;
    this.selectedName = u.name;
    this.selectedDepartment = u.department;
    this.selectedPosition = u.position;
    this.selectedRole = u.role;
  }

  resetForm() {
    this.twoWName = '';
    this.twoWayName = '';
    this.twoWayEmail = '';
    this.twoWayAge = 18;
    this.twoWayGender = '';
    this.twoWaySubscribed = false;
    this.rangeValue = 50;
    this.twoWayLanguage = '';
    this.twoWayColor = '#563d7c';
  }
}