import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({ selector: 'app-two-way', standalone: true, imports: [FormsModule], templateUrl: './two-way.html' })
export class TwoWayComponent {
  name = '';
}