
import {
  Wrapper,
  CasesHeader,
  CasesHeaderTitle,
  CasesHeaderLineVertical,
  CasesHeaderButtonsWrapper,
  CasesHeaderNumber,
  CasesHeaderNumberTotal,
  Right,
  CasesHeaderButtonLeft,
  CasesHeaderButtonRight,
  
  SliderItems,
  SliderItemsImage,
  SliderItemsInfo,
  SliderItemsDescription,
  SliderItemsDescriptionTitle,
  SliderItemsDescriptionButton,
  CasesHeaderLineHorizont,
  SliderItemsInfoTime,
  SliderItemsInfoTimeText,
  SliderItemsInfoTimeDate,
} from './cases.styled';

const Cases = () => {

    
    
  return (
    <>
      <Wrapper id="cases">
        <CasesHeader>
          <CasesHeaderTitle>Successful cases of our company</CasesHeaderTitle>
          <CasesHeaderLineVertical />
          <CasesHeaderButtonsWrapper>
            <CasesHeaderNumber>
              
              <CasesHeaderNumberTotal>/05</CasesHeaderNumberTotal>
            </CasesHeaderNumber>
            <CasesHeaderButtonRight >
              <Right rotateright="true" />
            </CasesHeaderButtonRight>
            <CasesHeaderButtonLeft >
              <Right />
            </CasesHeaderButtonLeft>
          </CasesHeaderButtonsWrapper>
        </CasesHeader>
     

        <SliderItems>
        <SliderItemsImage>
          
        </SliderItemsImage>
        <SliderItemsInfo>
          <SliderItemsDescription>
            <SliderItemsDescriptionTitle>title</SliderItemsDescriptionTitle>
            <SliderItemsDescriptionButton>
              <Right rotateupleft="true" scale={0.77} />
            </SliderItemsDescriptionButton>
          </SliderItemsDescription>
          <CasesHeaderLineHorizont />
          <SliderItemsInfoTime>
            <SliderItemsInfoTimeText>інфо</SliderItemsInfoTimeText>
            <SliderItemsInfoTimeDate>дата</SliderItemsInfoTimeDate>
          </SliderItemsInfoTime>
        </SliderItemsInfo>
      </SliderItems>

      </Wrapper>
    </>
  );
};

export default Cases;