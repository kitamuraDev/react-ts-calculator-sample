import { FC, memo } from 'react';

type Props = {
  handleCode: (code: string) => void;
};

const CalculateButton: FC<Props> = memo((props) => (
  <>
    <div>
      <button type='button' onClick={() => props.handleCode('7')}>
        7
      </button>
      <button type='button' onClick={() => props.handleCode('8')}>
        8
      </button>
      <button type='button' onClick={() => props.handleCode('9')}>
        9
      </button>
      <button type='button' onClick={() => props.handleCode('AC')}>
        AC
      </button>
    </div>
    <div>
      <button type='button' onClick={() => props.handleCode('4')}>
        4
      </button>
      <button type='button' onClick={() => props.handleCode('5')}>
        5
      </button>
      <button type='button' onClick={() => props.handleCode('6')}>
        6
      </button>
      <button type='button' onClick={() => props.handleCode('-')}>
        -
      </button>
    </div>
    <div>
      <button type='button' onClick={() => props.handleCode('1')}>
        1
      </button>
      <button type='button' onClick={() => props.handleCode('2')}>
        2
      </button>
      <button type='button' onClick={() => props.handleCode('3')}>
        3
      </button>
      <button type='button' onClick={() => props.handleCode('+')}>
        +
      </button>
    </div>
    <div>
      <button type='button' onClick={() => props.handleCode('0')}>
        0
      </button>
      <button type='button' onClick={() => props.handleCode('.')}>
        .
      </button>
      <button type='button' onClick={() => props.handleCode('D')}>
        D
      </button>
      <button type='button' onClick={() => props.handleCode('=')}>
        =
      </button>
    </div>
  </>
));

export default CalculateButton;
