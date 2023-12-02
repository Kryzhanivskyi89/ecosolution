
import {
    Wrapper,
    ElectricityTitle,
    ElectricityLine,
    ElectricityTimer,
    ElectricityTimerText,
} from './electricity.style';

const Electricity = () => {
    
  return (
    <>
      <Wrapper>
        <ElectricityTitle>Electricity we produced for all time</ElectricityTitle>
        <ElectricityLine />
        <ElectricityTimer>
          <p>1134147814</p>
          <ElectricityTimerText>kWh</ElectricityTimerText>
        </ElectricityTimer>
      </Wrapper>
    </>
  );
};

export default Electricity;