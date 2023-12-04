
import {
  WrapperBackdrop,
  Wrapper,
  McDonaldsMenuWrapper,
  McDonaldsMenuCloseWrapper,
  CloseButton,
  CloseButtonParagraph,
  McDonaldsMenuLine,
  BuffetContainer,
  BuffetList,
  LinkWrapper,
  BuffetLink,
  Close,
  Northerneast,
  Facebook,
  Instagram,
  SocialContainer,
  SocialLink,
} from "./mcDonaldsMenu.styled";

const links = [
  { name: 'Main', link: 'hero' },
  { name: 'About', link: 'values' },
  { name: 'Cases', link: 'cases' },
  { name: 'FAQ', link: 'faq' },
  { name: 'Contact Us', link: 'contact' },
];
const McDonaldsMenu = ({ onClose }) => {
  
  const goToLink = link => {
    const sectionId = link;
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
    onClose();
  };
  
  return (
    <WrapperBackdrop>
      <Wrapper>
        <McDonaldsMenuWrapper>

        <McDonaldsMenuCloseWrapper >
          <CloseButton type="button" onClick={onClose}>
            <Close />
            <CloseButtonParagraph>close</CloseButtonParagraph>
          </CloseButton>
        </McDonaldsMenuCloseWrapper>
        <McDonaldsMenuLine/>

        <BuffetContainer>
          <BuffetList  >

              {links.map(({ name, link }) => {
                return (
                  <LinkWrapper key={link}>
                    <BuffetLink onClick={() => goToLink(link)}>
                      {`${name}`}
                      <Northerneast style={{ stroke: 'var(--white)' }} />
                    </BuffetLink>
                  </LinkWrapper>
                );
              })}

          </BuffetList>
        </BuffetContainer>

        <SocialContainer>
          <SocialLink
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </SocialLink>
          <SocialLink
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook />
          </SocialLink>
        </SocialContainer>
        </McDonaldsMenuWrapper>
      </Wrapper>
    </WrapperBackdrop>
  );
};

export default McDonaldsMenu;