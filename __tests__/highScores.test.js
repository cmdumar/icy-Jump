import { highScores } from '../src/helpers/helpers';

describe('Test the highScores function', () => {
  const arr = {
    result: [
      { score: 10 },
      { score: 16 },
      { score: 12 },
      { score: 14 },
      { score: 1 },
      { score: 12 },
    ],
  };
  it('should be defined', () => {
    expect(highScores).toBeDefined();
  });
  it('should return an object', () => {
    expect(highScores(arr)).toBeInstanceOf(Promise);
  });
  it('should arrange scores in desc order', async () => {
    const res = await highScores(arr);
    expect(res).toEqual([
      { score: 16 },
      { score: 14 },
      { score: 12 },
      { score: 12 },
      { score: 10 },
      { score: 1 },
    ]);
  });
});