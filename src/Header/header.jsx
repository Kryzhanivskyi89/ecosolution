
import Logo from '../Logo/logo';
import {
  Container,
  BurgerButton,
  ButtonIcon,
  ButtonTouch,
  TouchText,
  TouchDown,
} from './header.styled';

const scrollContactUs = () => {
  const sectionId = 'contact';
  const section = document.getElementById(sectionId);

  if (section) {
    const headerHeight = 70;
    const sectionRect = section.getBoundingClientRect();

    window.scrollTo({
      top: sectionRect.top + window.scrollY - headerHeight,
      left: 0,
      duration: 500,
      behavior: 'smooth',
    });
  }
};
const Header = () => {

  return (
    <>
      <Container id="header">
        <Logo />
        <BurgerButton>
          <ButtonIcon />
        </BurgerButton>
        <ButtonTouch onClick={scrollContactUs}>
          <TouchText>Get in touch</TouchText>
          <TouchDown />
        </ButtonTouch>
      </Container>
    </>
  );
};

export default Header;