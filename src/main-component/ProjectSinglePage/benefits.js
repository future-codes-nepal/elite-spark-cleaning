import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Benefits = (props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className="wpo-benefits-section">
      <h2>Benefits</h2>
      <div className="row">
        <div className="col-lg-12 col-12">
          <div className="wpo-benefits-item">
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={""} // you can add an icon like <ExpandMoreIcon /> if you want
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography>Guaranteed Bond-Return Readiness</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our end-of-lease cleaning is designed to meet strict property
                  management standards, ensuring your home is spotless and
                  maximizing the chance of full bond return.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography>Hassle-Free Move-Out Experience</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We handle the entire cleaning process from top to bottom, so
                  you can focus on your move without worrying about scrubbing or
                  cleaning tasks.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography>Eco-Friendly Cleaning Solutions</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We use safe, eco-friendly cleaning products and modern
                  equipment to protect your property and the environment,
                  without compromising on results.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel4-content"
                id="panel4-header"
              >
                <Typography>Experienced & Trusted Team</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Our professional cleaners are vetted, trained, and experienced
                  in end-of-lease cleaning, delivering consistent, high-quality
                  results every time.
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={""}
                aria-controls="panel5-content"
                id="panel5-header"
              >
                <Typography>Flexible Scheduling & Fast Turnaround</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  We work around your schedule, ensuring minimal disruption and
                  completing every job efficiently without compromising quality.
                </Typography>
              </AccordionDetails>
            </Accordion>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
