import './App.css';
import Header from './Header/header';
import Hero from './Hero/hero';
import Values from './Values/values';
import Electricity from './Electricity/electricity';
import Cases from './Cases/cases'
import ContactUs from './ContactUs/contactUs';
import { Faq } from './FAQ/faq';
import Footer from './Footer/footer';

function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <main>
        <div className="container">
          <Hero />
          <Values />
          <Electricity />
          <Cases />
          <Faq/>
          <ContactUs />
        </div>

      </main>
      
      <footer>
        <div className="container">
          <Footer />
        </div>
      </footer>
    </>
  );
}

export default App;