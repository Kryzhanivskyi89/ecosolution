import './App.css';
import Header from './Header/header';
import Hero from './Hero/hero';
import Values from './Values/values';
import Electricity from './Electricity/electricity';
import Cases from './Cases/cases'
import ContactUs from './ContactUs/contactUs';
import { Faq } from './FAQ/faq';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Hero />
        <Values />
        <Electricity />
        <Cases />
        <Faq/>
        <ContactUs />
      </div>
    </>
  );
}

export default App;