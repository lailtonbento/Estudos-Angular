import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input-output-properties',
  templateUrl: './input-output-properties.component.html',
  styleUrls: ['./input-output-properties.component.css'],
  
})
export class InputOutputPropertiesComponent {
  @Input() nome: string = '';
}
