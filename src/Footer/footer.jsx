import Logo from '../Logo/logo';
import {
  FooterLine,
  Wrapper,
  FooterSocialWrapper,
  FooterLogoSocialWrapper,
  SocialLink,
  Facebook,
  Instagram,
  Up,
  FooterButton,
  FooterContactWrapper,
  FooterContacts,
  FooterEmail,
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

            <SocialLink
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook />
            </SocialLink>

            <SocialLink
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </SocialLink>
            
          </FooterSocialWrapper>
          <FooterButton type='button' onClick={scrollToTop}>
            <Up />
          </FooterButton>
        </FooterLogoSocialWrapper>
        <FooterContactWrapper>
          <FooterContacts>
            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
          </FooterContacts>
          <FooterEmail
            href="office@ecosolution.com"
            target="_blank"
            rel="noopener noreferrer">
              office@ecosolution.com
          </FooterEmail>
          <FooterContacts>ecosolution © 2023</FooterContacts>
        </FooterContactWrapper>
      </Wrapper>
    </>
  );
};

export default Footer;