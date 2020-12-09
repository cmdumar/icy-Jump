import Phaser from 'phaser';
import BootScene from './scenes/BootScene';
import PreloaderScene from './scenes/PreloaderScene';
import StartScene from './scenes/StartScene';
import GameScene from './scenes/GameScene';
import CreditsScene from './scenes/CreditsScene';
import PreEndScene from './scenes/PreEndScene';
import EndScene from './scenes/EndScene';
import './style.scss';
import InstructionScene from './scenes/InstructionScene';

const gameOptions = {
  width: 480,
  height: 640,
  gravity: 800,
};

const config = {
  type: Phaser.AUTO,
  parent: 'icyJump',
  dom: {
    createContainer: true,
  },
  width: gameOptions.width,
  height: gameOptions.height,
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
    this.scene.add('Boot', BootScene);
    this.scene.add('Preloader', PreloaderScene);
    this.scene.add('Start', StartScene);
    this.scene.add('Game', GameScene);
    this.scene.add('Instruction', InstructionScene);
    this.scene.add('Credits', CreditsScene);
    this.scene.add('PreEnd', PreEndScene);
    this.scene.add('EndScene', EndScene);
    this.scene.start('Boot');
  }
}

window.game = new Game();