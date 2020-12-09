import Phaser from 'phaser';
import Button from '../helpers/Button';
import { gameState } from '../helpers/helpers';

const { width, height } = gameState();

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Start');
  }

  create() {
    // Game
    this.gameButton = new Button(this, width / 2,
      height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Instructions
    this.instructionsButton = new Button(this, width / 2,
      height / 2, 'blueButton1', 'blueButton2', 'How To Play', 'Instruction');

    // Credits
    this.creditsButton = new Button(this, width / 2,
      height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');
  }
}