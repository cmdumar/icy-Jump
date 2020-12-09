import Phaser from 'phaser';
import Button from '../helpers/Button';
import { gameState } from '../helpers/helpers';

const { width, height } = gameState();

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.madeByText = this.add.text(0, 0, 'Made by Muhammad Umar',
      { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(width / 2,
      height / 2, width, height);

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    this.backButton = new Button(this, width / 2,
      height / 2 + 100, 'blueButton1', 'blueButton2', 'Go Back', 'Start');
  }
}