import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
title = 'Primordia';
  
  onCardClicked(card: any) {
    console.log("Card clicked:", card);
  }
  onGameOver(result: { score: number; success: boolean }) {
  if (result.success) {
    console.log("Player cast spell successfully! Score:", result.score);
  } else {
    console.log("Spell failed! Score:", result.score);
  }
}
}
