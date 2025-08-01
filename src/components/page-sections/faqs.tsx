import React from 'react';

const faqs = [
  {
    id: 1,
    question: 'What types of fitness classes do you offer?',
    answer:
      'We offer a wide variety of fitness classes including HIIT, yoga, spin, strength training, cardio, and more.',
    delay: '0.4s',
    show: true,
  },
  {
    id: 2,
    question: 'Do I need to be a member to attend a class?',
    answer:
      'We offer a wide variety of fitness classes including HIIT, yoga, spin, strength training, cardio, and more.',
    delay: '0.6s',
    show: false,
  },
  {
    id: 3,
    question: 'What should I bring to my first workout?',
    answer:
      'We offer a wide variety of fitness classes including HIIT, yoga, spin, strength training, cardio, and more.',
    delay: '0.8s',
    show: false,
  },
  {
    id: 4,
    question: 'What is your cancellation policy for classes?',
    answer:
      'We offer a wide variety of fitness classes including HIIT, yoga, spin, strength training, cardio, and more.',
    delay: '1s',
    show: false,
  },
  {
    id: 5,
    question: 'Do you have any special offers for new members?',
    answer:
      'We offer a wide variety of fitness classes including HIIT, yoga, spin, strength training, cardio, and more.',
    delay: '1s',
    show: false,
  },
];

const FaqSection = () => {
  return (
    <div className="our-faqs light-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Faq Image Start */}
            <div className="faq-image">
              <div className="faq-img-1">
                <figure className="image-anime reveal">
                  <img src="images/faq-img-1.jpg" alt="" />
                </figure>
              </div>

              <div className="faq-img-2">
                <figure className="image-anime">
                  <img src="images/faq-img-2.jpg" alt="" />
                </figure>
              </div>
            </div>
            {/* Faq Image End */}
          </div>

          <div className="col-lg-6">
            {/* Faqs Content Start */}
            <div className="faqs-content">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <div className="section-bg-title wow fadeInUp">
                  <span>faqs</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  Frequently Asked Questions
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Answers to your <span>most common</span> questions
                </h2>
              </div>
              {/* Section Title End */}

              {/* FAQ Accordion Start */}
              <div className="faq-accordion" id="accordion">
                {faqs.map((faq, idx) => (
                  <div
                    className="accordion-item wow fadeInUp"
                    data-wow-delay={faq.delay}
                    key={faq.id}
                  >
                    <h2 className="accordion-header" id={`heading${faq.id}`}>
                      <button
                        className={`accordion-button ${!faq.show ? 'collapsed' : ''}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${faq.id}`}
                        aria-expanded={faq.show ? 'true' : 'false'}
                        aria-controls={`collapse${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse${faq.id}`}
                      className={`accordion-collapse collapse ${faq.show ? 'show' : ''}`}
                      aria-labelledby={`heading${faq.id}`}
                      data-bs-parent="#accordion"
                    >
                      <div className="accordion-body">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* FAQ Accordion End */}
            </div>
            {/* Faqs Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
