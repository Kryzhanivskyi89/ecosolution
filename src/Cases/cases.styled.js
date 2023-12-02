import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import right from '../images/right.svg';

export const Wrapper = styled.div`
    width: 320px;
      @media screen and (min-width: 768px) {
        width: 709px;
      }
      @media screen and (min-width: 1280px) {
        width: 1240px;
      }
`;

export const CasesHeader = styled.div`
    margin-bottom: 19px;
      @media screen and (min-width: 768px) {
        display: flex;
        justify-content: space-between;
        margin-bottom: 38px;
      }
      @media screen and (min-width: 1280px) {
        margin-bottom: 120px;
      }
`;

export const CasesHeaderTitle = styled.h2`
    width: 264px;
    margin-bottom: 24px;
    font-family: Oswald;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-transform: uppercase;
    color: var(--main-dark-green);
      @media screen and (min-width: 768px) {
        width: 343px;
        margin-bottom: 0;
        font-size: 36px;
        line-height: 36px;
      }
      @media screen and (min-width: 1280px) {
        width: 398px;
        font-size: 48px;
        line-height: 48px;
      }
`;

export const CasesHeaderLineVertical = styled.div`
    display: none;
      @media screen and (min-width: 768px) {
        display: block;
        flex-shrink: 0;
        width: 1px;
        height: 65px;
        background: var(--main-green);
      }
      @media screen and (min-width: 1280px) {
        height: 96px;
      }
`;

export const CasesHeaderButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: end;
    background-color: var(--main-bg);
      @media screen and (min-width: 768px) {
        width: 343px;
      }
      @media screen and (min-width: 1280px) {
        width: 385px;
      }
`;

export const CasesHeaderNumber = styled.p`
  display: flex;
  width: 72px;
  text-align: justify;
  font-family: Fira Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;
  color: var(--main-dark-green);
    @media screen and (min-width: 768px) {
      width: 74px;
    }
`;

export const CasesHeaderNumberTotal = styled.span`
  color: rgba(23, 61, 51, 0.25);
  font-family: Fira Sans;
  font-size: 28px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  letter-spacing: -1.12px;
`;

export const Right = styled(ReactSVG).attrs({
  src: right,
})`
  width: ${props => (props.size ? props.size + 'px' : '36px')};
  height: ${props => (props.size ? props.size + 'px' : '36px')};
  stroke: var(--main-dark-green);

  transform: ${props => {
    let transformValue = '';
    if (props.rotateright) transformValue += 'rotateY(180deg) ';
    if (props.rotateupleft) transformValue += 'rotate(315deg) ';
    if (props.scale) transformValue += `scale(${props.scale})`;
    return transformValue.trim() || 'none';
  }};
  transform-origin: center;
`;

export const CasesHeaderButtonLeft = styled.button`
  width: 66px;
  height: 66px;
  padding: 15px;
  margin-right: 12px;
  margin-left: auto;
  border-radius: 100px;
  border: 1px solid var(--main-dark-green);
  background: var(--main-bg);
    &:hover {
      border: 1px solid var(--main-green);
      ${Right} {
        stroke: var(--main-green);
      }
    }
    @media screen and (min-width: 1280px) {
      width: 84px;
      height: 84px;
      padding: 24px;
      margin-right: 24px;
    }
`;

export const CasesHeaderButtonRight = styled.button`
  width: 66px;
  height: 66px;
  padding: 15px;
  margin-right: 0;
  border-radius: 100px;
  border: 1px solid var(--main-dark-green);
  background: var(--main-bg);
    &:hover {
      border: 1px solid var(--main-green);
      ${Right} {
        stroke: var(--main-green);
      }
    }
    @media screen and (min-width: 1280px) {
      width: 84px;
      height: 84px;
      padding: 24px;
    }
`;

export const Slides = styled.div`
  display: flex;
  width: 320px;
    @media screen and (min-width: 768px) {
      width: 708px;
    }
    @media screen and (min-width: 1280px) {
      width: 1240px;
    }
`;

export const SliderItems = styled.div`
  background-color: var(--second-bg);
  height: 318px;
    @media screen and (min-width: 768px) {
      width: 342px;
      height: 322px;
    }
    @media screen and (min-width: 1280px) {
      width: 596px;
      height: 506px;
    }
`;

export const SliderItemsImage = styled.div`
  margin-bottom: 24px;
    @media screen and (min-width: 1280px) {
      margin-bottom: 36px;
    }
`;

export const SliderItemsInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 12px 0;
  @media screen and (min-width: 1280px) {
    padding: 0 48px 0;
  }
`;

export const SliderItemsDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 12px;
  width: 296px;
  min-height: 76px;
    @media screen and (min-width: 768px) {
      width: 318px;
    }
    @media screen and (min-width: 1280px) {
      width: 500px;
      min-height: 94px;
    }
`;

export const SliderItemsDescriptionTitle = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.72px;
  color: var(--main-dark-green);
    @media screen and (min-width: 768px) {
      font-size: 20px;
      letter-spacing: -0.8px;
    }
    @media screen and (min-width: 1280px) {
      height: 58px;
      font-size: 24px;
      letter-spacing: -0.96px;
    }
`;

export const SliderItemsDescriptionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  padding: 16px;
  margin-left: 60px;
  border: none;
  border-radius: 100px;
  transform-origin: center;
  background: var(--main-green);
    &:hover {
      background: var(--main-dark-green);
      ${Right} {
        stroke: var(--main-green);
      }
    }
`;

export const CasesHeaderLineHorizont = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 1px;
  background: var(--main-green);
`

export const SliderItemsInfoTime = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 12px;
  margin-bottom: 12px;
    @media screen and (min-width: 1280px) {
      margin-top: 24px;
    }
`;

export const SliderItemsInfoTimeText = styled.p`
  text-align: justify;
  font-family: Fira Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  color: var(--main-dark-green);
    @media screen and (min-width: 768px) {
      font-size: 14px;
      letter-spacing: -0.56px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 16px;
      letter-spacing: -0.64px;
    }
`;

export const SliderItemsInfoTimeDate = styled.p`
  text-align: right;
  font-family: Fira Sans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.48px;
  color: var(--main-dark-green);
    @media screen and (min-width: 768px) {
      letter-spacing: -0.56px;
    }
    @media screen and (min-width: 1280px) {
      font-size: 16px;
      letter-spacing: -0.64px;
    }
`;