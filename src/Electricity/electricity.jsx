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

  const lastThreeDigitsString = (timer % 1000)
    .toString()
    .padStart(3, '0');
 
  return (
    <>
      <ElectricityWrapper>
        <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
        <ElectricityLine />
        <ElectricityTimer>
          1.134.147.{lastThreeDigitsString}
          <ElectricityTimerText>kWh</ElectricityTimerText>
        </ElectricityTimer>
      </ElectricityWrapper>
    </>
  );
};

export default Electricity;