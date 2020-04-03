import { DisplayNameFunction } from 'displayNameFunction';

export interface Identity extends DisplayNameFunction {
  <T>(a: T): T;
}

export const I: Identity = (a) => a;
I.displayName = 'Identity';
