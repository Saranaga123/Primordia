import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit, OnDestroy {
  @Input() targetSize: number = 60;
  @Input() spawnInterval: number = 1000;
  @Input() gameDuration: number = 20000;
  @Input() backgroundImage: string | null = null; 
  @Input() targetImage: string | null = null;
  @Input() hitSound: string | null = null;
  @Input() requiredHits: number = 7;  // how many hits needed to succeed
  @Input() successSound: string | null = null;
  @Input() failSound: string | null = null;
@Output() gameOver = new EventEmitter<{ score: number; success: boolean }>();
  score = 0;
  targetX = 0;
  targetY = 0;
  gameActive = false;

  private intervalId: any;
  private timeoutId: any;

  ngOnInit() { 
  }

  ngOnDestroy() {
    this.clearTimers();
  }

  startGame() {
    this.score = 0;
    this.gameActive = true;
    this.spawnTarget();

    this.intervalId = setInterval(() => this.spawnTarget(), this.spawnInterval);

    this.timeoutId = setTimeout(() => {
      this.endGame();
    }, this.gameDuration);
  }

  spawnTarget() {
    const gameArea = document.getElementById('game-area');
    if (!gameArea) return;

    const areaWidth = gameArea.clientWidth;
    const areaHeight = gameArea.clientHeight;

    this.targetX = Math.floor(Math.random() * (areaWidth - this.targetSize));
    this.targetY = Math.floor(Math.random() * (areaHeight - this.targetSize));
  }

  hitTarget() {
  if (!this.gameActive) return;

  this.score++;

  // Play sound if provided
  if (this.hitSound) {
    const audio = new Audio(this.hitSound);
    audio.play().catch(() => {
      // ignore autoplay restrictions
    });
  }

  this.spawnTarget();
}

  endGame() {
  this.clearTimers();
  this.gameActive = false;

  let success = this.score >= this.requiredHits;

  // Play result sound
  if (success && this.successSound) {
    new Audio(this.successSound).play().catch(() => {});
  } else if (!success && this.failSound) {
    new Audio(this.failSound).play().catch(() => {});
  }

  // Emit result
    this.gameOver.emit({ score: this.score, success });
  }

  private clearTimers() {
    if (this.intervalId) clearInterval(this.intervalId);
    if (this.timeoutId) clearTimeout(this.timeoutId);
  }
}