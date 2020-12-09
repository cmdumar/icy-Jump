import Phaser from 'phaser';
import { player } from './PreEndScene';
import { score } from './GameScene';
import leaderBoard, { saveScore } from '../helpers/leaderBoard';
import { centerCoord, gameState, baseURL } from '../helpers/helpers';
import Button from '../helpers/Button';

const { base, apikey } = baseURL();

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

    if (score > 10) {
      await saveScore(base, apikey, score, player);
    }

    const sorted = await leaderBoard(base, apikey);

    if (sorted) {
      this.title.setText('LeaderBoard');
    }

    sorted
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