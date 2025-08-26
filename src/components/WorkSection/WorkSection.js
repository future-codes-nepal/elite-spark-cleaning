import React from "react";

import wImg1 from "../../images/work/1.jpg";
import wImg2 from "../../images/work/2.jpg";
import wImg3 from "../../images/work/3.jpg";

const WorkSection = (props) => {
  return (
    <section className="wpo-work-section section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="wpo-section-title">
              <h2>How We Serve You</h2>
              <p>
                <b>Looking for the best cleaning services near you? </b> </p>
    
                <br></br>
                <p>
                    Elite Spark delivers professional cleaning solutions for homes and offices. We understand the challenges of maintaining a spotless space amid a busy schedule. Our certified team is dedicated to providing top-quality cleaning services tailored to your specific needs and preferences.
                </p>
                <p>At Elite Spark, we offer unmatched flexibility in our cleaning services. We work closely with you to create a customized cleaning plan that fits your lifestyle, office schedule, and budget. Whether you need regular home cleaning, office maintenance, move-in/move-out cleaning, or a one-time deep clean, we’ve got you covered.</p>
              <p>Don’t settle for a one-size-fits-all approach. Trust Elite Spark for cleaning services that exceed expectations. Contact us today to schedule a consultation and experience the convenience and reliability of our custom cleaning solutions.</p>  
              
            </div>
          </div>
        </div>
        <div className="wpo-work-wrap">
          <div className="row">
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="wpo-work-item">
                <div className="wpo-work-img">
                  <img src={wImg1} alt="" />
                </div>
                <div className="wpo-work-text">
                  <h2>Easy Online Scheduling</h2>
                </div>
                <div className="visible-text">
                  <span>1</span>
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="wpo-work-item">
                <div className="wpo-work-text">
                  <h2>
                    Get Clean <br /> And Fresh
                  </h2>
                </div>
                <div className="visible-text">
                  <span>2</span>
                </div>
                <div className="wpo-work-img">
                  <img src={wImg2} alt="" />
                </div>
              </div>
            </div>
            <div className="col col-lg-4 col-md-6 col-12">
              <div className="wpo-work-item">
                <div className="wpo-work-img">
                  <img src={wImg3} alt="" />
                </div>
                <div className="wpo-work-text">
                  <h2>Enjoy Happy Cleanliness</h2>
                </div>
                <div className="visible-text">
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
