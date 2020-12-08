import Phaser from 'phaser';
import { centerCoord, gameState } from '../helpers/helpers';
import Button from '../helpers/Button';

export default class InstructionScene extends Phaser.Scene {
  constructor() {
    super('Instruction');
  }

  create() {
    const { screenCenterX } = centerCoord(this);
    const { width, height } = gameState();

    this.add.text(screenCenterX, 90,
      'Control the character with left and \nright arrow keys. \n'
      + 'You lose if you fall on the ground.', {
        fontSize: '15px',
        fill: '#fff',
      })
      .setOrigin(0.5);

    this.backButton = new Button(this, width / 2,
      height / 2, 'blueButton1', 'blueButton2', 'Go Back', 'Start');
  }
}