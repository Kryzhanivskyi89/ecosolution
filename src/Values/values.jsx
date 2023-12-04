// import { ValuesLine } from 'utils/line.styled';
import {
  ValueImageMen,
  ValueImageMan,
  ValuesGridItem,
  ValuesGridText,
  ValuesGridTitle,
  ValuesGridContainer,
  ValuesLine,
  Innovation,
  Openness,
  Quality,
  Rectangle,
  Responsibility,
  MainValues,
  ValuesGrid,
  ValuesText,
  MainValueTitle,
  Wrapper,
} from './values.styled';

const Values = () => {
  return (
    <>
      <Wrapper id='values'>
        <MainValues>
          <MainValueTitle>Main values of our company</MainValueTitle>
          <Rectangle />
          <ValuesText>
            EcoSolution envisions a world where sustainable energy solutions
            power a brighter and cleaner future for all. We aspire to be at the
            forefront of the global shift towards renewable energy, leading the
            way in innovative technologies that harness the power of nature to
            meet the world's energy needs.
          </ValuesText>
        </MainValues>
        <ValuesGrid>
          <ValuesGridItem>
            <ValuesGridContainer>
              <Openness />
              <ValuesGridTitle>Openness</ValuesGridTitle>
            </ValuesGridContainer>
            <ValuesLine />
            <ValuesGridText>to the world, people, new ideas and projects</ValuesGridText>
          </ValuesGridItem>
          <ValuesGridItem>
            <ValuesGridContainer>
              <Responsibility />
              <ValuesGridTitle>Responsibility</ValuesGridTitle>
            </ValuesGridContainer>
            <ValuesLine />
            <ValuesGridText>
              we are aware that the results of our work have an impact on our
              lives and the lives of future generations
            </ValuesGridText>
          </ValuesGridItem>
          <ValueImageMen />
          <ValueImageMan />
          <ValuesGridItem>
            <ValuesGridContainer>
              <Innovation />
              <ValuesGridTitle>Innovation</ValuesGridTitle>
            </ValuesGridContainer>
            <ValuesLine />
            <ValuesGridText>
              we use the latest technology to implement non-standard solutions
            </ValuesGridText>
          </ValuesGridItem>
          <ValuesGridItem>
            <ValuesGridContainer>
              <Quality />
              <ValuesGridTitle>Quality</ValuesGridTitle>
            </ValuesGridContainer>
            <ValuesLine />
            <ValuesGridText>
              we do not strive to be the first among others, but we want to be
              the best in our business
            </ValuesGridText>
          </ValuesGridItem>
        </ValuesGrid>
      </Wrapper>
    </>
  );
};

export default Values;