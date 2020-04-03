import { I } from './identity';

describe('Identity', () => {
  it('I(string) === string', () => {
    const a = 'my string';
    expect(I(a)).toEqual(a);
  });
  it('I(array) === array', () => {
    const a = [1, 2, 3];
    expect(I(a)).toEqual(a);
  });
  it('I(I) === I', () => {
    expect(I(I)).toEqual(I);
  });
});
