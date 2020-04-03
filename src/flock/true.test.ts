import { T } from './true';

describe('True', () => {
  it('T("a")("b") === "a', () => {
    expect(T('a')('b')).toEqual('a');
  });
});
