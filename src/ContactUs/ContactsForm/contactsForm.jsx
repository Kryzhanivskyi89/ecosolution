
import { useState } from 'react';
import * as yup from 'yup';
import { Notify } from 'notiflix';
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


const formSchema = yup.object().shape({
    name: yup.string().min(2, 'Wrong name').max(21, 'Wrong name').required(('Please enter your full name')),
    email: yup.string().min(8, 'Wrong Email').max(22, 'Wrong Email').email('Please enter a valid email address').required('Email is required'),
    phone: yup.number().required('Phone number is required').typeError('Phone must be a in format +380221234567'),
    message: yup.string(),
});

const ContactsForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;

        setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined,
        }));

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await formSchema.validate(
        { name, email, phone, message },
        { abortEarly: false }
      );
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setErrors({});
        Notify.success(`Form submitted`);
    } catch (err) {
      const validationErrors = {};
      err.inner.forEach(error => {
        validationErrors[error.path] = error.message;
      });
      setErrors(validationErrors);
    }
  };
    return (
        <ContactForm onSubmit={handleSubmit}>
           <ContactLabelWrapper>
                <ContactFormLabel htmlFor="name">
                    <ContactFormTitle>* Full name:</ContactFormTitle>
                    <ContactFormInput
                        id="name"
                        type="text"
                        name="name"
                        placeholder="John Rosie"
                        value={name}
                        onChange={handleChange}
                    />
                    {errors.name && < FormError> {errors.name} </FormError>}
                </ContactFormLabel>
                
                <ContactFormLabel htmlFor="email">
                    <ContactFormTitle>* E-mail:</ContactFormTitle>
                    <ContactFormInput
                        id="email"
                        type="email"
                        name="email"
                        placeholder="johnrosie@gmail.com"
                        value={email}
                        onChange={handleChange}
                    />
                    {errors.email && < FormError> {errors.email} </FormError>}
                </ContactFormLabel>
                
                <ContactFormLabel htmlFor="phone">
                    <ContactFormTitle>* Phone:</ContactFormTitle>
                    <ContactFormInput
                        id="phone"
                        type="phone"
                        name="phone"
                        placeholder="380961234567"
                        value={phone}
                        onChange={handleChange}
                    />
                    {errors.phone && < FormError> {errors.phone} </FormError>}
                </ContactFormLabel>
                
                <ContactFormLabel>
                    <ContactFormTitle>Message:</ContactFormTitle>
                    <ContactFormText
                        type="text"
                        name="message"
                        placeholder="Your message"
                        value={message}
                        onChange={handleChange}/>
                </ContactFormLabel>

            </ContactLabelWrapper>
                <ContactFormSubmit type="submit">
                    Send
                {/* <ContactSubmitIconWrapper> */}
                    <Right/>
                {/* </ContactSubmitIconWrapper> */}
            </ContactFormSubmit>
        </ContactForm>
    );
};

export default ContactsForm;