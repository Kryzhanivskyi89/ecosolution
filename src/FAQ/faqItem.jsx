import { useRef } from 'react';
import {
    FaqItem,
    FaqButton,
    FaqIconWrapper,
    Minus,
    Plus,
    FaqQuestions,
    FaqDrop,
    FaqAnswers,
} from './faq.styled';

export function FAQItem({ faqItem, onClick, isOpen }) {
    const faqAnswerRef = useRef(null);

    const {id, question, answer } = faqItem;

    return (
        <FaqItem>
            <FaqButton
                type="button"
                onClick={() => onClick(id)}
            >
                <FaqIconWrapper>
                    {isOpen ? (<Minus />):(<Plus />)}
                </FaqIconWrapper>
                <FaqQuestions>{question}</FaqQuestions>
            </FaqButton>
            <FaqDrop
                style={
                    isOpen
                        ? { height: faqAnswerRef.current?.scrollHeight } 
                        : { height: 0 }
                }
            >
                <FaqAnswers ref={faqAnswerRef}>
                    {answer}
                </FaqAnswers>
            
            </FaqDrop>
        </FaqItem>
    );
}