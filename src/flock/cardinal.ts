import { DisplayNameFunction } from 'displayNameFunction';

export interface Cardinal extends DisplayNameFunction {
  <F extends Function, A, B>(fn: F): (a: A) => (b: B) => F;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const C: Cardinal = (fn) => (a) => (b) => fn(b)(a);
C.displayName = 'Cardinal';
