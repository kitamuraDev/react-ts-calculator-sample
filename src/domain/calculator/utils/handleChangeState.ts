/* eslint-disable import/no-cycle */
import { CalcState, operate } from '..';

export const handleNumberButton = (button: string, state: CalcState): CalcState => {
  if (state.isNextClear) {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    };
  }

  if (state.current === '0') {
    return {
      current: button,
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    };
  }

  return {
    current: state.current + button,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
};

export const handleOperatorButton = (button: string, state: CalcState): CalcState => {
  if (state.operator === null) {
    return {
      current: state.current,
      operand: parseFloat(state.current),
      operator: button,
      isNextClear: true,
    };
  }

  const nextValue = operate(state);

  return {
    current: `${nextValue}`,
    operand: nextValue,
    operator: button,
    isNextClear: true,
  };
};

export const handleDotButton = (state: CalcState): CalcState => {
  if (state.current.indexOf('.') !== -1) {
    return state;
  }

  return {
    current: `${state.current}.`,
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
};

export const handleDeleteButton = (state: CalcState): CalcState => {
  if (state.current.length === 1) {
    return {
      current: '0',
      operand: state.operand,
      operator: state.operator,
      isNextClear: false,
    };
  }

  return {
    current: state.current.substring(0, state.current.length - 1),
    operand: state.operand,
    operator: state.operator,
    isNextClear: false,
  };
};

export const handleAllClearButton = (): CalcState => ({
  current: '0',
  operand: 0,
  operator: null,
  isNextClear: false,
});

export const handleEqualButton = (state: CalcState): CalcState => {
  if (state.operator === null) {
    return state;
  }

  const nextValue = operate(state);

  return {
    current: `${nextValue}`,
    operand: 0,
    operator: null,
    isNextClear: true,
  };
};
