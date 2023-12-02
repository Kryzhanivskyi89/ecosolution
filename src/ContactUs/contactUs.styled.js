import styled from 'styled-components';

export const ContactUsSection = styled.section`
padding: 18px 0;
	@media screen and (min-width: 768px) {
		padding: 50px 0;
	}

	@media screen and (min-width: 1280px) {
		padding: 120px 0;
	}
`;

export const ContactUsTitle = styled.h2`
    margin-bottom: 24px;
	text-align: center;
	color: #173d33;
	font-family: Oswald;
	font-size: 28px;
	line-height: 1;
	text-transform: uppercase;
		@media screen and (min-width: 768px) {
			margin-bottom: 40px;
			font-size: 36px;
		}

		@media screen and (min-width: 1280px) {
			margin-bottom: 120px;
			font-size: 48px;
		}
`;

export const Wrapper = styled.div`
    @media screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}

	@media screen and (min-width: 1280px) {
		gap: 178px;
	}
`;