import { ReactSVG } from 'react-svg';
import styled from 'styled-components';
import up from '../images/up.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';

export const FooterLine = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: 1px;
    background: var(--main-green);
`;

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 320px;
  margin: 24px 0 24px;
    @media screen and (min-width: 768px) {
      gap: 16px;
      margin: 40px 0 40px;
      width: 708px;
    }
    @media screen and (min-width: 1280px) {
      width: 1240px;
    }
`;

export const FooterSocialWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
    @media screen and (min-width: 768px) {
      display: none;
    }
`;

export const FooterLogoSocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
    ${FooterSocialWrapper} {
      display: none;
    }
    @media screen and (min-width: 768px) {
      ${FooterSocialWrapper} {
        display: flex;
        margin-left: auto;
        margin-right: 254px;
      }
    }
    @media screen and (min-width: 1280px) {
      ${FooterSocialWrapper} {
        margin-right: 371px;
      }
    }
`;

export const Facebook = styled(ReactSVG).attrs({
  src: facebook,
})`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: var(--main-dark-green);
    &:hover{
      stroke: var(--main-green);
    }
`;

export const Instagram = styled(ReactSVG).attrs({
  src: instagram,
})`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: var(--main-dark-green);
    &:hover{
      stroke: var(--main-green)
    }
`;

export const Up = styled(ReactSVG).attrs({
  src: up,
})`
  stroke: var(--main-dark-green);
  fill: var(--main-green);
`;

export const FooterButton = styled.button`
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 100px;
  background: var(--main-green);
    &:hover {
      background: var(--main-dark-green);
      ${Up} {
        stroke: var(--main-green);
        fill: var(--main-dark-green);
      }
    }
`;

export const FooterContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
    @media screen and (min-width: 768px) {
      flex-direction: row;
      gap: 0;
      :nth-child(2) {
        margin-right: 50px;
        margin-left: auto;
      }
    }
  @media screen and (min-width: 1280px) {
    :nth-child(2) {
      margin-right: 167px;
    }
  }
`;

export const FooterContacts = styled.p`
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
  color: var(--main-dark-green);
`;