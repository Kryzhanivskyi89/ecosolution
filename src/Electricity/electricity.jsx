import { useEffect, useState } from 'react';

import {
    Wrapper,
    ElectricityTitle,
    ElectricityLine,
    ElectricityTimer,
    ElectricityTimerText,
} from './electricity.style';

const Electricity = () => {
  const [timer, setTimer] = useState(1134147814);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTime => prevTime + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
 
  return (
    <>
      <Wrapper>
        <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
        <ElectricityLine />
        <ElectricityTimer>
          {timer}
          <ElectricityTimerText>kWh</ElectricityTimerText>
        </ElectricityTimer>
      </Wrapper>
    </>
  );
};

export default Electricity;