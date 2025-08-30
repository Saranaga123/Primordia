import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-worm',
  templateUrl: './worm.component.html',
  styleUrls: ['./worm.component.css']
})
export class WormComponent {

@Input() name!: string;
  @Input() level!: number;
  @Input() attack!: number;
  @Input() defense!: number;
  @Input() evolutionPath!: string;
  @Input() imageUrl!: string;

  @Output() cardSelected = new EventEmitter<any>();

  onSelect() {
  this.cardSelected.emit({
    name: this.name,
    level: this.level,
    attack: this.attack,
    defense: this.defense,
    evolutionPath: this.evolutionPath,
    imageUrl: this.imageUrl
  });
}

  get pathClass(): string {
    switch (this.evolutionPath) {
      case 'demonic': return 'cosmic';
      case 'dark': return 'dark';
      default: return 'neutral';
    }
  }
}

