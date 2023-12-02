import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import openness from '../images/openness.svg';
import responsibility from '../images/responsibility.svg';
import innovation from '../images/innovation.svg';
import quality from '../images/quality.svg';
import men_tab from '../images/values-men_tab.png';
import man_tab from '../images/values-man_tab.png';
import men_desk from '../images/values-men_desk.png';
import man_desk from '../images/values-man_desk.png';

export const Wrapper = styled.div`
  width: 320px;
  margin-bottom: 36px;
    @media screen and (min-width: 768px) {
        width: 709px;
        margin-bottom: 100px;
    }
    @media screen and (min-width: 1280px) {
        width: 1240px;
        margin-bottom: 120px;
    }
`;
export const MainValues = styled.div`
    margin-bottom: 36px;
        @media screen and (min-width: 768px){
            display: flex;
            justify-content: space-between;
            margin-bottom: 100px;
        }
        @media screen and (min-width: 1280px){
            margin-bottom: 122px;   
        }
`;

export const MainValueTitle = styled.h1`
    font-family: Oswald;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-transform: uppercase;
    margin-bottom: 24px;
    color: var(--main-dark-green);
        @media screen and (min-width: 768px) {
            font-size: 36px;
            line-height: 36px;
            width: 272px;
        }
        @media screen and (min-width: 1280px) {
            font-size: 48px;
            line-height: 48px;
            width: 365px;
        }
`;

export const Rectangle = styled.div`
    display: none;
        @media screen and (min-width: 768px){  
            display: block;  
            margin-left: auto;
            margin-right: 11px;
            width: 1px;
            height: 110px;
            flex-shrink: 0;
            background: var(--main-green);
        }
        @media screen and (min-width: 1280px){
            height: 87px;   
            margin-right: 161px;
        }
`

export const ValuesText = styled.p`
    text-align: justify;
    font-family: Fira Sans;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.64px;
    color: var(--main-dark-green);
        @media screen and (min-width: 768px){
            width: 342px; 
            margin-right: 0;
        }
        @media screen and (min-width: 1280px){
            width: 459px; 
        }
`;

export const ValuesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;

        @media screen and (min-width: 768px) {
            grid-template-columns: repeat(4, 1fr);
        }
        @media screen and (min-width: 1280px) {
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 48px;
        }
`;


export const ValuesGridItem = styled.div`
    flex-shrink: 0;
    width: 148px;
    height: 197px;
    background: var(--second-bg);
    padding: 13px 12px 12px;
        @media screen and (min-width: 768px) {
            width: 159px;
            height: 197px;
        }
        @media screen and (min-width: 1280px) {
            width: 274px;
            height: 339px;
            padding: 48px 24px;
        }
`;

export const ValuesGridContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 33px;
    height: 24px;
        @media screen and (min-width: 768px) {
            margin-bottom: 51px;
        }
        @media screen and (min-width: 1280px) {
            height: 48px;
            margin-bottom: 94px;
        }
`;

export const ValuesLine = styled.div`
    width: 100%;
    height: 1px;
    flex-shrink: 0;
    background: var(--main-green);
`;

export const Openness = styled(ReactSVG).attrs({
  src: openness,
})`
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
        @media screen and (min-width: 1280px) {
            transform: scale(1.5);
        }
`;
export const Responsibility = styled(ReactSVG).attrs({
  src: responsibility,
})`
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
        @media screen and (min-width: 1280px) {
            transform: scale(1.5);
        }
    }
`;
export const Innovation = styled(ReactSVG).attrs({
  src: innovation,
})`
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
        @media screen and (min-width: 1280px) {
            transform: scale(1.5);
        }
`;
export const Quality = styled(ReactSVG).attrs({
  src: quality,
})`
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
        @media screen and (min-width: 1280px) {
            transform: scale(1.5);
        }
`;

export const ValuesGridTitle = styled.p`
    font-family: Oswald;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    text-transform: uppercase;
    color: var(--main-dark-green);
        @media screen and (min-width: 768px) {
            font-size: 18px;
        }
        @media screen and (min-width: 1280px) {
            font-size: 32px;
            line-height: 48px;
        }
`;

export const ValuesGridText = styled.p`
    text-align: justify;
    font-family: Fira Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.56px;
    margin-top: 12px;
    color: var(--main-dark-green);
        @media screen and (min-width: 768px) {
        }
        @media screen and (min-width: 1280px) {
            font-size: 16px;
        }
`;

export const ValueImageMen = styled.img`
    display: none;
    @media screen and (min-width: 768px) {
        display: block;
        flex-shrink: 0;
        width: 346px;
        height: 197px;
        background: url(${men_tab}), lightgray 50%;
        background-position: center;
        background-size: cover;

        &:nth-child(3) {
        grid-column: span 2;
        }
    }
    @media screen and (min-width: 1280px) {
        background: url(${men_desk});
        width: 596px;
        height: 339px;
    }
`;
export const ValueImageMan = styled.img`
    display: none;
        @media screen and (min-width: 768px) {
            display: block;
            flex-shrink: 0;
            width: 346px;
            height: 197px;
            background: url(${man_tab}), lightgray 50%;
            background-position: center;
            background-size: cover;

                &:nth-child(4) {
                grid-column: span 2;
                }
        }
        @media screen and (min-width: 1280px) {
            background: url(${man_desk});
            width: 596px;
            height: 339px;
        }
`;