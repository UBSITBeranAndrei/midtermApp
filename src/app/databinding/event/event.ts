import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './event.html',
  styleUrl: './event.css'
})
export class EventComponent {
  isButtonDisabled = false;
  buttonLabel = 'Click Me';
  clickCount = 0;
  lastKeyPressed = '';
  mousePosition = { x: 0, y: 0 };
  selectedColor = '#ff0000';
  typedInput = '';
  selectedFramework = '';
  inputValue = '';
  formMessage = '';
  eventLog: string[] = [];

  frameworks = [
    { name: 'angular', value: 'Angular' },
    { name: 'react', value: 'React' },
    { name: 'vue', value: 'Vue' },
  ];

  onButtonClick() {
    this.clickCount++;
    this.buttonLabel = 'Clicked ' + this.clickCount + ' time(s)';
    this.addLog('Button clicked');
  }

  onKeyPress(event: KeyboardEvent) {
    this.lastKeyPressed = event.key;
    this.addLog('Key pressed: ' + event.key);
  }

  onMouseMove(event: MouseEvent) {
    this.mousePosition = { x: event.offsetX, y: event.offsetY };
  }

  onMouseEnter() { this.addLog('Mouse entered'); }
  onMouseLeave() { this.addLog('Mouse left'); }

  onColorChange(event: Event) {
    this.selectedColor = (event.target as HTMLInputElement).value;
    this.addLog('Color changed: ' + this.selectedColor);
  }

  onInputChange(event: Event) {
    this.typedInput = (event.target as HTMLInputElement).value;
  }

  onSelectionChange(value: string) {
    this.addLog('Framework selected: ' + value);
  }

  onFormSubmit(event: Event) {
    event.preventDefault();
    this.formMessage = 'Form submitted with: ' + this.inputValue;
    this.addLog('Form submitted');
  }

  onDoubleClick() { this.addLog('Double clicked!'); }

  onRightClick(event: Event) {
    event.preventDefault();
    this.addLog('Right clicked!');
  }

  addLog(entry: string) {
    this.eventLog.unshift(entry);
    if (this.eventLog.length > 5) this.eventLog.pop();
  }
}