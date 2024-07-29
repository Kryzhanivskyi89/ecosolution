
import {
    HeroWrapper,
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

  const scrollCases = () => {
    const sectionId = 'cases';
    const section = document.getElementById(sectionId);

    if (section) {
      const headerHeight = 70;
      const sectionRect = section.getBoundingClientRect();

      window.scrollTo({
        top: sectionRect.top + window.scrollY - headerHeight,
        left: 0,
        duration: 500,
        behavior: 'smooth',
      });
    }
  };

const Main = () => {
  return (
    <HeroWrapper id='hero'>
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
          <ButtonLearnMore
            type='button'
            onClick={scrollCases}>
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
        <HeroMail
          href="office@ecosolution.com"
          target="_blank"
          rel="noopener noreferrer">
            office@ecosolution.com
        </HeroMail>
        <HeroLegasy>ecosolution © 2023</HeroLegasy>
      </HeroContacts>
      
      <HeroImage />
    </HeroWrapper>
  
  );
};

export default Main;