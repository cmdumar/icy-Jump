import { centerCoord } from '../src/helpers/helpers';

describe('Test the centerCoord function', () => {
  it('should be defined', () => {
    expect(centerCoord).toBeDefined();
  });
  it('should return an object', () => {
    const scene = {
      cameras: {
        main: {
          worldView: {
            x: 10,
            y: 20,
          },
          width: 30,
          height: 33,
        },
      },
    };
    expect(centerCoord(scene)).toBeInstanceOf(Object);
  });
});