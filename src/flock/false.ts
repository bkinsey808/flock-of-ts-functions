import { DisplayNameFunction } from 'displayNameFunction';

export const F: DisplayNameFunction = (_thn: unknown) => <T_>(els: T_): T_ =>
  els;
F.displayName = 'False';
