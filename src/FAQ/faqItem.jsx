
import {
    FaqItem,
    FaqButton,
    FaqIconWrapper,
    Minus,
    Plus,
    FaqQuestions,
    FaqAnswers,
} from './faq.styled';

export function FAQItem({ faqItem, onClick, isOpen }) {
    
const {question, answer } = faqItem;

    return (
        <FaqItem>
            <FaqButton
                type="button"
                aria-label="Toggle answer"
                onClick={onClick}
            >
                <FaqIconWrapper>
                    {isOpen ? (<Minus />):(<Plus />)}
                </FaqIconWrapper>
                <FaqQuestions >{question}</FaqQuestions>
            </FaqButton>
            
            {isOpen && <FaqAnswers>{answer}</FaqAnswers>}
        </FaqItem>
    );
}