import Phaser from 'phaser';

export default class EndScene extends Phaser.Scene {
  constructor() {
    super('EndScene');
  }

  create() {
    this.add.text(140, 230, 'Your Score: 0', { fontSize: '18px', fill: '#000000' });
    this.add.text(180, 250, 'Game Over', { fontSize: '15px', fill: '#000000' });
    this.add.text(152, 270, 'Click to Restart', { fontSize: '15px', fill: '#000000' });

    this.input.on('pointerup', () => {

      this.scene.stop('EndScene');
      this.scene.start('Game');
    });
  }
}