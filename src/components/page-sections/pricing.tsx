import React from "react";

const pricingData = [
  {
    title: "Weekly pass",
    price: "$19",
    duration: "week",
    features: [
      "Fitness Floor & Cardio",
      "30-Minute Consultation",
      "Club 360 Class",
      "50% Off On Guest Passes",
      "Staffed Hours Only",
    ],
    highlight: true,
    delay: "",
  },
  {
    title: "Monthly pass",
    price: "$39",
    duration: "month",
    features: [
      "Fitness Floor & Cardio",
      "30-Minute Consultation",
      "Club 360 Class",
      "50% Off On Guest Passes",
      "Staffed Hours Only",
    ],
    highlight: false,
    delay: "0.2s",
  },
  {
    title: "yearly pass",
    price: "$199",
    duration: "year",
    features: [
      "Fitness Floor & Cardio",
      "30-Minute Consultation",
      "Club 360 Class",
      "50% Off On Guest Passes",
      "Staffed Hours Only",
    ],
    highlight: false,
    delay: "0.4s",
  },
];

const benefits = [
  {
    icon: "images/icon-pricing-benefit-1.svg",
    text: "Get 30 day free trial",
  },
  {
    icon: "images/icon-pricing-benefit-2.svg",
    text: "No any hidden fees pay",
  },
  {
    icon: "images/icon-pricing-benefit-3.svg",
    text: "You can  cancel anytime ",
  },
];

const PricingSection: React.FC = () => {
  return (
    <div className="our-pricing light-section">
      <div className="container">
        <div className="row section-row">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <div className="section-bg-title wow fadeInUp">
                <span>pricing</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                pricing plan
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Transform Your Body with Our <span>Dynamic Fitness</span>{" "}
                Classes
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {pricingData.map((item, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div
                className={`pricing-item wow fadeInUp ${
                  item.highlight ? "highlighted-box" : ""
                }`}
                data-wow-delay={item.delay}
              >
                <div className="pricing-header">
                  <h3>{item.title}</h3>
                  <h2>
                    {item.price}/<sub>{item.duration}</sub>
                  </h2>
                </div>

                <div className="pricing-body">
                  <ul>
                    {item.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="pricing-btn">
                  <a href="contact.html" className="btn-default">
                    Get Membership
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="col-lg-12">
            <div
              className="pricing-benefit-list wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <ul>
                {benefits.map((benefit, idx) => (
                  <li key={idx}>
                    <img src={benefit.icon} alt="" />
                    {benefit.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
