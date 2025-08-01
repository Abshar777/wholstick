import React from 'react';

const testimonials = [
  {
    content:
      "Joining this gym has been life-changing! The trainers are incredibly knowledgeable, and the community is so welcoming. I've lost 15 pounds and feel stronger than ever.",
    author: {
      name: 'jemmy D',
      company: 'UKco - United Kingdom Co.',
      image: 'images/author-1.jpg',
    },
  },
  {
    content:
      "Joining this gym has been life-changing! The trainers are incredibly knowledgeable, and the community is so welcoming. I've lost 15 pounds and feel stronger than ever.",
    author: {
      name: 'eleanor pena',
      company: 'BritUnion - British Union',
      image: 'images/author-2.jpg',
    },
  },
];

const Testimonials = () => {
  return (
    <div className="our-testimonials">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <div className="section-bg-title wow fadeInUp">
                <span>reviews</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                Client Testimonials
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Inspiring Journeys: <span>Client Testimonials</span>
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Testimonial Slider Start */}
            <div className="testimonial-slider">
              <div className="swiper">
                <div className="swiper-wrapper" data-cursor-text="Drag">
                  {testimonials.map((testimonial, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="testimonial-item">
                        <div className="testimonial-content">
                          <p>{testimonial.content}</p>
                        </div>
                        <div className="author-info">
                          <div className="author-image">
                            <figure className="image-anime">
                              <img src={testimonial.author.image} alt="" />
                            </figure>
                          </div>
                          <div className="author-content">
                            <h3>{testimonial.author.name}</h3>
                            <p>{testimonial.author.company}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="testimonial-btn">
                  <div className="testimonial-btn-prev"></div>
                  <div className="testimonial-btn-next"></div>
                </div>
              </div>
            </div>
            {/* Testimonial Slider End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
