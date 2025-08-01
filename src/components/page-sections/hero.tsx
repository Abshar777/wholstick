import Link from "next/link";

const Hero = () => {
  return (
    <div className="hero hero-bg-image hero-video">
      {/* Video Start */}
      <div className="hero-bg-video">
        {/* Selfhosted Video */}
        <video autoPlay muted loop id="myvideo">
          <source
            src="https://demo.awaikenthemes.com/assets/videos/fitwell-video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Youtube Video (Commented out)
        <div
          id="herovideo"
          className="player"
          data-property="{videoURL:'74DWwSxsVSs',containment:'.hero-video', showControls:false, autoPlay:true, loop:true, vol:0, mute:false, startAt:0,  stopAt:296, opacity:1, addRaster:true, quality:'large', optimizeDisplay:true}"
        ></div>
        */}
      </div>
      {/* Video End */}

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            {/* Hero Content Start */}
            <div className="hero-content">
              {/* Section Title Start */}
              <div className="section-title dark-section">
                <h1 className="text-anime-style-2" data-cursor="-opaque">
                  Your body can <span>stand almost</span> anything.
                </h1>
                <p className="wow fadeInUp">
                  It's your mind that needs convincing. Push past your limits,
                  stay committed, and watch as your body transform into
                  powerhouse of strength and resilience. Start your journey
                  today & truly capable of!
                </p>
              </div>
              {/* Section Title End */}

              {/* Hero Counter Box Start */}
              <div className="hero-counter-box">
                {/* Hero Counter Item Start */}
                <div className="hero-counter-item">
                  <h3>
                    <span className="counter">1200</span>+
                  </h3>
                  <p>Active Members</p>
                </div>
                {/* Hero Counter Item End */}

                <div className="hero-counter-item">
                  <h3>
                    <span className="counter">12</span>+
                  </h3>
                  <p>Certified Trainers</p>
                </div>

                <div className="hero-counter-item">
                  <h3>
                    <span className="counter">20</span>+
                  </h3>
                  <p>Year Of Experience</p>
                </div>
              </div>
              {/* Hero Counter Box End */}

              {/* Hero Button Start */}
              <div className="hero-btn wow fadeInUp" data-wow-delay="0.2s">
                <Link href="contact.html" className="btn-default">
                  Get Started
                </Link>
                <Link href="about.html" className="btn-default btn-highlighted">
                  Explore More
                </Link>
              </div>
              {/* Hero Button End */}
            </div>
            {/* Hero Content End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
