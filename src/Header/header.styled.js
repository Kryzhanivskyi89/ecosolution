import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import buttonIcon from '../images/menu.svg';
import down from '../images/touch_down.svg';

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  width: 100vw;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  height: 40px;
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
  background-color: transparent;
    @media screen and (min-width: 768px) {
      height: 68px;
      width: 708px;
    }
    @media screen and (min-width: 1280px) {
      padding: 0;
      width: 1240px;
    }
`;

export const McDonaldsMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  background: var(--second-light-green);
  transition: background 0.3s ease;
    &:hover,
    &:focus {
      background-color: var(--main-green);
      transition-duration: 250ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    }
`;

export const ButtonIcon = styled.img`
  width: 16px;
  height: 16px;
  content: url(${buttonIcon});
`;

export const TouchText = styled.p`
  color: var(--main-dark-green);
  transition: color 0.3s ease;
  font-family: Fira Sans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.64px;
`;

export const TouchDown = styled(ReactSVG).attrs({
  src: down,
})`
  width: 14px;
  height: 14px;

  svg {
    circle {
      fill: var(--main-dark-green);
      transition: fill 0.3s ease;
    }

    path {
      stroke: transparent;
      transition: stroke 0.3s ease;
    }
  }
`;

export const ButtonTouch = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  margin-left: 12px;
  height: 40px;
  background: var(--main-green);
  border: none;
  border-radius: 20px;
  cursor: pointer;
    &:hover,
    &:focus {
      background: var(--main-dark-green);
      transition-duration: 250ms;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      ${TouchText} {
        color: var(--main-green);
      }
      ${TouchDown} {
        circle {
          fill: var(--main-green);
        }
        path {
          stroke: var(--main-dark-green);
        }
      }
    };

    @media screen and (max-width: 768px) {
      display: none;
    }
    @media screen and (min-width: 768px) {
      display: flex;
    }
`;

export const McDonaldsMenuHidden = styled.div`
  position: fixed;
  z-index: 99;
  width: 100%;
  overflow: hidden;
`;
