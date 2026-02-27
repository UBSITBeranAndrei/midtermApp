import { Component } from '@angular/core';
@Component({ selector: 'app-event', standalone: true, templateUrl: './event.html' })
export class EventComponent {
  message = '';
  onClick() { this.message = 'Button was clicked!'; }
}