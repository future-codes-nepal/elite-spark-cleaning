import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import Residential from './Residential';
import Commercial from './Commercial';


const ServiceSectionS2 = (props) => {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }


    return (
        <section className="wpo-service-section-s2 section-padding">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-lg-5">
                        <div className="wpo-section-title-s2">
                             <h2>What We Do?</h2>
        <p><b>Your Trusted Cleaning Partners</b></p>
        <p>
            Elite Spark offers a wide range of cleaning services designed to suit both residential and commercial spaces. Our services include:
        </p>
        <ul>
            <li><b>Residential Cleaning:</b> Keep your home spotless with deep cleaning, regular maintenance, and eco-friendly solutions.</li>
            <li><b>Commercial Cleaning:</b> Impress clients and employees with hygienic, well-maintained offices and workspaces.</li>
            <li><b>Specialized Services:</b> From carpet and upholstery cleaning to post-construction and event cleanup, we handle every mess efficiently.</li>
        </ul>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="wpo-service-tabs">
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={`theme-btn `}
                                        onClick={() => { toggle('1'); }}
                                    >
                                        <i className="ti-home"></i> Residential
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={`theme-btn `}
                                        onClick={() => { toggle('2'); }}
                                    >
                                        <i className="ti-brush-alt"></i> Commercial
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </div>
                    </div>
                </div>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Residential/>
                    </TabPane>
                    <TabPane tabId="2">
                        <Commercial/>
                    </TabPane>
                </TabContent>
            </div>
        </section>

    )
}

export default ServiceSectionS2;