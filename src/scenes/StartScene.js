import Phaser from 'phaser';
import Button from '../helpers/Button';

const config = {
  width: 480,
  height: 640,
};

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super('Start');
  }

  create() {
    // Game
    this.gameButton = new Button(this, config.width / 2,
      config.height / 2 - 100, 'blueButton1', 'blueButton2', 'Play', 'Game');

    // Credits
    this.creditsButton = new Button(this, config.width / 2,
      config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Credits', 'Credits');
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width / 2,
        config.height / 2 - offset * 100, config.width, config.height),
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton,
    );
  }
}