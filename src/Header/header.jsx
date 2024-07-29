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



const Header = () => {
  const [isTransparent, setIsTransparent] = useState(true);

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

useEffect(() => {
    const handleScrollEvent = () => {
      setIsTransparent(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

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
    setIsTransparent(false);
  }
};

  return (
    <>
      <Wrapper style={{
          background: isTransparent ? 'transparent' : 'var(--white)',
      }}>
        <HeaderWrapper id="header">
          <Logo />
          <McDonaldsMenuButton
            type='button'
            onClick={openMenu ? closeModal : openModal}>
            <ButtonIcon />
          </McDonaldsMenuButton>
          <ButtonTouch
            type='button'
            onClick={scrollContactUs}>
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