
import {
    ContactSocialList,
    ContactSocialItem,
    ContactSocialTitle,
    ContactLink,
    IconWrapper,
    Phone,
    Email,
    Adres,
    ContactSocialLinkWrapper,
    ContactSocialLink,
    Facebook,
    Instagram,
} from './contacts.styled';

const Contacts = () => {

  return (
    <>
       <ContactSocialList>
        
            <ContactSocialItem>
                <ContactSocialTitle>Phone</ContactSocialTitle>
                <ContactLink 
                    href="tel:+380981234567"
                    target="_blank"
                    rel="noopener noreferrer nofollow">
                        <Phone/>
                        38 (098) 12 34 567
                </ContactLink>
                
                <ContactLink 
                    href="tel:+380981234567"
                    target="_blank"
                    rel="noopener noreferrer nofollow">
                        <Phone />
                        38 (098) 12 34 567
                </ContactLink>
            </ContactSocialItem>
                
                <ContactSocialItem>
                    <ContactSocialTitle>E-mail:</ContactSocialTitle>
                    <ContactLink 
                        href="mailto:office@ecosolution.com"
                        target="_blank"
                        rel="noopener noreferrer nofollow">
                            <Email/>
                            office@ecosolution.com
                    </ContactLink>
                </ContactSocialItem>
                
                <ContactSocialItem>
                    <ContactSocialTitle>Address:</ContactSocialTitle>
                    <ContactLink 
                        href="https://maps.app.goo.gl/4wEMGGNfCrechPkS6"
                        target="_blank"
                        rel="noopener noreferrer nofollow">
                            <Adres/>
                            79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
                    </ContactLink>
                </ContactSocialItem>
                
                <ContactSocialItem>
                    <ContactSocialTitle>Social Networks:</ContactSocialTitle>
                        <ContactSocialLinkWrapper>
                            <ContactSocialLink 
                                href="https://www.facebook.com/"
                                target="_blank"
                                rel="noopener noreferrer nofollow">
                                <Facebook/>
                            </ContactSocialLink>
                            
                            <ContactSocialLink 
                                href="https://www.instagram.com/"
                                target="_blank"
                                rel="noopener noreferrer nofollow">
                                <Instagram/>
                            </ContactSocialLink>
                            
                        </ContactSocialLinkWrapper>
                </ContactSocialItem>
                
        </ContactSocialList>    
    </>
  );
};

export default Contacts;