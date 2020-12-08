import Phaser from 'phaser';
import { score } from './GameScene';
import { player } from './PreEndScene';

const apikey = 'aSvX9oE6ttiscNQe1eCC';
const base = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

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

        const res = await rawResponse.json();

        console.log('res', res);
      }

      const getScores = await fetch(`${base + apikey}/scores/`);

      const scores = await getScores.json();
      console.log(scores);

      scores.result.forEach((i, idx) => {
        this.add.text(160, (idx * 2) + 100,
          `${i.user}: ${i.score}`, { fontSize: '18px', fill: '#fff' });
      });
    })();
    this.add.text(160, 210,
      `${player.name}`, { fontSize: '18px', fill: '#fff' });
    this.add.text(140, 230,
      `Your Score: ${score}`, { fontSize: '18px', fill: '#fff' });
    this.add.text(180, 250,
      'Game Over', { fontSize: '15px', fill: '#fff' });
    this.add.text(152, 270,
      'Click to Restart', { fontSize: '15px', fill: '#fff' });

    this.input.on('pointerup', () => {
      this.scene.stop('EndScene');
      this.scene.start('Game');
    });
  }
}