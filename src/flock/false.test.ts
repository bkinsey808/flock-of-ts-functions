import { F } from './false';

describe('False', () => {
  it('F("a")("b") === "a', () => {
    expect(F('a')('b')).toEqual('b');
  });
});
