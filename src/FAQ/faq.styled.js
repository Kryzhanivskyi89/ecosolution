import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import down from '../images/down.svg';
import minus from '../images/minus.svg';
import plus from '../images/plus.svg';

export const Wrapper = styled.section`
    padding: 18px 0;
	background-color: var(--main-bg);
        @media screen and (min-width: 768px) {
            padding: 50px 0;
        }
        @media screen and (min-width: 1280px) {
            padding: 60px 0;
        }
`;

export const FaqWrapper = styled.div`
    @media screen and (min-width: 768px) {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr 1fr;
		gap: 24px;
		justify-items: start;
	}

	@media screen and (min-width: 1280px) {
		gap: 185px;
	}
`;

export const FaqTitlle = styled.h2`
    margin-bottom: 24px;
	font-family: Oswald;
	font-size: 28px;
	line-height: 1;
	text-transform: uppercase;
	color: var(--main-dark-green);
        @media screen and (min-width: 768px) {
            margin-bottom: 0;
            font-size: 36px;
        }
        @media screen and (min-width: 1280px) {
            font-size: 48px;
        }
`;

export const FaqList= styled.ul`
    margin-bottom: 36px;
        @media screen and (min-width: 768px) {
            margin-bottom: 0;
            grid-row-start: 1;
            grid-row-end: 3;
        }
`;

export const FaqItem= styled.li`
    padding: 16px 0;
	border-top: 1px solid var(--main-green);
        &:last-child {
            padding-bottom: 0;
        }
        @media screen and (min-width: 1280px) {
            padding: 24px 0;
        }
`;

export const FaqButton= styled.button`
    display: flex;
	align-items: center;
	gap: 8px;
        @media screen and (min-width: 768px) {
            gap: 16px;
        }
        @media screen and (min-width: 1280px) {
            gap: 24px;
        }
`;

export const Minus = styled(ReactSVG).attrs({
  src: minus,
})`
    width: 16px;
	height: 16px;
        @media screen and (min-width: 768px) {
            width: 28px;
            height: 28px;
        }
`;

export const Plus = styled(ReactSVG).attrs({
  src: plus,
})`
    width: 16px;
	height: 16px;
        @media screen and (min-width: 768px) {
            width: 28px;
            height: 28px;
        }
`;

export const FaqQuestions= styled.h3`
    text-align: justify;
    font-family: Fira Sans;
    font-size: 18px;
    letter-spacing: -0.72px;
    color: var(--main-dark-green);
        @media screen and (min-width: 1280px) {
            font-size: 24px;
            letter-spacing: -0.96px;
        }
`;

export const FaqDrop = styled.div`
    height: 0;
	padding-left: 24px;
	overflow: hidden;
	transition:
	height 0.3s,
	margin 0.3s;
        @media screen and (min-width: 768px) {
            padding-left: 44px;
        }
        @media screen and (min-width: 1280px) {
            padding-left: 52px;
        }
`;

export const FaqDropOpen = styled.div`
    margin-top: 16px;
        @media screen and (min-width: 1280px) {
            margin-top: 24px;
        }
`;

export const FaqAnswers= styled.p`
    text-align: justify;
    font-family: Fira Sans;
    font-size: 14px;
    letter-spacing: -0.56px;
    color: var(--main-dark-green);
        @media screen and (min-width: 1280px) {
            font-size: 16px;
            letter-spacing: -0.64px;
        }
`;

export const FaqSecondTitleWrapper = styled.div`
    display: flex;
	flex-direction: column;
	align-items: center;
        @media screen and (min-width: 768px) {
            align-self: end;
        }
`;

export const FaqSecondTitle = styled.h3`
    margin-bottom: 12px;
	text-align: justify;
	font-family: Fira Sans;
	font-size: 18px;
	letter-spacing: -0.72px;
	color: var(--main-dark-green);
        @media screen and (min-width: 1280px) {
            font-size: 24px;
            letter-spacing: -0.96px;
        }
`;

export const FaqLinkWrapper = styled.div`
    display: flex;
	justify-content: center;
	width: 100%;
`;

export const FaqLink = styled.button`
    display: flex;
	gap: 12px;
	align-items: center;
	padding: 10px 16px;
	border-radius: 500px;
	font-family: Fira Sans;
	font-size: 16px;
	letter-spacing: -0.64px;
	color: var(--main-dark-green);
	background-color: var(--main-green);
	cursor: pointer;
        &:hover,
        &:focus {
            color: var(--main-green);
            background-color: var(--main-dark-green);
            transition-duration: 250ms;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
`;

export const FaqIconWrapper = styled.div`
    display: flex;
	align-items: center;
`;

export const Down = styled(ReactSVG).attrs({
  src: down,
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