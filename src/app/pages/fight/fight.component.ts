import { Component } from '@angular/core';

@Component({
  selector: 'app-fight',
  templateUrl: './fight.component.html',
  styleUrls: ['./fight.component.css']
})
export class FightComponent {
  title = 'Primordia';
 onCardClicked(card: any) {
    console.log("Card clicked:", card);
  }
   
  enemy = {
    name: '👑🦋Seraphim Butterfly',
    level: 4,
    attack: 80,
    defense: 20,
    imageUrl: 'assets/light-butterfly.gif'
  };

  // Example player creature
  player = {
    name: '👹Abyssal Devourer👹',
    level: 1,
    attack: 101,
    defense: 1,
    imageUrl: 'assets/demonic-worm.gif'
  };

  enemyHP = this.enemy.defense;
playerHP = this.player.defense;      // actual HP
displayedPlayerHP = this.player.defense; // for animation
  fightLog: string[] = [];

  onGameOver(event: { score: number; success: boolean }) {
  if (event.success) {
    // Player spell hits
    const damage = this.player.attack * event.score;
    this.enemyHP -= damage;
    this.fightLog.push(`${this.player.name} hits ${this.enemy.name} for ${damage} damage!`);

    this.animateHPDecrease(damage);

    if (this.enemyHP <= 0) {
      this.fightLog.push(`🎉 ${this.enemy.name} defeated! You win!`);
    }
  } else {
    // Spell failed → Enemy counterattack
    const damage = this.enemy.attack;
    this.playerHP -= damage;
    this.fightLog.push(`${this.enemy.name} hits ${this.player.name} for ${damage} damage!`);

    this.animatePlayerHPDecrease(damage);

    if (this.playerHP <= 0) {
      this.fightLog.push(`💀 ${this.player.name} defeated! You lose!`);
    }
  }
}
displayedHP = this.enemy.defense;   // what we show in UI

// Animate HP decrease
animateHPDecrease(amount: number) {
  const step = amount / 20; // 20 steps animation
  let count = 0;

  const interval = setInterval(() => {
    this.displayedHP -= step;
    count++;
    if (count >= 20 || this.displayedHP <= 0) {
      this.displayedHP = Math.max(this.enemyHP, 0); // clamp at 0
      clearInterval(interval);
    }
  }, 20); // 20ms per step → ~400ms animation
}
animatePlayerHPDecrease(amount: number) {
  const step = amount / 20; // 20 steps animation
  let count = 0;

  const interval = setInterval(() => {
    this.displayedPlayerHP -= step;
    count++;
    if (count >= 20 || this.displayedPlayerHP <= 0) {
      this.displayedPlayerHP = Math.max(this.playerHP, 0); // clamp
      clearInterval(interval);
    }
  }, 20); // 20ms per step → ~400ms animation
}
}
