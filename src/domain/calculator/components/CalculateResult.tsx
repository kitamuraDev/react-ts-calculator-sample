import { FC, memo } from 'react';

const CalculateResult: FC<{ value: string }> = memo((props) => <div>{props.value}</div>);

export default CalculateResult;
