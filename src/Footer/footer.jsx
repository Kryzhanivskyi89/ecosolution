import Logo from '../Logo/logo';
import {
  FooterLine,
  Wrapper,
  FooterSocialWrapper,
  FooterLogoSocialWrapper,
  Facebook,
  Instagram,
  Up,
  FooterButton,
  FooterContactWrapper,
  FooterContacts,
} from './footer.styled';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    duration: 500,
    behavior: 'smooth',
  });
};

const Footer = () => {
  return (
    <>
      <FooterLine />
      <Wrapper>
        <FooterLogoSocialWrapper>
          <Logo />
          <FooterSocialWrapper>
            <Facebook />
            <Instagram />
          </FooterSocialWrapper>
          <FooterButton onClick={scrollToTop}>
            <Up />
          </FooterButton>
        </FooterLogoSocialWrapper>
        <FooterContactWrapper>
          <FooterContacts>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </FooterContacts>
          <FooterContacts>office@ecosolution.com</FooterContacts>
          <FooterContacts>ecosolution © 2023</FooterContacts>
        </FooterContactWrapper>
      </Wrapper>
    </>
  );
};

export default Footer;