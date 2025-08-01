const Footer = () => {
    return (
      <footer className="footer-main light-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              {/* About Footer start */}
              <div className="about-footer">
                {/* Footer Logo Start */}
                <div className="footer-logo">
                 <h1>wholstick</h1>
                </div>
                {/* Footer Logo End */}
  
                {/* Footer Contact Box Start */}
                <div className="about-footer-content">
                  <p>Push harder, go further. Your fitness journey starts today!</p>
                </div>
                {/* Footer Contact Box End */}
  
                {/* Footer Newsletters Form Start */}
                <div className="footer-newsletters-form">
                  <form id="newslettersForm" action="#" method="POST">
                    <div className="form-group">
                      <input
                        type="email"
                        name="mail"
                        className="form-control"
                        id="mail"
                        placeholder="Enter your email"
                        required
                      />
                      <button type="submit">
                        <img src="images/arrow-black.svg" alt="" />
                      </button>
                    </div>
                  </form>
                </div>
                {/* Footer Newsletters Form End */}
              </div>
              {/* About Footer End */}
            </div>
  
            <div className="col-lg-3 col-md-6">
              {/* Footer Links Start */}
              <div className="footer-links">
                <h3>contact us</h3>
  
                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="images/icon-phone.svg" alt="" />
                  </div>
                  <div className="footer-contact-content">
                    <p>
                      <a href="tel:+91123456789">+91 123 456 789</a>
                    </p>
                  </div>
                </div>
                {/* Footer Contact Item End */}
  
                {/* Footer Contact Item Start */}
                <div className="footer-contact-item">
                  <div className="icon-box">
                    <img src="images/icon-mail.svg" alt="" />
                  </div>
                  <div className="footer-contact-content">
                    <p>
                      <a href="mailto:info@domainname.com">
                        info@domainname.com
                      </a>
                    </p>
                  </div>
                </div>
                {/* Footer Contact Item End */}
              </div>
              {/* Footer Links End */}
            </div>
  
            <div className="col-lg-3 col-md-6">
              {/* Footer Links start */}
              <div className="footer-links">
                <h3>our gym timing</h3>
                <ul>
                  <li>Mon - Fri : 08:00 AM - 10:00 PM</li>
                  <li>Sat - Sun : 08:00 AM - 09:00 PM</li>
                </ul>
              </div>
              {/* Footer Links end */}
            </div>
  
            <div className="col-lg-3 col-md-12">
              {/* Footer Links start */}
              <div className="footer-links">
                <h3>our location</h3>
                <ul>
                  <li>2715 Ash Dr. San Jose, South Dakota 83475</li>
                </ul>
              </div>
              {/* Footer Links end */}
            </div>
  
            <div className="col-lg-12">
              {/* Footer Copyright */}
              <div className="footer-copyright">
                <div className="footer-copyright-text">
                  <p>Copyright © 2025 All Rights Reserved.</p>
                </div>
  
                <div className="footer-social-links">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-dribbble"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Footer Copyright */}
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  