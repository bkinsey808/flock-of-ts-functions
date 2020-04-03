import { M } from './mockingBird';
import { I } from './identity';

describe('Mocking Bird', () => {
  it('M(I) === I', () => {
    expect(M(I).displayName).toEqual(I.displayName);
  });
  it('M(M((I)) === I', () => {
    expect(M(M(I)).displayName).toEqual(I.displayName);
  });
});
