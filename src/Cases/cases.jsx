import {Slider} from './Slider/slider'
import {
  CasesWrapper,
  CasesHeader,
  CasesHeaderTitle,
  CasesHeaderLineVertical,
  CasesHeaderWrapper,
  CasesButtonsWrapper,
  CasesHeaderNumberTotal,
  Right,
  CasesHeaderButtonLeft,
  CasesHeaderButtonRight,
  
} from './cases.styled';

const Cases = () => {

  return (
    <>
      <CasesWrapper id="cases">
        <CasesHeader>
            <CasesHeaderTitle>Successful cases of our company</CasesHeaderTitle>
            <CasesHeaderLineVertical />
                <CasesHeaderWrapper>
                  
                        <CasesHeaderNumberTotal className={` pagination`}>
                        </CasesHeaderNumberTotal>
                        
                  <CasesButtonsWrapper>
                      <CasesHeaderButtonRight className={`prev`}>
                        <Right rotateright="true" />
                      </CasesHeaderButtonRight>
                      <CasesHeaderButtonLeft className={`next`}>
                        <Right />
                      </CasesHeaderButtonLeft>
                  </CasesButtonsWrapper>
                  
                </CasesHeaderWrapper>
        </CasesHeader>
       
        <Slider />
        
      </CasesWrapper>
    </>
  );
};

export default Cases;