import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { User } from '../../user';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './interpolation.html',
  styleUrl: './interpolation.css'
})
export class InterpolationComponent {
  title = 'Interpolation Binding';
  studentName = 'Andrei Beran';
  courseCode = 'APPDEV1';
  currentYear = new Date().getFullYear();
  roles = ['editor', 'student'];
  text = 'Hello World';
  curly = 'expression';
  common = { username: 'andrei_beran' };
  dotnot = { username: 'andrei_beran' };
  dotnot2: { profile?: { email?: string } | null } | null = { profile: { email: 'andrei@email.com' } };
  jpipe = { name: 'Andrei', course: 'APPDEV1' };
  isActive = true;

  user: User = {
    name: 'John Doe',
    position: 'Software Engineer',
    department: 'IT',
    details: { role: 'Admin' }
  };

  skills = ['Angular', 'TypeScript', 'Bootstrap'];

  countries = [
    { id: 1, name: 'Philippines' },
    { id: 2, name: 'USA' },
    { id: 3, name: 'Japan' },
  ];

  selectedCountryId = '';

  getWelcomeMessage() {
    return 'Welcome, ' + this.studentName + '!';
  }

  getStatus() {
    return 'Active Student';
  }
}