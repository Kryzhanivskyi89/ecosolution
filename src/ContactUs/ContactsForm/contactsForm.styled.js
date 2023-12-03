import styled from 'styled-components';
import { ReactSVG } from 'react-svg';
import right from '../../images/right.svg';

export const ContactForm = styled.form`
    display: flex;
	flex-direction: column;
	padding: 36px 12px;
	background-color: var(--second-bg);;
        @media screen and (min-width: 768px) {
            width: 342px;
            padding: 36px 24px;
        }
        @media screen and (min-width: 1280px) {
            width: 596px;
            padding: 48px;
        }
`;

export const ContactLabelWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 28px;
    margin-bottom: 16px;
        @media screen and (min-width: 1280px) {
            margin-bottom: 32px;
        }
`;

export const ContactFormLabel = styled.label`
    
`;

export const ContactFormTitle = styled.p`
    margin-bottom: 8px;
	color: var(--main-dark-green);;
	text-align: justify;
	font-family: Fira Sans;
	font-size: 16px;
	letter-spacing: -0.64px;
        @media screen and (min-width: 1280px) {
            margin-bottom: 12px;
        }
`;

export const ContactFormInput = styled.input`
    width: 100%;
	padding-bottom: 8px;
	border: none;
	border-bottom: 1px solid var(--main-green);;
	color: #828382;
	background-color: transparent;
	font-family: Fira Sans;
	font-size: 18px;
	letter-spacing: -0.72px;
        @media screen and (min-width: 1280px) {
            font-size: 20px;
            letter-spacing: -0.8px;
        }
`;

export const FormError = styled.input`
//   position: absolute;
//   top: 32px;
//   right: 8px;
//   font-size: 8px;
  border-color: red;
	@media screen and (min-width: 768px) {
		font-size: 12px;
	}
`;

export const ContactFormText = styled.textarea`
    width: 100%;
	height: 147px;
	border: none;
	border-bottom: 1px solid var(--main-green);;
	color: #828382;
	background-color: transparent;
	font-family: Fira Sans;
	font-size: 18px;
	letter-spacing: -0.72px;
	resize: none;
        @media screen and (min-width: 1280px) {
            font-size: 20px;
            letter-spacing: -0.8px;
        }
`;

export const ContactFormSubmit = styled.button`
    display: flex;
	align-items: center;
	align-self: flex-end;
	gap: 12px;
	width: 100px;
	height: 39px;
	padding: 4px 4px 4px 16px;
	border-radius: 500px;
	border: 1px solid var(--main-green);
	
	font-family: Fira Sans;
	font-size: 16px;
	line-height: calc(18px / 16px);
	letter-spacing: -0.64px;
        &:hover,
        &:focus {
            color: var(--main-green);
            background: var(--main-dark-green)
        }
`;
	
// export const ContactSubmitIconWrapper = styled.div`
//     display: flex;
// 	align-items: center;
// 	padding: 8px;
// 	border-radius: 100px;
// 	background: var(--main-green);;
// `;

export const Right = styled(ReactSVG).attrs({
  src: right,
})`
  width: 32px;
  height: 32px;
`;

