import Phaser from 'phaser';
import logoImg from './assets/logo.png';

function preload() {
  this.load.image('logo', logoImg);
}

function create() {
  const logo = this.add.image(400, 150, 'logo');

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: 'Power2',
    yoyo: true,
    loop: -1,
  });
}

const config = {
  type: Phaser.AUTO,
  parent: 'phaser-example',
  width: 800,
  height: 600,
  scene: {
    preload,
    create,
  },
};

const game = new Phaser.Game(config);

game();