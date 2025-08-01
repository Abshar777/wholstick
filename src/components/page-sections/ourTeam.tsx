import React from "react";
import BlurCirclesBg from "../ui/blurCirclesBg";

const trainers = [
  {
    name: "Darlene Robertson",
    role: "fitness coach",
    image: "images/team-1.jpg",
    delay: "",
  },
  {
    name: "Savannah Nguyen",
    role: "fitness coach",
    image: "images/team-2.jpg",
    delay: "0.2s",
  },
  {
    name: "Cameron Williamson",
    role: "fitness coach",
    image: "images/team-3.jpg",
    delay: "0.4s",
  },
  {
    name: "Leslie Alexander",
    role: "fitness coach",
    image: "images/team-4.jpg",
    delay: "0.6s",
  },
];

const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="container relative">
        <BlurCirclesBg />
        <div className="row section-row">
          <div className="col-lg-12">
            {/* Section Title Start */}
            <div className="section-title section-title-center">
              <div className="section-bg-title wow fadeInUp">
                <span>Trainers</span>
              </div>
              <h3 className="wow fadeInUp" data-wow-delay="0.2s">
                Our Trainers
              </h3>
              <h2 className="text-anime-style-2" data-cursor="-opaque">
                Your Fitness Journey Starts with <span>Our Expert</span>{" "}
                Trainers
              </h2>
            </div>
            {/* Section Title End */}
          </div>
        </div>

        <div className="row">
          {trainers.map((trainer, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              {/* Team Item Start */}
              <div
                className="team-item wow fadeInUp"
                data-wow-delay={trainer.delay}
              >
                {/* team Image Start */}
                <div className="team-image">
                  <a href="team-single.html" data-cursor-text="View">
                    <figure className="image-anime">
                      <img src={trainer.image} alt="" />
                    </figure>
                  </a>
                </div>
                {/* team Image End */}

                {/* Team Body Start */}
                <div className="team-body">
                  {/* Team Content Start */}
                  <div className="team-content">
                    <p>{trainer.role}</p>
                    <h3>
                      <a href="team-single.html">{trainer.name}</a>
                    </h3>
                  </div>
                  {/* Team Content End */}

                  {/* Team Social List Start */}
                  <div className="team-social-list">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="fa-brands fa-dribbble"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Team Social List End */}
                </div>
                {/* Team Body End */}
              </div>
              {/* Team Item End */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
