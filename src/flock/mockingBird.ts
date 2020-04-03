import { DisplayNameFunction } from 'displayNameFunction';

export interface MockingBird extends DisplayNameFunction {
  <T extends DisplayNameFunction>(a: T): T;
}

export const M: MockingBird = (a) => a(a);
M.displayName = 'Mocking Bird';
