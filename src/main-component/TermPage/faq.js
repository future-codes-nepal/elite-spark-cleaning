import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const FAQ = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="wpo-benefits-section">
      <h2>Frequently Ask Questions</h2>
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="wpo-benefits-item">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography>
                  {" "}
                  What areas do you provide cleaning services for?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We provide cleaning services across all of Auckland and select
                  areas in New Zealand. Contact us to check if we cover your
                  location.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Typography>
                  {" "}
                  Are your cleaning products safe and eco-friendly?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes! We use environmentally friendly and non-toxic cleaning
                  products to ensure a safe and healthy environment for you,
                  your family, and pets.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Typography> How do I book a cleaning service?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  You can book a service via our website, email, or phone. We
                  recommend booking in advance to secure your preferred date and
                  time.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography>
                  Do you provide one-time and regular cleaning services?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Yes, we offer flexible options including one-time deep cleans,
                  regular maintenance, and specialized services such as
                  post-construction or event cleaning.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Typography>
                  {" "}
                  What if I need to cancel or reschedule my cleaning?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Cancellations or reschedules must be made at least 24 hours in
                  advance. Our team will assist you in rearranging your
                  appointment or processing refunds if applicable.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
