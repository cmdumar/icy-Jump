import isNameValid from '../src/helpers/validateName';

describe('Test the given name', () => {
  it('should return true when proper name provided', () => {
    expect(isNameValid('umar')).toBe(true);
  });

  it('should return false when no name is provided', () => {
    expect(isNameValid('')).toBe(false);
  });
});