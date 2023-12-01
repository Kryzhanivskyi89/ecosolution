
import Logo from '../Logo/logo';
import {
  Container,
  BurgerButton,
  ButtonIcon,
  ButtonTouch,
  TouchText,
  TouchDown,
} from './header.styled';

const Header = () => {
  return (
    <>
      <Container>
        <Logo />
        <BurgerButton>
          <ButtonIcon />
        </BurgerButton>
        <ButtonTouch>
          <TouchText>Get in touch</TouchText>
          <TouchDown />
        </ButtonTouch>
      </Container>
    </>
  );
};

export default Header;