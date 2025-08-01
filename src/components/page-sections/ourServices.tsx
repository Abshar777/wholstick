import React from "react";
import BlurCirclesBg from "../ui/blurCirclesBg";

const services = [
  {
    title: "group workout",
    image: "images/service-1.jpg",
    href: "service-single.html",
  },
  {
    title: "personal training",
    image: "images/service-2.jpg",
    href: "service-single.html",
  },
  {
    title: "muscle building",
    image: "images/service-3.jpg",
    href: "service-single.html",
  },
  {
    title: "Nutrition Plans",
    image: "images/service-4.jpg",
    href: "service-single.html",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <div className="our-services light-section">
      <div className="container relative">
      <BlurCirclesBg/>
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <div className="section-bg-title wow fadeInUp">
                <span>classes</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                fitness class
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Transform Your Body with Our <span>Dynamic Fitness</span>{" "}
                Classes
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            {/* Services Slider Start */}
            <div className="services-slider">
              <div className="swiper">
                <div className="swiper-wrapper">
                  {services.map((service, index) => (
                    <div className="swiper-slide" key={index}>
                      {/* Service Item Start */}
                      <div className="service-item">
                        {/* Service Image Start */}
                        <div className="service-image">
                          <a href={service.href} data-cursor-text="View">
                            <figure className="image-anime">
                              <img src={service.image} alt="" />
                            </figure>
                          </a>
                        </div>
                        {/* Service Image End */}

                        {/* Service Body Start */}
                        <div className="service-body">
                          {/* Service Content Start */}
                          <div className="service-content">
                            <h3>
                              <a href={service.href}>{service.title}</a>
                            </h3>
                          </div>
                          {/* Service Content End */}

                          {/* Service Readmore Button Start */}
                          <div className="service-readmore-btn">
                            <a href={service.href} className="readmore-btn">
                              read more
                            </a>
                          </div>
                          {/* Service Readmore Button End */}
                        </div>
                        {/* Service Body End */}
                      </div>
                      {/* Service Item End */}
                    </div>
                  ))}
                </div>
                <div className="services-pagination"></div>
              </div>
            </div>
            {/* Services Slider End */}
          </div>

          <div className="col-lg-12">
            {/* Section Footer Text Start */}
            <div className="section-footer-text wow fadeInUp" data-wow-delay="0.4s">
              <p>
                Expert guidance for your fitness journey.
                <a href="contact.html"> Join us today and start transforming!</a>
              </p>
            </div>
            {/* Section Footer Text End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
