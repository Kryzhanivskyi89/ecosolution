import { useState } from 'react';
import { faqData } from '../data/faqData';
import { FAQItem } from './faqItem';
import {
    Wrapper,
    FaqWrapper,
    FaqTitlle,
    FaqList,
    FaqSecondTitleWrapper,
    FaqSecondTitle,
    FaqLinkWrapper,
    FaqLink,
    FaqIconWrapper,
    Down,
} from './faq.styled';
    
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

export function Faq() {
    const [openId, setOpenId] = useState(faqData[1].id);

    function handleClick(id) {
        if (id === openId) {
            setOpenId(null);
        } else {
            setOpenId(id);
        }
    }

    return (
        <Wrapper name="FAQ">
            <div className="container">
                <FaqWrapper>
                    <FaqTitlle>Frequently Asked Questions</FaqTitlle>
                    <FaqList>
                        {faqData.map(faqItem => {
                            return (
                                <FAQItem
                                    key={faqItem.id}
                                    onClick={handleClick}
                                    faqItem={faqItem}
                                    isOpen={faqItem.id === openId}
                                />
                            );
                        })}
                    </FaqList>
                    <FaqSecondTitleWrapper>
                        <FaqSecondTitle>
                            Didn't find the answer to your question?
                        </FaqSecondTitle>
                        <FaqLinkWrapper>
                            <FaqLink onClick={scrollContactUs}>
                                Contact Us
                                <FaqIconWrapper>
                                    <Down />
                                </FaqIconWrapper>
                            </FaqLink>
                        </FaqLinkWrapper>
                    </FaqSecondTitleWrapper>
                </FaqWrapper>
            </div>
        </Wrapper>
    );
}