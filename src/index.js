import Phaser from 'phaser';
import StartScene from './scenes/StartScene';
import GameScene from './scenes/GameScene';

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
};

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add('Game', GameScene);
    this.scene.add('Start', StartScene);
    this.scene.start('Start');
  }
}

const game = new Game();

game();