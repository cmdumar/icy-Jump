import Phaser from 'phaser';
import { player } from './PreEndScene';
import { score } from './GameScene';
import { leaderBoard, centerCoord, gameState } from '../helpers/helpers';
import Button from '../helpers/Button';

export default class EndScene extends Phaser.Scene {
  constructor() {
    super('EndScene');
  }

  async create() {
    const { screenCenterX } = centerCoord(this);
    const { width, height } = gameState();

    this.title = this.add.text(screenCenterX, 140, 'Loading...', {
      fontSize: '20px',
      fill: '#fff',
    }).setOrigin(0.5);

    const sorted = await leaderBoard(score, player);

    if (sorted) {
      this.title.setText('LeaderBoard');
    }

    sorted.slice(0, 10)
      .forEach((i, idx) => {
        this.add.text((width / 4), (height / 2) - 120 + (idx * 30),
          `${idx + 1}. ${i.user}: ${i.score}`, {
            fontSize: '18px',
            fill: '#fff',
          });
      });
    this.add.text(screenCenterX, 30,
      'Game Over', {
        fontSize: '25px',
        fill: '#fff',
      })
      .setOrigin(0.5);
    this.add.text(screenCenterX, 60,
      `Your Score: ${score}`, {
        fontSize: '18px',
        fill: '#fff',
      })
      .setOrigin(0.5);
    this.add.text(screenCenterX, 90,
      'Click to Restart', {
        fontSize: '18px',
        fill: '#fff',
      })
      .setOrigin(0.5);


    this.backButton = new Button(this, width / 2,
      height / 2 + 220, 'blueButton1', 'blueButton2', 'Go Back', 'Start');
  }
}