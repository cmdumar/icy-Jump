import { highScores } from './helpers';

const leaderBoard = async (base, apikey) => {
  let getScores;
  try {
    getScores = await fetch(`${base + apikey}/scores/`)
    getScores = await getScores.json();
    getScores = await highScores(getScores);
  } catch (err) {
    getScores = err;
  }
  return getScores;
};

const saveScore = async (base, apikey, score, { name }) => {
  const response = await fetch(`${base + apikey}/scores/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: name,
      score,
    }),
  })
    .then(res => res.json())
    .then(r => r.result)
    .catch(err => err.response.data);

  return response;
};

export default leaderBoard;
export { saveScore };