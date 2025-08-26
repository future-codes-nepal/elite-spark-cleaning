import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import FAQ from './faq'
import Footer from '../../components/footer/Footer.js'
import tImg1 from '../../images/terms/terms.jpg'
import tImg2 from '../../images/terms/1.jpg'
import tImg3 from '../../images/terms/2.jpg'

const TermPage = (props) => {


    return (
        <Fragment>
            <Navbar />
            <PageTitle pageTitle={'Terms & Coditions'} pagesub={'Terms & Coditions'} />
            <section className="wpo-terms-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <div className="wpo-terms-wrap">
                                <div className="wpo-terms-img">
                                    <img src={tImg1} alt=""/>
                                </div>
                                <div className="wpo-terms-text">
                                   <h2>Terms and Conditions</h2>
    <p>Welcome to Elite Spark. By using our website or services, you agree to these Terms and Conditions. Please read them carefully before engaging our cleaning services or accessing any content on our site.</p>
    <p>Elite Spark provides professional cleaning services, including residential, commercial, and specialized cleaning. Service availability, scope, and pricing will be confirmed at the time of booking.</p>

    <ul>
        <li><b>Booking and Payments:</b> All services must be booked in advance via our website, email, or phone. Payments are due as per the agreed terms. Elite Spark reserves the right to cancel or reschedule services in case of unforeseen circumstances.</li>
        <li><b>Client Responsibilities:</b> Clients are responsible for providing access to the property and ensuring it is safe for our staff. Any valuable or fragile items should be secured prior to service.</li>
        <li><b>Liability:</b> Elite Spark takes all reasonable care while providing services. However, we are not liable for pre-existing damage, loss of personal items, or indirect damages. Claims must be reported within 24 hours of service completion.</li>
        <li><b>Cancellations and Refunds:</b> Cancellations must be made at least 24 hours before the scheduled service. Refunds or rescheduling will be handled according to our cancellation policy.</li>
        <li><b>Privacy:</b> Client information collected during bookings is kept confidential and used solely for service purposes, in accordance with New Zealand privacy laws.</li>
        <li><b>Intellectual Property:</b> All content on this website, including text, images, and logos, is the property of Elite Spark. No content may be copied, reproduced, or used without permission.</li>
        <li><b>Governing Law:</b> These Terms and Conditions are governed by the laws of New Zealand. Any disputes arising shall be resolved under the jurisdiction of New Zealand courts.</li>
        <li><b>Changes to Terms:</b> Elite Spark reserves the right to update or modify these Terms and Conditions at any time without prior notice. Continued use of our services constitutes acceptance of the updated terms.</li>
    </ul>

    <p>If any estimates of how long it will take the cleaning operatives to complete the job are provided, these are only estimates based on the average time it takes to clean a home or office of similar size to the Client’s. One-off cleans may take longer due to the interval between sessions, number and type of cleaning tasks, compared to regular maintenance cleaning.</p>
 <div className="row t-sub">
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={tImg2} alt=""/>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-12">
                                            <div className="wpo-p-details-img">
                                                <img src={tImg3} alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                     <p>Post-construction cleaning, event cleaning, or badly neglected homes may take up to three times longer than a well-maintained property. Therefore, the Company advises Clients to request our specialist cleaning services for Builders Cleaning or Event Cleaning.</p>

                                </div>
                                <FAQ />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default TermPage;
