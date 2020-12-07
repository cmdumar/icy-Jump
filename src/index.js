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

const gameOptions = {
  width: 480,
  height: 640,
  gravity: 800,
};

const config = {
  type: Phaser.AUTO,
  width: gameOptions.width,
  height: gameOptions.height,
  backgroundColor: '#4599ff',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: gameOptions.gravity },
    },
  },
  scene: JumpScene,
};

const game = new Phaser.Game(config);

game();