export interface CalcState {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
}

export type Operator = '+' | '-';

export type NumberCode = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

export type ButtonCode = NumberCode | Operator | '.' | 'D' | 'AC' | '=';
