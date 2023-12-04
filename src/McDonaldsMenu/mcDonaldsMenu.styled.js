import styled from "styled-components";
import { ReactSVG } from 'react-svg';
import northerneast from '../images/nouthern-east.svg';
import facebook from '../images/facebook.svg';
import instagram from '../images/instagram.svg';
import cross from '../images/cross.svg';


export const WrapperBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(23, 61, 51, 0.25);
  backdrop-filter: blur(2px);
`;

export const Wrapper = styled.div`
  width: 320px;
  height: auto;
  padding: 36px 0;
  backdrop-filter: none;
    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: end;
      width: 708px;
      padding-top: 42px;
    }
    @media screen and (min-width: 1280px) {
      width: 1240px;
      padding-top: 30px;
    }
`;

export const McDonaldsMenuWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: start;
  width: 320px;
  height: 100%;
  border-radius: 25px;
  background: rgba(23, 61, 51, 0.75);
  backdrop-filter: blur(12.5px);
  padding: 24px;
  animation: 0.5s ease;
  overflow: auto;
    @media screen and (min-width: 768px) {
      padding: 24px 32px;
    }
`;

export const McDonaldsMenuCloseWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 4px;
  width: 60px;
  height: 20px;
  margin-bottom: 8px;
    &:hover {
      color: var(--main-green);
      svg {
        stroke: var(--main-green);
      }
    }
  }
`;

export const CloseButton = styled.button`
  flex-shrink: 0;
  display: flex;
  width: 20px;
  height: 20px;
  background: transparent;
  border: none;
`;

export const CloseButtonParagraph = styled.p`
  margin-left: 10px;
  color: var(--white);
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const Close = styled(ReactSVG).attrs({
  src: cross,
})`
  width: 32px;
  height: 32px;
  stroke: var(--white);
`;

export const McDonaldsMenuLine = styled.div`
    flex-shrink: 0;
    width: 100%;
    height: 1px;
    background: var(--main-green);
`;

export const BuffetContainer = styled.nav`
    display: flex;
    margin-top: 16px;
`;

export const BuffetList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  cursor: pointer;
  :hover {
    color: var(--main-green);
    opacity: 1;
    svg {
      stroke: var(--main-green);
    }
  }
`;

export const BuffetLink = styled.a`
    display: flex;
    gap: 8px;
    width: 100%;
    font-family: Fira Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.96px;
    transition: 0.4s ease;
    color: #fff;
    opacity: 0.25;
        &:hover {
            transition: 0.4s ease;
            color: var(--main-green);
        }
`;

export const Northerneast = styled(ReactSVG).attrs({
  src: northerneast,
})`
  padding-left: 10px;
  width: 32px;
  height: 32px;
`;

export const Facebook = styled(ReactSVG).attrs({
  src: facebook,
})`
  width: 24px;
  height: 24px;
  cursor: pointer;
  stroke: var(--white);
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
  stroke: var(--white);
    &:hover{
      stroke: var(--main-green)
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    margin-top: auto;
    gap: 8px;
`;

export const SocialLink = styled.a`
    color: var(--white);
    transition: 0.4s ease;
    &:hover {
        color: var(--main-green);
        transition: 0.4s ease;
    }
`;