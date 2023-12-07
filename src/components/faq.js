import * as React from "react";

export default function FAQ({ faqData }) {

  return (
    <div className="faq">
      <div className="faq_inner">
        <h3 className="p60">Frequently Asked Questions</h3>
        {faqData.map(({ question, answer }) => (
          question && answer && (
            <Accordion key={question} question={question} answer={answer} />
          )
        ))}
      </div>
    </div>
  );
}

function Accordion({ question, answer }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion p60">
      <button className="accordion__button" onClick={toggleAccordion}>
        <h3>{question}</h3>
        <div className="arr">
          <svg className={isOpen?'acti':'nn'} width="23" height="13" viewBox="0 0 23 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L11.5 11.5L22 1" stroke="#C4C9CA" strokeOpacity="1"/>
          </svg>
        </div>
      </button>
      {isOpen && answer && (
        <div className="accordion__content">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}