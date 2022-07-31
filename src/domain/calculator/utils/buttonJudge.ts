import { NumberCode, Operator } from '../types';

export const isNumberButton = (button: string): button is NumberCode =>
  button === '0' ||
  button === '1' ||
  button === '2' ||
  button === '3' ||
  button === '4' ||
  button === '5' ||
  button === '6' ||
  button === '7' ||
  button === '8' ||
  button === '9';

export const isOperatorButton = (button: string): button is Operator => button === '+' || button === '-';

export const isDotButton = (button: string) => button === '.';

export const isDeleteButton = (button: string) => button === 'D';

export const isAllClearButton = (button: string) => button === 'AC';

export const isEqualButton = (button: string) => button === '=';
