import Phaser from 'phaser';
import logo from '../assets/logo.png';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('Game');
  }

  preload() {
    this.load.image('logo', logo);
  }

  create() {
    this.add.image(240, 300, 'logo');
  }
}