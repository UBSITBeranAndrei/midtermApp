import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: true,
  imports: [],
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
  dotnot2: { profile?: { email?: string } } = { profile: { email: 'andrei@email.com' } };
  jpipe = new Date();
  isActive = true;

  getStatus() {
    return 'Active Student';
  }
}