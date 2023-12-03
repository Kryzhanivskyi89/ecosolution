import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import phone from '../../images/phone.svg';
import email from '../../images/email.svg';
import adres from '../../images//adres.svg';
import facebook from '../../images/facebook.svg';
import instagram from '../../images/instagram.svg';

export const Wrapper = styled.div`
	margin: 0 auto;
	padding: 0 px;
		@media screen and (min-width: 480px) {
			max-width: 480px;
		@media screen and (min-width: 768px) {
			max-width: 768px;
		}
		@media screen and (min-width: 1280px) {
			max-width: 1280px;
		}
`;

export const ContactSocialList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 24px;
	margin-bottom: 24px;
		@media screen and (min-width: 768px) {
			margin-bottom: 0;
			max-width: 244px;
		}
		@media screen and (min-width: 1280px) {
			max-width: 466px;
		}
`;

export const ContactSocialItem = styled.li`
    
`;

export const ContactSocialTitle = styled.h3`
    margin-bottom: 8px;
	color: var(--main-dark-green); 
	text-align: justify;
	font-family: Fira Sans;
	font-size: 16px;
	letter-spacing: -0.64px;
		@media screen and (min-width: 1280px) {
			margin-bottom: 16px;
		}
`;

export const ContactSocialItemWrapper = styled.div`

`;

export const ContactLink = styled.p`
    display: flex;
	align-items: center;
	gap: 8px;
	color: var(--main-dark-green);
	text-align: justify;
	font-family: Fira Sans;
	font-size: 20px;
	font-style: normal;
	letter-spacing: -0.8px;
		&:hover,
		&:focus {
			color: var(--main-green);
		}

		@media screen and (min-width: 1280px) {
			font-size: 24px;
			letter-spacing: -0.96px;
		}
`;

export const IconWrapper = styled.div`
    display: flex;
	align-items: center;
`;

export const Phone = styled(ReactSVG).attrs({
  src: phone,
})`
    width: 24px;
	height: 24px;
	cursor: pointer;
	stroke: var(--main-dark-green);
		&:hover {
			stroke: var(--main-green);
		}
`;

export const Email = styled(ReactSVG).attrs({
  src: email,
})`
    width: 24px;
	height: 24px;
	cursor: pointer;
	stroke: var(--main-dark-green);
		&:hover {
			stroke: var(--main-green);
		}
`;

export const Adres = styled(ReactSVG).attrs({
  src: adres,
})`
    width: 24px;
	height: 24px;
	cursor: pointer;
	stroke: var(--main-dark-green);
		&:hover {
			stroke: var(--main-green);
		}
`;

export const ContactSocialLinkWrapper = styled.div`
    display: flex;
	gap: 8px;
`;

export const Facebook = styled(ReactSVG).attrs({
  src: facebook,
})`
	stroke: var(--main-dark-green);
`;

export const Instagram = styled(ReactSVG).attrs({
  src: instagram,
})`
	stroke: var(--main-dark-green);
`;

export const ContactSocialLink = styled.a`
    padding: 12px;
	color: var(--main-dark-green);
		&:hover,
		&:focus {
			color: var(--main-bg);
			${Instagram} {
				stroke: var(--main-green);
			  }
			${Facebook} {
        		stroke: var(--main-green);
      		}
		}
		@media screen and (min-width: 1280px) {
			padding: 0;
		}
`;