import React from "react";
import abimg from "../../images/about.jpg";
import sign from "../../images/signeture.png";

const About = (props) => {
  return (
    <section className="wpo-about-section section-padding">
      <div className="container">
        <div className="wpo-about-section-wrapper">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-12">
              <div className="wpo-about-img">
                <img src={abimg} alt="" />
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12">
              <div className="wpo-about-content">
                <div className="wpo-section-title-s2">
                  <h2>Over 10+ Years Experience In Cleaning Service</h2>
                </div>
                <div className="wpo-about-content-inner">
                  <p>
                    At Elite Spark, we’ve spent over a decade perfecting the art
                    of cleanliness. From homes to offices, we understand that a
                    truly clean space isn’t just about appearance—it’s about
                    health, comfort, and peace of mind. Based in New Zealand,
                    our dedicated team delivers reliable, high-quality cleaning
                    solutions tailored to your needs. We combine proven
                    techniques, modern equipment, and eco-friendly products to
                    ensure every space sparkles while keeping your environment
                    safe.
                  </p>
                  <p>
                    We pride ourselves on professionalism, attention to detail,
                    and a commitment to exceeding expectations every time we
                    step through your door. Whether it’s a one-time deep clean,
                    regular maintenance, or specialized services like carpet,
                    upholstery, and post-construction cleanup, Elite Spark is
                    your trusted partner for a spotless, healthy, and welcoming
                    space.
                  </p>
                  <div className="signeture">
                    <h4>S.Sammy</h4>
                    <p> Elite Spark, CEO</p>
                    <span>
                      <img src={sign} alt="" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
