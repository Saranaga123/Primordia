import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cocoon',
  templateUrl: './cocoon.component.html',
  styleUrls: ['./cocoon.component.css']
})
export class CocoonComponent {
@Input() name: string = 'Neutral Cocoon';
  @Input() level: number = 2;
  @Input() defense: number = 3;
  @Input() evolutionPath: 'neutral' | 'cosmic' | 'dark' = 'neutral';
  @Input() imageUrl?: string; // gif image

  @Output() cardSelected = new EventEmitter<any>();

   onSelect() {
  this.cardSelected.emit({
      name: this.name,
      level: this.level, 
      defense: this.defense,
      evolutionPath: this.evolutionPath,
      imageUrl: this.imageUrl
    });
  }

  get pathClass(): string {
    switch (this.evolutionPath) {
      case 'cosmic': return 'cosmic';
      case 'dark': return 'dark';
      default: return 'neutral';
    }
  }
}
