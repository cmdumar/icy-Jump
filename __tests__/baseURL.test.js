import { baseURL } from '../src/helpers/helpers';

describe('Test the baseURL function', () => {
  it('should be defined', () => {
    expect(baseURL).toBeDefined();
  });
  it('should return an object', () => {
    expect(baseURL()).toBeInstanceOf(Object);
  });
});