import { DisplayNameFunction } from 'displayNameFunction';

export const T: DisplayNameFunction = <T_>(thn: T_) => (_els: unknown): T_ =>
  thn;
T.displayName = 'True';
