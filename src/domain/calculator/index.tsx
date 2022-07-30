/* eslint-disable import/no-cycle */
import { FC, memo, useState } from 'react';

import CalculateButton from './components/CalculateButton';
import CalculateResult from './components/CalculateResult';
import {
  isAllClearButton,
  isDeleteButton,
  isDotButton,
  isEqualButton,
  isNumberButton,
  isOperatorButton,
} from './utils/buttonJudge';
import {
  handleNumberButton,
  handleOperatorButton,
  handleDotButton,
  handleDeleteButton,
  handleAllClearButton,
  handleEqualButton,
} from './utils/handleChangeState';

export interface CalcState {
  current: string;
  operand: number;
  operator: string | null;
  isNextClear: boolean;
}

export const operate = (state: CalcState): number => {
  const current = parseFloat(state.current);

  if (state.operator === '+') {
    return state.operand + current;
  }

  if (state.operator === '-') {
    return state.operand - current;
  }

  return current;
};

const Calculator: FC = memo(() => {
  const [calcState, setCalcState] = useState<CalcState>({
    current: '0',
    operand: 0,
    operator: null,
    isNextClear: false,
  });

  const calculate = (button: string, state: CalcState): CalcState => {
    // 数値かどうか
    if (isNumberButton(button)) {
      return handleNumberButton(button, state);
    }

    // オペレーターかどうか
    if (isOperatorButton(button)) {
      return handleOperatorButton(button, state);
    }

    // ドットかどうか
    if (isDotButton(button)) {
      return handleDotButton(state);
    }

    // 削除かどうか
    if (isDeleteButton(button)) {
      return handleDeleteButton(state);
    }

    // ACかどうか
    if (isAllClearButton(button)) {
      return handleAllClearButton();
    }

    // =かどうか
    if (isEqualButton(button)) {
      return handleEqualButton(state);
    }

    return state;
  };
  const handleCode = (code: string) => {
    const nextState = calculate(code, calcState);
    setCalcState(nextState);
  };

  return (
    <>
      <CalculateResult value={calcState.current} />
      <CalculateButton handleCode={handleCode} />
    </>
  );
});

export default Calculator;
