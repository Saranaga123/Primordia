import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-radiant-butterfly',
  templateUrl: './radiant-butterfly.component.html',
  styleUrls: ['./radiant-butterfly.component.css']
})

export class RadiantButterflyComponent {    

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
    return this.evolutionPath === 'cosmic'
  ? 'cosmic'
  : this.evolutionPath === 'light'
  ? 'light'
  : 'dark';
  }
}