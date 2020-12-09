import { highScores } from './helpers';

const leaderBoard = async (base, apikey) => {
  let getScores;
  try {
    getScores = await fetch(`${base + apikey}/scores/`);
    getScores = await getScores.json();
    getScores = await highScores(getScores);
  } catch (err) {
    getScores = err;
  }
  return getScores;
};

const saveScore = async (base, apikey, score, { name }) => {
  let response;
  try {
    response = await fetch(`${base + apikey}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: name,
        score,
      }),
    });

    response = await response.json();
    response = await response.result;
  } catch (err) {
    response = err.response.data;
  }

  return response;
};

export default leaderBoard;
export { saveScore };