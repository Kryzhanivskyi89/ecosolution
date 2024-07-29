import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import arrowLearnMore from '../images/learn-more.svg';
import hero_mobile from '../images/hero_mobile.png';
import hero_tablet from '../images/hero_tablet.png';
import hero_desktop from '../images/hero_desktop.png';

export const HeroWrapper = styled.section`
  margin: 0;
  margin-top: 146px;
  @media screen and (min-width: 768px) {
    margin-top: 164px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 200px;
  }
`;

export const HeroInfo = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  }
`;

export const HeroTitle = styled.div`
  width: 320px;
  margin-bottom: 24px;
    @media screen and (min-width: 768px) {
        width: 301px;
        margin-bottom: 0;
    }
    @media screen and (min-width: 1280px) {
        width: 485px;
    }
`;

export const TitleText = styled.h1`
  font-family: Oswald;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  color: var(--main-dark-green);
  text-transform: uppercase;
    @media screen and (min-width: 768px) {
        width: 301px;
        font-size: 48px;
        line-height: 48px;
    }
    @media screen and (min-width: 1280px) {
        width: 485px;
        font-size: 64px;
        line-height: 64px;
    }
`;

export const Paragraph = styled.div`
  display: flex;
  gap: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 320px;
  margin-bottom: 24px;
    @media screen and (min-width: 768px) {
        justify-content: space-between;
        align-items: start;
        max-width: 342px;
        margin-bottom: 0;
    }
    @media screen and (min-width: 1280px) {
        max-width: 363px;
        margin-left: 300px;
        margin-right: auto;
    }
`;
export const HeroText = styled.p`
    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    color: var(--main-dark-green);
    text-align: left;
`;

export const TextLearnMore = styled.p`
    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: -0.64px;
    color: var(--main-dark-green);
`;


export const ButtonLearnMore = styled.button`
    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    cursor: pointer;
    height: 39px;
    padding: 4px 4px 4px 16px;
    border-radius: 500px;
    border: 1px solid var(--main-green);
    background-color: var(--main-bg-clr);
      &:hover,
      &:focus {
        background: var(--main-dark-green);
        ${TextLearnMore} {
          color: var(--main-green);
        };
        transition-duration: 250ms;
				transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ArrowLearnMore = styled(ReactSVG).attrs({
  src: arrowLearnMore,
})`
  svg {
    circle {
      fill: var(--main-green);
      transition: fill 0.3s ease;
    }
    path {
      stroke: var(--main-dark-green);
      transition: stroke 0.3s ease;
    }
  }
`;

export const HeroLine = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: 1px;
    background: var(--main-green);
`;

export const HeroContacts = styled.div`
    display: flex;
    gap: 8px;
    flex-direction: column;
    align-items: center;
    margin-top: 24px;
        @media screen and (min-width: 768px) {
            flex-direction: row;
            gap: 0;
            justify-content: space-between;
            margin-top: 16px;
        }
        @media screen and (min-width: 1280px) {
            margin-top: 12px;
        }
`;
export const HeroAdres = styled.p`
    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    color: var(--main-dark-green);
`;
export const HeroMail = styled.a`
  text-decoration: none;
  cursor: pointer;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: var(--main-dark-green);
  letter-spacing: -0.64px;
    &:hover,
    &:focus {
    color: var(--main-green);
      transition-duration: 250ms;
			transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
    @media screen and (min-width: 768px) {
        margin-left: auto;
    }
`;

export const HeroLegasy = styled.p`
  display: none;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  color: var(--main-dark-green);
    @media screen and (min-width: 768px) {
        display: flex;
        margin-left: 50px;
        margin-right: 0;
    }
    @media screen and (min-width: 1280px) {
        margin-left: 167px;
    }
`;

export const HeroImage = styled.img`
    background-position: center;
    background-size: cover;
    flex-shrink: 0;
    width: 320px;
    height: 200px;
    margin: 36px 0;
    background: url(${hero_mobile}), lightgray 50%;
        @media screen and (min-width: 768px) {
            margin: 40px 0 100px;
            background: url(${hero_tablet}), lightgray 50%;
            height: 350px;
            width: 709px;
        }
        @media screen and (min-width: 1280px) {
            margin: 36px 0 120px;
            background: url(${hero_desktop}), lightgray 50%;
            height: 524px;
            width: 1240px;
            flex-shrink: 0;
  }
`;