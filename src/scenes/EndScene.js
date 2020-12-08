import Phaser from 'phaser';
import { score } from './GameScene';
import { player } from './PreEndScene';

const apikey = 'aSvX9oE6ttiscNQe1eCC';
const base = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

const config = {
  width: 480,
  height: 640,
};

export default class EndScene extends Phaser.Scene {
  constructor() {
    super('EndScene');
  }

  create() {
    (async () => {
      if (score) {
        const rawResponse = await fetch(`${base + apikey}/scores/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user: player.name,
            score,
          }),
        });
        await rawResponse.json();
      }

      const getScores = await fetch(`${base + apikey}/scores/`);

      const scores = await getScores.json();

      let sorted = await Promise.all(await scores.result);
      sorted = sorted.sort((a, b) => b.score - a.score);

      this.add.text(config.width / 4, 120, 'Leaderboard', {
        fontSize: '24px',
        fill: '#f1f1f1',
      });

      sorted.slice(0, 10).forEach((i, idx) => {
        this.add.text((config.width / 4), (config.height / 2) - 120 + (idx * 30),
          `${idx + 1}. ${i.user}: ${i.score}`, { fontSize: '18px', fill: '#fff' });
      });
    })();

    this.add.text((config.width / 4), 30,
      `Your Score: ${score}`, { fontSize: '18px', fill: '#fff' });
    this.add.text((config.width / 4), 50,
      'Game Over', { fontSize: '15px', fill: '#fff' });
    this.add.text((config.width / 4), 70,
      'Click to Restart', { fontSize: '15px', fill: '#fff' });

    this.input.on('pointerup', () => {
      this.scene.stop('EndScene');
      this.scene.start('Game');
    });
  }
}