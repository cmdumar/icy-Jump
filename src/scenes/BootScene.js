import Phaser from 'phaser';
import logo from '../assets/logo.png';

export default class BootScene extends Phaser.Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    this.load.spritesheet('logo', logo, { frameWidth: 300, frameHeight: 300 });
  }

  create() {
    this.scene.start('Preloader');
  }
}