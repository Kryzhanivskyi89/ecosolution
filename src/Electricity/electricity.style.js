import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    justify-content: center;
    align-items: center;
    width: 320px;
    margin-bottom: 36px;
        @media screen and (min-width: 768px) {
            width: 708px;
            margin-bottom: 100px;
        }
        @media screen and (min-width: 1280px) {
            gap: 16px;
            width: 1240px;
            margin-bottom: 120px;
        }
`;
export const ElectricityTitle = styled.h2`
    width: 286px;
    text-align: center;
    font-family: Oswald;
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
    text-transform: uppercase;
    color: var(--main-dark-green);
        @media screen and (min-width: 768px) {
            width: 368px;
            font-size: 36px;
            line-height: 36px;
        }
        @media screen and (min-width: 1280px) {
            width: 491px;
            font-size: 48px;
            line-height: 48px;
        }
`;
export const ElectricityLine = styled.div`
    flex-shrink: 0; 
    width: 1px;
    height: 48px;
    background: var(--main-green);
        @media screen and (min-width: 768px) {
            height: 87px;
        }
`;
export const ElectricityTimer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 303px;
    text-align: center;
    font-family: Oswald;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 48px;
    color: var(--main-green);
        @media screen and (min-width: 768px) {
            width: 602px;
            font-size: 100px;
            line-height: 100px;
        }
        @media screen and (min-width: 1280px) {
            width: 975px;
            font-size: 164px;
            line-height: 164px;
        }
`;
export const ElectricityTimerText = styled.p`
    text-align: center;
    font-family: Oswald;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: var(--main-dark-green);
        @media screen and (min-width: 768px) {
            font-size: 28px;
            line-height: 48px;
        }
        @media screen and (min-width: 1280px) {
            font-size: 48px;
        }
`;