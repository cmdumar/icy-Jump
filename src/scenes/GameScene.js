import Phaser from 'phaser';
import stripe from '../assets/stripe.png';
import platform from '../assets/platform.png';
import codey from '../assets/codey.png';

let game;
let platforms;// a group of platform objects the player will jump on
let player; // the actual player controlled sprite
let cursors;
let platformCount = 0;
let emitter;
let particles;
let gameOptions = {
  width: 480,
  height: 640,
  gravity: 800,
};

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
    particles = this.add.particles('stripe');

    const graphics = this.add.graphics();

    graphics.fillGradientStyle(0xdadaff, 0x6cfafa, 0xfccaff, 0xdadaff, 1);

    graphics.fillRect(0, 0, gameOptions.width, gameOptions.height);

    this.anims.create({
      key: 'jump',
      frames: this.anims.generateFrameNames('codey', {
        start: 2,
        end: 3,
      }),
      frameRate: 10,
      repeat: -1,
    });

    this.physics.world.setBounds(0, 0, 480, 640);

    platforms = this.physics.add.group({
      allowGravity: false,
      immovable: true,
    });

    for (let i = 0; i < 8; i += 1) {
      const randomX = Math.floor(Math.random() * 400) + 24;
      platforms.create(randomX, i * 80, 'platform').setScale(0.5);
    }

    player = this.physics.add.sprite(100, 450, 'codey').setScale(0.5);
    player.setBounce(1);
    player.setCollideWorldBounds(true);
    player.body.checkCollision.up = false;
    player.body.checkCollision.left = false;
    player.body.checkCollision.right = false;

    this.physics.add.collider(player, platforms);

    cursors = this.input.keyboard.createCursorKeys();
  }

  update() {
    if (cursors.left.isDown) {
      player.setVelocityX(-240);
      player.flipX = true;
    } else if (cursors.right.isDown) {
      player.setVelocityX(240);
      player.flipX = false;
    } else {
      player.setVelocityX(0);
    }

    if (player.body.touching.down) {
      player.setVelocityY(-500);

      this.cameras.main.shake(100, 0.004);
    }
  }
}