const baseURL = () => {
  const data = {
    apikey: 'aSvX9oE6ttiscNQe1eCC',
    base: 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/',
  };

  return data;
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

const highScores = async ({ result }) => {
  const arr = await result;
  const sorted = arr.sort((a, b) => b.score - a.score).slice(0, 9);
  return sorted;
};

export {
  centerCoord, gameState, highScores, baseURL,
};