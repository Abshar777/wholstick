const CtaBox = () => {
    return (
      <div className="cta-box parallaxie">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-6 order-lg-1 order-md-1 order-2">
              {/* CTA Box Image Start */}
              <div className="cta-box-image">
                <img src="images/cta-box-image.png" alt="" />
              </div>
              {/* CTA Box Image End */}
            </div>
  
            <div className="col-lg-4 col-md-6 order-lg-2 order-md-2 order-1">
              {/* CTA Box Content Start */}
              <div className="cta-box-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h2 className="text-anime-style-2" data-cursor="-opaque">
                    Get 30% off in <span>logoipsum</span>
                  </h2>
                </div>
                {/* Section Title End */}
  
                {/* Cta Box Body Start */}
                <div className="cta-box-body wow fadeInUp">
                  <ul>
                    <li>Unlimited Access to All Gym Facilities</li>
                    <li>Book a Personal Training Session</li>
                    <li>Experience the Best in Fitness</li>
                  </ul>
                </div>
                {/* Cta Box Body End */}
  
                {/* Cta Button Start */}
                <div className="cta-btn wow fadeInUp" data-wow-delay="0.2s">
                  <a href="contact.html" className="btn-default">
                    Get Membership
                  </a>
                </div>
                {/* Cta Button End */}
              </div>
              {/* CTA Box Content End */}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default CtaBox;
  