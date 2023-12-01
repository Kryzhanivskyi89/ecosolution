// import { Linee } from 'utils/line.styled';
import {
    Wrapper,
    HeroInfo,
    HeroTitle,
    TitleText,
    Paragraph,
    HeroText,
    ButtonLearnMore,
    TextLearnMore,
    ArrowLearnMore,
    HeroLine,
    HeroContacts,
    HeroAdres,
    HeroMail,
    HeroLegasy,
    HeroImage,
} from './hero.styled';

const Main = () => {
  return (
    <>
      <Wrapper>
        <HeroInfo>
          <HeroTitle>
            <TitleText>renewable energy for any task</TitleText>
          </HeroTitle>
          <Paragraph>
            <HeroText>
              Development and implementation of renewable non-polluting energy
              sources, generating power generation using energy wind, sun,
              water, biomass
            </HeroText>
            <ButtonLearnMore>
              <TextLearnMore>Learn more</TextLearnMore>
              <ArrowLearnMore />
            </ButtonLearnMore>
          </Paragraph>
        </HeroInfo>
        <HeroLine />
        <HeroContacts>
          <HeroAdres>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </HeroAdres>
          <HeroMail>office@ecosolution.com</HeroMail>
          <HeroLegasy>ecosolution © 2023</HeroLegasy>
        </HeroContacts>
        <HeroImage />
      </Wrapper>
    </>
  );
};

export default Main;