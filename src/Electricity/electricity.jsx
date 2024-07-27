import { useEffect, useState } from 'react';

import {
    ElectricityWrapper,
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
      <ElectricityWrapper>
        <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
        <ElectricityLine />
        <ElectricityTimer>
          {timer}
          <ElectricityTimerText>kWh</ElectricityTimerText>
        </ElectricityTimer>
      </ElectricityWrapper>
    </>
  );
};

export default Electricity;