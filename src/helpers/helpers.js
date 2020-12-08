const leaderBoard = async (score, player) => {
  const apikey = 'aSvX9oE6ttiscNQe1eCC';
  const base = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';

  if (score > 10) {
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

  return sorted;
};

const centerCoord = (scene) => {
  const data = {
    screenCenterX: scene.cameras.main.worldView.x + scene.cameras.main.width / 2,
    screenCenterY: scene.cameras.main.worldView.y + scene.cameras.main.height / 2,
  };

  return data;
};

const gameState = () => {
  const data = {
    width: 480,
    height: 640,
    score: 0,
  };

  return data;
};

export {
  leaderBoard, centerCoord, gameState,
};