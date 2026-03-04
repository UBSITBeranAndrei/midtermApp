import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [],
  templateUrl: './property.html',
  styleUrl: './property.css'
})
export class PropertyComponent {
  isButtonDisabled = true;
  imageSource = 'https://angular.io/assets/images/logos/angular/angular.png';
  imageAlt = 'Angular Logo';
  imageWidth = 100;
  linkUrl = 'https://www.ub.edu.ph';
  inputPlaceholder = 'Type your name here...';

  onButtonClick() {
    this.isButtonDisabled = false;
  }
}