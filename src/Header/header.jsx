import { useState, useEffect } from 'react';
import McDonaldsMenu from '../McDonaldsMenu/mcDonaldsMenu';
import Logo from '../Logo/logo';
import {
  Wrapper,
  HeaderWrapper,
  McDonaldsMenuButton,
  ButtonIcon,
  ButtonTouch,
  TouchText,
  TouchDown,
  McDonaldsMenuHidden,
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

  const useOpenMcDonaldsMenu = ({ styles }) => {
    const [openMenu, setOpenMenu] = useState(false);

      useEffect(() => {
        if (openMenu) {
          return document.body.classList.add(styles);
        }
        document.body.classList.remove(styles);
      }, [openMenu, styles]);

    return { openMenu, setOpenMenu };
  };

  const { openMenu, setOpenMenu } = useOpenMcDonaldsMenu('modalOpen');

  const openModal = () => {
    setOpenMenu(true);
  };

  const closeModal = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Wrapper id="header">
        <HeaderWrapper >
          <Logo />
          <McDonaldsMenuButton onClick={openMenu ? closeModal : openModal}>
            <ButtonIcon />
          </McDonaldsMenuButton>
          <ButtonTouch onClick={scrollContactUs}>
            <TouchText>Get in touch</TouchText>
            <TouchDown />
          </ButtonTouch>
        </HeaderWrapper>
      </Wrapper>
      {openMenu && (
          <div id="modal">
            <McDonaldsMenuHidden className={openMenu ? 'modal-open' : ''}>
              <McDonaldsMenu onClose={closeModal}/>
            </McDonaldsMenuHidden>
          </div>
        )}
    </>
  );
};

export default Header;