import { FC, memo } from 'react';

const CalculateResult: FC<{ value: string }> = memo((props) => (
  <div className='calculate_result_display'>{props.value}</div>
));

export default CalculateResult;
