"use client";
import { Container, Row, Accordion, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function PMSInventory(index) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1100);
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const boxVariantsL = !isMobile
    ? {
        hidden: { opacity: 0, x: index % 2 === 0 ? 350 : -350 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
      }
    : { hidden: { opacity: 1 }, visible: { opacity: 1 } };

  const boxVariantsR = !isMobile
    ? {
        hidden: { opacity: 0, x: index % 2 === 0 ? -350 : 350 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
      }
    : { hidden: { opacity: 1 }, visible: { opacity: 1 } };

  const boxVariantsPop = !isMobile
    ? {
        hidden: { opacity: 0, scale: 0.2 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
      }
    : { hidden: { opacity: 1 }, visible: { opacity: 1 } };

  const boxVariantsY = !isMobile
    ? {
        hidden: { opacity: 0, y: index % 2 === 0 ? -350 : 350 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
      }
    : { hidden: { opacity: 1 }, visible: { opacity: 1 } };

  return (
    <>
      <Row className="m-l-0 m-r-0 p-l-0 p-r-0">
        <Container>
          <Row className="mt-5 text-start">
            <Col xs={12} md={6} className="motion-container">
              {!isMobile ? (
                <motion.div
                  variants={boxVariantsL}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                >
                  <h1
                    className="un-leash-Heading text-left"
                    style={{
                      color: "rgb(6 23 68)",
                      paddingBottom: "3%",
                      fontSize: "2rem",
                    }}
                  >
                    NAU 2.1 - Planned Maintenance System{" "}
                  </h1>
                  <h1 className="un-leash-command-subheading">
                    Optimizing Fleet Efficiency and Ensuring Regulatory
                    Compliance
                  </h1>
                  <p>
                    In the fast-paced world of maritime operations, keeping your
                    vessels running smoothly and safely is paramount. NAU's
                    Planned Maintenance System (PMS) is an advanced software
                    solution designed to revolutionize the way you manage your
                    fleet's maintenance needs.
                  </p>
                  <h1 className="un-leash-command-subheading m-t-20">
                    NAU's PMS: A Powerful Solution
                  </h1>
                  <p>
                    NAU's PMS addresses these challenges head-on by providing a
                    comprehensive suite of features to streamline maintenance
                    processes, improve efficiency, and guarantee regulatory
                    compliance.
                  </p>
                </motion.div>
              ) : (
                <div>
                  <h1
                    className="un-leash-Heading text-left"
                    style={{
                      color: "rgb(6 23 68)",
                      paddingBottom: "3%",
                      fontSize: "2rem",
                    }}
                  >
                    NAU 2.1 - Planned Maintenance System{" "}
                  </h1>
                  <h1 className="un-leash-command-subheading">
                    Optimizing Fleet Efficiency and Ensuring Regulatory
                    Compliance
                  </h1>
                  <p>
                    In the fast-paced world of maritime operations, keeping your
                    vessels running smoothly and safely is paramount. NAU's
                    Planned Maintenance System (PMS) is an advanced software
                    solution designed to revolutionize the way you manage your
                    fleet's maintenance needs.
                  </p>
                  <h1 className="un-leash-command-subheading m-t-20">
                    NAU's PMS: A Powerful Solution
                  </h1>
                  <p>
                    NAU's PMS addresses these challenges head-on by providing a
                    comprehensive suite of features to streamline maintenance
                    processes, improve efficiency, and guarantee regulatory
                    compliance.
                  </p>
                </div>
              )}
            </Col>
            <Col xs={12} md={6}>
              <img
                src="/Images/ERP_Orion.png"
                alt="Products"
                className="img-fluid mb-3"
              />
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="m-l-0 m-r-0 p-l-0 p-r-0">
        <Container fluid style={{ padding: "0" }}>
          <Row className="m-l-0 m-r-0 p-l-0 p-r-0">
            <Col xs={12} className="m-t-60 m-b-40 text-center">
              <h1 className="un-leash-command-heading">Orion Uptime Maestro</h1>
            </Col>
            <Col xs={12} className="p-l-0 p-r-0">
              <img src="/Images/Mockups/pms.jpg" alt="" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="m-l-0 m-r-0 p-l-0 p-r-0">
        <Container>
          <Row className="mt-5 text-start">
            <Col xs={12}>
              <h3
                className="text-left font-bold m-t-40"
                style={{ color: "rgb(6 23 68)" }}
              >
                Key Features and Benefits
              </h3>
            </Col>
            <Col xs={12} md={6} className="motion-container">
              {!isMobile ? (
                <motion.div
                  variants={boxVariantsL}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                >
                  <Accordion alwaysOpen className=" text-start">
                    <Row className="g-4  CommonAccordion">
                      <div className="col-12 col-sm-12">
                        <Accordion.Item eventKey="0" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Centralized Management
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Manage all maintenance plans and inspections from
                              a single platform, accessible from either the
                              vessel or the shore office, ensuring complete
                              operational visibility.
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Customizable Job Creation
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Create and assign maintenance tasks using
                              predefined templates including job types, ranks,
                              and SFI/Company codes for efficient workforce
                              allocation.
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Automated Tracking and Alerts
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Track equipment counters, running hours, and
                              overdue maintenance tasks with automated alerts to
                              ensure timely servicing and prevent equipment
                              failures.
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Detailed Work History
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Maintain a centralized repository of work history
                              with supporting documents and photos for improved
                              maintenance planning and auditing.
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Advanced Reporting
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Generate customizable reports on critical
                              equipment, overdue jobs, and overall maintenance
                              performance to facilitate data-driven
                              decision-making.
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Offline Functionality
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Access critical PMS data even when an internet
                              connection is unavailable (optional feature).
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </div>
                    </Row>
                  </Accordion>
                </motion.div>
              ) : (
                <div>
                  <Accordion alwaysOpen className=" text-start">
                    <Row className="g-4  CommonAccordion">
                      <div className="col-12 col-sm-12">
                        <Accordion.Item eventKey="0" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Centralized Management
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Manage all maintenance plans and inspections from
                              a single platform, accessible from either the
                              vessel or the shore office, ensuring complete
                              operational visibility.
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Customizable Job Creation
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Create and assign maintenance tasks using
                              predefined templates including job types, ranks,
                              and SFI/Company codes for efficient workforce
                              allocation.
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Automated Tracking and Alerts
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Track equipment counters, running hours, and
                              overdue maintenance tasks with automated alerts to
                              ensure timely servicing and prevent equipment
                              failures.
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Detailed Work History
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Maintain a centralized repository of work history
                              with supporting documents and photos for improved
                              maintenance planning and auditing.
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Advanced Reporting
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Generate customizable reports on critical
                              equipment, overdue jobs, and overall maintenance
                              performance to facilitate data-driven
                              decision-making.
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Offline Functionality
                          </Accordion.Header>
                          <Accordion.Body>
                            <p>
                              Access critical PMS data even when an internet
                              connection is unavailable (optional feature).
                            </p>
                          </Accordion.Body>
                        </Accordion.Item>
                      </div>
                    </Row>
                  </Accordion>
                </div>
              )}
            </Col>
            <Col xs={12} md={6}>
              <img
                src="/Images/LC/PmsLifeCycle.gif"
                alt="Products"
                className="img-fluid mt-2"
                style={{
                  boxShadow: "#6b6b6b 1px 1px 4px",
                  borderRadius: "4px",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="m-l-0 m-r-0 p-l-0 p-r-0">
        <Container className="mt-2">
          <Row className="mt-5 mb-5">
            <Col xs={12} md={12}>
              <h1
                className="text-left font-bold fs-23"
                style={{ color: "rgb(6 23 68)" }}
              >
                The NAU PMS Advantage: Advanced Features for Unmatched
                Efficiency
              </h1>
              <h1
                className="text-left font-bold fs-19 mb-3"
                style={{ color: "rgb(6 23 68)" }}
              >
                NAU's PMS goes beyond basic maintenance management by offering
                several advanced features that set it apart:
              </h1>
            </Col>
            <Col xs={12} className="motion-container">
              {!isMobile ? (
                <motion.div
                  variants={boxVariantsPop}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                >
                  <div className="features1_component-copy text-left m-t-60">
                    <div className="features-item-1">
                      <div className="layout11_item">
                        <div className="layout11_icon-wrapper">
                          <img
                            src="/Images/SVG/Stayaheadofremediationcosts-o.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="layout11_content-wrapper">
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-small">
                              User-Friendly Interface
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            An intuitive interface makes the system easy to
                            learn and use for crew members of all technical
                            levels.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-2">
                      <div className="layout11_item">
                        <div className="layout11_icon-wrapper">
                          <img
                            src="/Images/SVG/KYBandUBOchecks.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="layout11_content-wrapper">
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-small">Class Approval</h3>
                          </div>
                          <p className="paragraph-11">
                            The system is designed to meet the strict
                            requirements of classification societies, ensuring
                            regulatory compliance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-3">
                      <div className="layout11_item">
                        <div className="layout11_icon-wrapper">
                          <img
                            src="/Images/SVG/Securepage.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="layout11_content-wrapper">
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-small">
                              Synchronization Capabilities
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Seamlessly synchronize maintenance data between
                            vessels and the shore office for real-time updates
                            and centralized control.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-4">
                      <div className="layout11_item">
                        <div className="layout11_icon-wrapper">
                          <img
                            src="/Images/SVG/TargetPeople.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="layout11_content-wrapper">
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-small">
                              Inventory Integration
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Integrate with your inventory management system to
                            automatically deduct spare parts used during
                            maintenance activities.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-5">
                      <div className="layout11_item">
                        <div className="layout11_icon-wrapper">
                          <img
                            src="/Images/SVG/Key trends.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="layout11_content-wrapper">
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-small">
                              Multi-checkpoint Tracking
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Track the completion of maintenance tasks using
                            various checkpoints (checkbox, value, free text) for
                            a more granular level of detail.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div>
                  <div className="features1_component-copy text-left m-t-60">
                    <div className="features-item-1">
                      <div className="layout11_item">
                        <div className="layout11_icon-wrapper">
                          <img
                            src="/Images/SVG/Stayaheadofremediationcosts-o.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="layout11_content-wrapper">
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-small">
                              User-Friendly Interface
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            An intuitive interface makes the system easy to
                            learn and use for crew members of all technical
                            levels.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-2">
                      <div className="layout11_item">
                        <div className="layout11_icon-wrapper">
                          <img
                            src="/Images/SVG/KYBandUBOchecks.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="layout11_content-wrapper">
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-small">Class Approval</h3>
                          </div>
                          <p className="paragraph-11">
                            The system is designed to meet the strict
                            requirements of classification societies, ensuring
                            regulatory compliance.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-3">
                      <div className="layout11_item">
                        <div className="layout11_icon-wrapper">
                          <img
                            src="/Images/SVG/Securepage.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="layout11_content-wrapper">
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-small">
                              Synchronization Capabilities
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Seamlessly synchronize maintenance data between
                            vessels and the shore office for real-time updates
                            and centralized control.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-4">
                      <div className="layout11_item">
                        <div className="layout11_icon-wrapper">
                          <img
                            src="/Images/SVG/TargetPeople.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="layout11_content-wrapper">
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-small">
                              Inventory Integration
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Integrate with your inventory management system to
                            automatically deduct spare parts used during
                            maintenance activities.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-5">
                      <div className="layout11_item">
                        <div className="layout11_icon-wrapper">
                          <img
                            src="/Images/SVG/Key trends.svg"
                            loading="lazy"
                            alt=""
                          />
                        </div>
                        <div className="layout11_content-wrapper">
                          <div className="margin-bottom margin-small">
                            <h3 className="heading-small">
                              Multi-checkpoint Tracking
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Track the completion of maintenance tasks using
                            various checkpoints (checkbox, value, free text) for
                            a more granular level of detail.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
        <Container fluid style={{ padding: "0" }} className=" text-left">
          <Row style={{ margin: "0", padding: "0" }}>
            <Row
              className=" pt-5 pb-5 text-center"
              style={{
                backgroundImage: "url(/Images/Nau/CrossPattern.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "0",
                margin: "0",
              }}
            >
              <Col xs={12} md={8}>
                <h1
                  className="BiEmpowering"
                  style={{ color: "#ffffff", paddingTop: "3%" }}
                >
                  Ready to Sail?{" "}
                </h1>
                <h1
                  className="BiEmpoweringBottomText"
                  style={{ color: "#ffffff", paddingTop: "3%" }}
                >
                  Set sail on a journey that redefines efficiency and ushers in
                  a new era in maritime management. Join the NAU 2.1 wave today.{" "}
                </h1>
              </Col>
              <Col xs={12} md={4}>
                <Button
                  variant="light"
                  className="m-t-90 p-l-50 p-r-50 fs-25 p-t-10 p-b-10 btn btn-light"
                >
                  <Link href="/ScheduleDemo" style={{ fontSize: "1.4rem" }}>
                    Embark Now
                  </Link>
                </Button>
              </Col>
            </Row>
          </Row>
        </Container>
      </Row>
    </>
  );
}

export default PMSInventory;
