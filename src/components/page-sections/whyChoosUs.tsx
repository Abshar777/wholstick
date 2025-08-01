import React from "react";
import BlurCirclesBg from "../ui/blurCirclesBg";

const steps = [
  {
    number: "01",
    title: "personalized fitness plans",
    description:
      "We tailor every workout to fit your unique goals and fitness level ensuring that you make the most progress.",
    delay: "",
  },
  {
    number: "02",
    title: "results-driven focus",
    description:
      "Everything we do is designed to help you achieve measurable results, whether you're aiming for weight loss.",
    delay: "0.2s",
  },
  {
    number: "03",
    title: "state-of-the-art equipment",
    description:
      "We provide the latest in gym equipment, from cardio machines to free weights, designed to support every type.",
    delay: "0.4s",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <div className="why-choose-us">
      <div className="container relative">
        {/* <BlurCirclesBg /> */}
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Why Choose Content Start */}
            <div className="why-choose-content">
              {/* Section Title Start */}
              <div className="section-title section-title-center">
                <div className="section-bg-title wow fadeInUp">
                  <span>why us</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  why choose us
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Elevate fitness with the <span>best way</span> possible
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  We offer a fitness journey that's tailored to your goals,
                  supported by professional trainers and a welcoming community.
                  Whether it's weight loss, strength building, or overall
                  wellness, our proven methods.
                </p>
              </div>
              {/* Section Title End */}

              {/* Why Choose Steps Start */}
              <div className="why-choose-steps">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className="why-choose-step-item wow fadeInUp"
                    data-wow-delay={step.delay}
                  >
                    <div className="why-choose-step-no">
                      <h2>{step.number}</h2>
                    </div>
                    <div className="why-choose-step-content">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Why Choose Steps End */}
            </div>
            {/* Why Choose Content End */}
          </div>

          <div className="col-lg-6">
            {/* Why Choose Image Start */}
            <div className="why-choose-image">
              {/* Why Choose Img Box Start */}
              <div className="why-choose-img-box-1">
                <div className="why-choose-img-1">
                  <figure className="image-anime reveal">
                    <img src="images/why-choose-image-1.jpg" alt="" />
                  </figure>
                </div>
                <div className="why-choose-img-2">
                  <figure className="image-anime reveal">
                    <img src="images/why-choose-image-2.jpg" alt="" />
                  </figure>
                </div>
              </div>
              {/* Why Choose Img Box End */}

              {/* Why Choose Img Box Start */}
              <div className="why-choose-img-box-2">
                <div className="why-choose-img-3">
                  <figure className="image-anime reveal">
                    <img src="images/why-choose-image-3.jpg" alt="" />
                  </figure>
                </div>
                <div className="why-choose-img-4">
                  <figure className="image-anime reveal">
                    <img src="images/why-choose-image-4.jpg" alt="" />
                  </figure>
                </div>
              </div>
              {/* Why Choose Img Box End */}

              {/* Contact Now Circle Start */}
              <div className="contact-now-circle">
                <a href="contact.html">
                  <img src="images/contact-us-circle.svg" alt="" />
                </a>
              </div>
              {/* Contact Now Circle End */}
            </div>
            {/* Why Choose Image End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
