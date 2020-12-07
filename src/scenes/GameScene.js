import Phaser from 'phaser';
import stripe from '../assets/stripe.png';
import platform from '../assets/platform.png';
import codey from '../assets/codey.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('platform', platform);
    this.load.image('stripe', stripe);
    this.load.spritesheet('codey', codey, {
      frameWidth: 72,
      frameHeight: 90,
    });
  }

  create() {
    this.add.image(240, 300, 'logo');
  }
}