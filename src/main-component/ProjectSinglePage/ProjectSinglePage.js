import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import PageTitle from "../../components/pagetitle/PageTitle";
import Scrollbar from "../../components/scrollbar/scrollbar";
import { useParams } from "react-router-dom";
import Project from "../../api/project";
import Benefits from "./benefits";
import ServiceSidebar from "./sidebar";
import Footer from "../../components/footer/Footer.js";

const ProjectSinglePage = (props) => {
  const { id } = useParams();

  const projectDetails = Project.find((item) => item.Id === id);

  return (
    <Fragment>
      <Navbar />
      <PageTitle
        pageTitle={`${projectDetails.title} Cleaning `}
        pagesub={"Project"}
      />
      <section className="wpo-service-single-section section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="wpo-service-single-wrap">
                <div className="wpo-service-single-img">
                  <img src={projectDetails.pImg} alt="" />
                </div>

                <div className="wpo-project-details-list">
                  <div className="row">
                    <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="wpo-project-details-text">
                        <span>Client Name</span>
                        <h2>Sydney Sweeney</h2>
                      </div>
                    </div>
                    <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="wpo-project-details-text-3">
                        <span>Project Value</span>
                        <h2>$500</h2>
                      </div>
                    </div>
                    <div className="col co-l-lg-4 col-md-4 col-sm-6 col-12">
                      <div className="wpo-project-details-text">
                        <span>Date</span>
                        <h2>25 Aug 2025</h2>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wpo-service-single-content">
                  <div className="wpo-service-single-content-des">
                    <h2>{projectDetails.cTitle}</h2>
                    <p>{projectDetails.description}</p>
                    <p>
                      Moving out is never easy, but leaving behind a spotless
                      home can make all the difference. At Elite Spark, we
                      specialize in professional end-of-lease cleaning designed
                      to meet the highest property management and landlord
                      standards. Our expert team ensures that every corner is
                      thoroughly cleaned, helping tenants secure their bond
                      return and landlords present their property in its best
                      light.
                    </p>
                    <div className="wpo-service-single-sub-img">
                      <ul>
                        <li>
                          <img src={projectDetails.ssImg1} alt="" />
                        </li>
                        <li>
                          <img src={projectDetails.ssImg2} alt="" />
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="wpo-related-section">
                  <h2>Our work process</h2>
                  <div className="row">
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="wpo-related-item">
                        <div className="wpo-related-icon">
                          <i className="fi flaticon-lamp"></i>
                        </div>
                        <div className="wpo-related-text">
                          <h3>Quality We Ensure</h3>
                          <p>
                            We deliver more than just a clean space — we deliver
                            peace of mind. Every service is carried out with
                            meticulous attention to detail, ensuring nothing is
                            overlooked.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="wpo-related-item">
                        <div className="wpo-related-icon">
                          <i className="fi flaticon-medal"></i>
                        </div>
                        <div className="wpo-related-text">
                          <h3>Experienced Workers</h3>
                          <p>
                            Our cleaners are highly trained, vetted, and
                            experienced in end-of-lease standards. We know
                            exactly what property managers look for and
                            guarantee a spotless finish.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-12">
                      <div className="wpo-related-item">
                        <div className="wpo-related-icon">
                          <i className="fi flaticon-trophy"></i>
                        </div>
                        <div className="wpo-related-text">
                          <h3>Modern Equipment Use</h3>
                          <p>
                            Using industry-grade tools and eco-friendly
                            products, we provide a deeper, safer clean that
                            protects both your property and the environment.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Benefits />
              </div>
            </div>
            <ServiceSidebar />
          </div>
        </div>
      </section>
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};
export default ProjectSinglePage;
