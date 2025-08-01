import Link from "next/link";
import BlurCirclesBg from "../ui/blurCirclesBg";

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="container relative">
        {/* blur circle with orange color  */}
        <BlurCirclesBg/>
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* About Us Images Start */}
            <div className="about-us-images">
              {/* About Image 1 Start */}
              <div className="about-img-1">
                <figure className="image-anime reveal">
                  <img src="/images/about-img-1.jpg" alt="" />
                </figure>
              </div>
              {/* About Image 1 End */}

              {/* About Image 2 Start */}
              <div className="about-img-2">
                <figure className="image-anime reveal">
                  <img src="/images/about-img-2.jpg" alt="" />
                </figure>
              </div>
              {/* About Image 2 End */}

              {/* About Image 3 Start */}
              <div className="about-img-3">
                <figure className="image-anime reveal">
                  <img src="/images/about-img-3.jpg" alt="" />
                </figure>
              </div>
              {/* About Image 3 End */}
            </div>
            {/* About Us Images End */}
          </div>

          <div className="col-lg-6">
            {/* About Us Content Start */}
            <div className="about-us-content">
              {/* Section Title Start */}
              <div className="section-title">
                <div className="section-bg-title wow fadeInUp">
                  <span>about us</span>
                </div>
                <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                  About us
                </h3>
                <h2 className="text-anime-style-2" data-cursor="-opaque">
                  Empowering you to achieve <span>your fitness</span> goals
                </h2>
                <p className="wow fadeInUp" data-wow-delay="0.4s">
                  We believe fitness is more than just a workout—it's a
                  lifestyle. With top-of-the-line facilities, certified
                  trainers, and a supportive community, we're here to inspire
                  and guide you every step of the way.
                </p>
              </div>
              {/* Section Title End */}

              {/* About Us Body Start */}
              <div className="about-us-body wow fadeInUp" data-wow-delay="0.6s">
                {/* About Us Body Item Start */}
                <div className="about-us-body-item">
                  <h3>Personal Trainer</h3>
                  <p>
                    Achieve your fitness goals with the guidance of our
                    certified trainers.
                  </p>
                </div>

                <div className="about-us-body-item">
                  <h3>Cardio Programs</h3>
                  <p>
                    From steady-state runs to interval sprints, our treadmill
                    programs.
                  </p>
                </div>

                <div className="about-us-body-item">
                  <h3>Quality Equipment</h3>
                  <p>
                    Our gym is equipped with the latest cardio & strength
                    machines.
                  </p>
                </div>

                <div className="about-us-body-item">
                  <h3>Healthy Nutritions</h3>
                  <p>
                    Fuel your fitness journey with customized meal plans for
                    you.
                  </p>
                </div>
                {/* About Us Body Item End */}
              </div>
              {/* About Us Body End */}

              {/* About Contact Button Start */}
              <div className="about-us-btn wow fadeInUp" data-wow-delay="0.8s">
                <Link href="about.html" className="btn-default">
                  more about us
                </Link>
              </div>
              {/* About Contact Button End */}
            </div>
            {/* About Us Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
