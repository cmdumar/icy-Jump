import { gameState } from '../src/helpers/helpers';

describe('Test the gameState function', () => {
  it('should be defined', () => {
    expect(gameState).toBeDefined();
  });
  it('should return an object', () => {
    expect(gameState()).toBeInstanceOf(Object);
  });
});