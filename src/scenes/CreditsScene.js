import Phaser from 'phaser';
import Button from '../helpers/Button';

const config = {
  width: 480,
  height: 640,
  gravity: 800,
};

export default class CreditsScene extends Phaser.Scene {
  constructor() {
    super('Credits');
  }

  create() {
    this.madeByText = this.add.text(0, 0, 'Made by Muhammad Umar',
      { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(config.width / 2,
      config.height / 2, config.width, config.height);

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone,
    );

    // Credits
    this.backButton = new Button(this, config.width / 2,
      config.height / 2 + 100, 'blueButton1', 'blueButton2', 'Go Back', 'Start');
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