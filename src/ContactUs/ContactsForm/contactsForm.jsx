import {
    ContactForm,
    ContactLabelWrapper,
    ContactFormLabel,
    ContactFormTitle,
    ContactFormInput,
    
    ContactFormSubmit,
    ContactFormText,
    ContactSubmitIconWrapper,
    ContactFromArrowIcon,
} from './contactsForm.styled';


const ContactsForm = () => {

    
  return (
    <>
      {/* <Wrapper> */}
        <ContactForm>
           <ContactLabelWrapper>
            
                <ContactFormLabel>
                    <ContactFormTitle>Full name:</ContactFormTitle>
                        <ContactFormInput
                            type="text"
                            name="name"
                            placeholder="John Rosie"/>
                            
                        
                </ContactFormLabel>
                
                <ContactFormLabel>
                    <ContactFormTitle>E-mail:</ContactFormTitle>
                    <ContactFormInput
                        type="text"
                        name="email"
                        placeholder="johnrosie@gmail.com"/>
                            
                    
                </ContactFormLabel>
                
                <ContactFormLabel>
                    <ContactFormTitle>Phone:</ContactFormTitle>
                    <ContactFormInput
                        type="text"
                        name="phone"
                        placeholder="380961234567"/>
                            
                    
                </ContactFormLabel>
                
                <ContactFormLabel>
                    <ContactFormTitle>Message:</ContactFormTitle>
                    <ContactFormText
                        type="text"
                        name="message"
                        placeholder="Your message"/>
                </ContactFormLabel>

            </ContactLabelWrapper>
                <ContactFormSubmit type="submit">
                    Send
                <ContactSubmitIconWrapper>
                    <ContactFromArrowIcon/>
                </ContactSubmitIconWrapper>
            </ContactFormSubmit>
        </ContactForm>
      {/* </Wrapper> */}
    </>
  );
};

export default ContactsForm;