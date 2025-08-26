import React from "react";
import { Link } from "react-router-dom";
import Team from "../../api/team";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const TeamSection = (props) => {
  return (
    <section className="wpo-team-section section-padding">
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-5">
            <div className="wpo-section-title">
              <h2>Expert Cleaners</h2>
              <p>
                Our certified team of cleaning professionals brings experience,
                precision, and dedication to every project. Each member is
                trained to deliver spotless results and exceptional service,
                ensuring your home or office always looks its best. Meet the
                experts behind Elite Spark—your trusted partners in cleanliness.
                .
              </p>
            </div>
          </div>
        </div>
        <div className="wpo-team-wrap">
          <div className="row">
            {Team.map((team, aitem) => (
              <div className="col col-lg-6 col-md-12 col-12" key={aitem}>
                <div className="wpo-team-item">
                  <div className="wpo-team-img">
                    <img src={team.tImg} alt="" />
                  </div>
                  <div className="wpo-team-text">
                    <span>Cleaner Leader</span>
                    <h2>
                      <Link
                        onClick={ClickHandler}
                        to={`/team-single/${team.Id}`}
                      >
                        {team.name}
                      </Link>
                    </h2>
                    <div className="social">
                      <ul>
                        <li>
                          <Link to="/">
                            <i className="ti-pinterest"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="ti-twitter-alt"></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="/">
                            <i className="ti-skype"></i>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
