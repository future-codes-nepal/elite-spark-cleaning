import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import Team from "../../api/team";
import Footer from "../../components/footer/Footer.js";

const TeamSinglePage = (props) => {
  const { id } = useParams();

  const TeamDetails = Team.find((item) => item.Id === id);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <Navbar />
      <PageTitle pageTitle={TeamDetails.name} pagesub={TeamDetails.title} />
      <div className="team-pg-area section-padding">
        <div className="container">
          <div className="team-info-wrap">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="team-info-img">
                  <img src={TeamDetails.tImg} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="team-info-text">
                  <h2>{TeamDetails.name}</h2>
                  <ul>
                    <li>
                      Position: <span>Cleaner Leader</span>
                    </li>
                    <li>
                      Practice Area:<span>{TeamDetails.title}</span>
                    </li>
                    <li>
                      Experience:<span>12 Years</span>
                    </li>
                    <li>
                      Address:
                      <span>
                        45 Queen Street, Auckland Central, Auckland, New Zealand
                      </span>
                    </li>
                    <li>
                      Phone:<span>+04 21 568 7467</span>
                    </li>
                    <li>
                      Email:<span>youremail@gmail.com</span>
                    </li>
                    <li>
                      Fax:<span>568 746 987</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="exprience-area">
            <div className="row">
              <div className="col-lg-12">
                <div className="exprience-wrap">
                  <h2>Personal Experience</h2>
                  <p>
                    Alex Morgan has over a decade of hands-on experience leading
                    cleaning teams across both residential and commercial
                    sectors in New Zealand. From coordinating daily operations
                    to supervising large-scale projects, Alex ensures every job
                    is completed efficiently and to the highest standard. His
                    expertise includes implementing eco-friendly cleaning
                    practices, optimizing workflows, and maintaining strict
                    health and safety standards.
                  </p>
                  <p>
                    Throughout his career, Alex has been instrumental in
                    training and mentoring staff, introducing innovative
                    cleaning techniques, and managing client relationships with
                    professionalism and care. His focus on quality, attention to
                    detail, and dedication to creating spotless, welcoming
                    environments has earned him a reputation as a trusted leader
                    in the cleaning industry.
                  </p>
                </div>
                <div className="at-progress">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                      <div className="progress yellow">
                        <span className="progress-left">
                          <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">20+</div>
                        <div className="progress-name">
                          <span>Award</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                      <div className="progress blue">
                        <span className="progress-left">
                          <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">90%</div>
                        <div className="progress-name">
                          <span>Happy Client</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                      <div className="progress pink">
                        <span className="progress-left">
                          <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">95%</div>
                        <div className="progress-name">
                          <span>Project Done</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12 custom-grid">
                      <div className="progress green">
                        <span className="progress-left">
                          <span className="progress-bar"></span>
                        </span>
                        <span className="progress-right">
                          <span className="progress-bar"></span>
                        </span>
                        <div className="progress-value">100+</div>
                        <div className="progress-name">
                          <span>Project</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="education-area ex-wiget">
                  <h2>Education</h2>
                  <ul>
                    <li>Bachelor’s Degree in Facility Management</li>
                    <li>Professional Cleaning Certifications</li>
                    <li>Workplace Health & Safety Training</li>
                    <li>Leadership & Team Management Courses</li>
                  </ul>
                </div>
                <div className="language-area ex-wiget">
                  <h2>Language</h2>
                  <ul>
                    <li>Māori(fluent), English (fluent), Dutch.</li>
                  </ul>
                </div>
                <div className="wpo-contact-area ex-wiget">
                  <h2>Contact Me</h2>
                  <div className="quote-form">
                    <form onSubmit={SubmitHandler}>
                      <div className="form-group half-col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Name:"
                          name="name"
                        />
                      </div>
                      <div className="form-group half-col">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email:"
                          name="email"
                        />
                      </div>
                      <div className="form-group half-col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Subject:"
                          name="subject"
                        />
                      </div>
                      <div className="form-group half-col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Address:"
                          name="address"
                        />
                      </div>
                      <div className="form-group full-col">
                        <textarea
                          className="form-control"
                          name="note"
                          placeholder="Description..."
                        ></textarea>
                      </div>
                      <div className="form-group full-col">
                        <button className="btn theme-btn" type="submit">
                          <i
                            className="fa fa-angle-double-right"
                            aria-hidden="true"
                          ></i>{" "}
                          Get In Touch
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default TeamSinglePage;
