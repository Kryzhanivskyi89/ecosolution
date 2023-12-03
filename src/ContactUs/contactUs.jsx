
import Contacts from './Contacts/contacts';
import ContactsForm from './ContactsForm/contactsForm';
import { ContactUsSection, ContactUsTitle, Wrapper } from './contactUs.styled';

const ContactUs = () => {
 
  return (
    <>
      <ContactUsSection id="contact">
        <ContactUsTitle>Contact us</ContactUsTitle>
        <Wrapper>
          <Contacts />
          <ContactsForm />
        </Wrapper>
      </ContactUsSection>
    </>
  );
};

export default ContactUs;