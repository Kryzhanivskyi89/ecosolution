import { ErrorMessage, Formik } from 'formik';
import * as yup from 'yup';
import {
    ContactForm,
    ContactLabelWrapper,
    ContactFormLabel,
    ContactFormTitle,
    ContactFormInput,
    FormError,
    ContactFormSubmit,
    ContactFormText,
    // ContactSubmitIconWrapper,
    Right,
} from './contactsForm.styled';


const formSchema = yup.object({
    name: yup.string().min(2, 'Wrong name').max(21, 'Wrong name').required(),
    email: yup.string().min(8, 'Wrong Email').max(22, 'Wrong Email').email().required(),
    phone: yup.number().min(12, 'Wrong Phone').max(13, 'Wrong Phone').required().typeError('Phone must be a in format +380221234567'),
});

const ContactsForm = () => {

  return (
    <>
      <Formik validationSchema={formSchema}>
        <ContactForm>
           <ContactLabelWrapper>
            
                <ContactFormLabel htmlFor="name">
                    <ContactFormTitle>* Full name:</ContactFormTitle>
                        <ContactFormInput
                            id="name"
                            type="text"
                            name="name"
                            placeholder="John Rosie"
                            required/>
                        <ErrorMessage name="name" component={FormError} />
                        
                </ContactFormLabel>
                
                <ContactFormLabel htmlFor="email">
                    <ContactFormTitle>* E-mail:</ContactFormTitle>
                    <ContactFormInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="johnrosie@gmail.com"
                        required/>
                    <ErrorMessage name="email" component={FormError} />        
                    
                </ContactFormLabel>
                
                <ContactFormLabel htmlFor="phone">
                    <ContactFormTitle>* Phone:</ContactFormTitle>
                    <ContactFormInput
                        id="phone"
                        type="text"
                        name="phone"
                        placeholder="380961234567"
                        required/>
                    <ErrorMessage name="phone" component={FormError} />        
                    
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
                {/* <ContactSubmitIconWrapper> */}
                    <Right/>
                {/* </ContactSubmitIconWrapper> */}
            </ContactFormSubmit>
        </ContactForm>
      </Formik>
    </>
  );
};

export default ContactsForm;