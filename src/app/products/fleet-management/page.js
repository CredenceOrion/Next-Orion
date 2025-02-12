"use client";
import { Container, Row, Accordion, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { motion } from "framer-motion";


function PerformanceMonitoring(index) {
  let boxVariantsL = {};
  let boxVariantsR = {};
  let boxVariantsPop = {};
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1100; //Add the width you want to check for here (now 768px)
  if (!isMobile) {
    boxVariantsL = {
      initial: { opacity: 0 },
      whileInView: { opacity: 1, transition: { duration: 0.7 } },
    };
    boxVariantsR = {
      initial: { opacity: 0 },
      whileInView: { opacity: 1, transition: { duration: 0.7 } },
    };
    boxVariantsPop = {
      initial: { opacity: 0, scale: 0.2 },
      whileInView: { opacity: 1, scale: 1, transition: { duration: 1 } },
    };
  } else {
    boxVariantsL = {
      initial: { opacity: 1 },
      whileInView: { opacity: 1 },
    };
    boxVariantsR = {
      initial: { opacity: 1 },
      whileInView: { opacity: 1 },
    };
    boxVariantsPop = {
      initial: { opacity: 1 },
      whileInView: { opacity: 1 },
    };
  }
  return (
    <>
    

      <Row className="m-l-0 m-r-0 p-l-0 p-r-0">
        <Container fluid className="p-l-0 p-r-0 backgroundTtachment">
          <Row className="m-l-0 m-r-0 motion-container">
            <Col xs={12} md={6}>
              <motion.div
                variants={boxVariantsL}
                whileInView="whileInView"
                initial="initial"
                viewport={{ once: true }}
              >
                <img
                  src="/Images/Mockups/fleet-dashboard-mockup.png"
                  alt="Fleet Performance"
                  className="p-t-5per img-fluid"
                />
              </motion.div>
            </Col>
            <Col xs={12} md={6}>
              <motion.div
                variants={boxVariantsR}
                whileInView="whileInView"
                initial="initial"
                viewport={{ once: true }}
              >
                <h1
                  className="p-l-10per BiEmpowering"
                  style={{
                    color: "rgb(6 23 68)",
                    paddingTop: "7%",
                    fontSize: "2rem",
                  }}
                >
                  NAU 2.1 - Fleet Performance and Energy Efficiency
                </h1>
                <h1
                  className="p-l-10per un-leash-command-subheading text-left"
                  style={{ color: "rgb(6 23 68)", paddingTop: "1%" }}
                >
                  Unleash Peak Performance and Efficiency with Orion's Fleet
                  Management Software
                </h1>
                <p className="p-l-10per un-leash-paragraph text-left">
                  In today's dynamic shipping landscape, optimizing vessel
                  operations and minimizing environmental impact are no longer
                  just desirable qualities, they're essential for success.
                  Orion's Fleet Performance and Energy Efficiency Software
                  empowers shipping companies to navigate these challenges with
                  confidence, providing a powerful suite of tools designed to
                  propel your fleet towards unparalleled efficiency and
                  sustainability.
                </p>
                <h4
                  className="p-l-10per un-leash-command-subheading text-left"
                  style={{ color: "rgb(6 23 68)" }}
                >
                  Improve Efficiency, Reduce Emissions, and Save Money
                </h4>
                <p className="p-l-10per un-leash-paragraph text-left">
                  Imagine a voyage where every decision is fueled by real-time
                  data. Orion's web-based software solution grants you this
                  power, offering comprehensive voyage monitoring that tracks
                  vessel performance, fuel consumption, emissions, and even
                  weather conditions. This granular level of detail allows you
                  to make informed adjustments and course corrections, ensuring
                  optimal efficiency throughout your journey.
                </p>
              </motion.div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="p-l-0 p-r-0 ">
          <Row style={{ margin: "0", padding: "0" }}>
            <Container>
              <Row className="mt-5 text-start">
                <Col xs={12} className="m-b-40 text-center">
                  <h1 className="un-leash-command-heading">
                    Orion FleetCommand Centre
                  </h1>
                  <h2 className="un-leash-command-subheading">
                    Vessels Operational and Environmental Performance
                  </h2>
                </Col>
              </Row>
            </Container>
            <Row className="m-l-0 m-r-0 p-l-0 p-r-0">
              <Col xs={12} className="p-l-0 p-r-0">
                <img src="/Images/Mockups/fleet-dashboard-mockup-dashboard.jpg" alt="" className="img-fluid" />
              </Col>
            </Row>
            <Container>
              <Row className="">
                <h1 className="un-leash-command-heading m-t-80">
                  Comprehensive Fleet Performance Management
                </h1>
                <h3>
                  Effortlessly Access And Analyze Operational, Technical And
                  Environmental Reports For Optimal Maritime Efficiency
                </h3>

                <Col xs={12} sm={6}>
                  <motion.div
                    variants={boxVariantsL}
                    whileInView="whileInView"
                    initial="initial"
                    viewport={{ once: true }}
                  >
                    <Accordion alwaysOpen className="text-start">
                      <Row className="CommonAccordion m-t-40">
                        <Accordion.Item eventKey="0" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Voyage operational, technical and Commercial
                            performance{" "}
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>
                                Well scoped reports for all events at sea and at
                                port.
                              </li>
                              <li>
                                Machinery reports for continuous monitoring.
                              </li>
                              <li> Speed and consumption variance from CP.</li>
                              <li>
                                Special event reporting; emergency, search and
                                rescue, ice operations, etc.
                              </li>
                              <li>
                                Commercial cost calculation voyage averages.
                              </li>
                              <li>Key performance indicators.</li>
                              <li>Lube oil consumption monitoring.</li>
                              <li>Fresh water generation.</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Propulsion performance monitoring
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>Engine performance.</li>
                              <li>
                                Hull and propeller performance, degradation and
                                resistance monitor.
                              </li>
                              <li>Monitor main engine power utilizations.</li>
                              <li>
                                Monthly and bi-monthly performance for early
                                warnings.
                              </li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="12" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Environment Reporting
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>EU and UK MRV for CO2 emission.</li>
                              <li>IMO DCS Reports.</li>
                              <li>CII Ratings and AER.</li>
                              <li>SEEMP data for IMO.</li>
                              <li>Energy efficiency operating index (EEOI).</li>
                              <li>MARPOL seal log.</li>
                              <li>Electronic logs for.</li>
                              <ul>
                                <li>Sludge and Bilge.</li>
                                <li>Garbage Log (Annex IV).</li>
                                <li>
                                  Refrigerant gas record and log (Annex V).
                                </li>
                                <li>
                                  Sewage disposal record (Annex VI) electronic
                                  reporting.
                                </li>
                              </ul>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="13" className=" mt-2 mb-2">
                          <Accordion.Header>
                            MRV and DCS reporting
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>
                                NAU system ensures continuous data recording and
                                monitoring throughout the year, prior to
                                submission, the data checks and issues are
                                automatically highlighted on the NAU. These are
                                automated checks applied on the submitted data
                                per vessel and visible across the fleet. The
                                checks support the users in detecting if any
                                data might needs to be corrected. Incase no
                                issues are detected the NAU automatically flows
                                the data to the connected verifiers systems.
                              </li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Reports and Dashboards
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>
                                Microsoft Business intelligence integrated
                                dashboard and reports.
                              </li>
                              <li>
                                Custom reports and dashboards for individual
                                sections.
                              </li>
                              <li>Create your own views and combinations.</li>
                              <li>Emails the reports from the system.</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Weather and AIS data integrated
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>
                                Multiple APIs integrated within the system for
                                weather overlays, storm warnings, weather
                                information at any specific location.
                              </li>
                              <li>
                                AIS information integrated and customizable for
                                different schedules for real time position.
                              </li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Electric Power monitoring and utilization
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>Auxiliary Engine performance.</li>
                              <li>Ship and shore power utilization.</li>
                              <li>
                                Auxiliary engine usage monitoring basis power
                                requirements.
                              </li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Boiler usage and performance
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>
                                Boiler consumption monitoring based on different
                                activities and events.
                              </li>
                              <li>
                                Monitor excess consumption versus benchmark.
                              </li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Important events and information captured
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>Crew changes.</li>
                              <li>Agency information.</li>
                              <li>Inspections and surveys carried out.</li>
                              <li>
                                Docking, Hull and propeller polishing
                                information.
                              </li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="10" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Mobile APP for fleet performance monitoring
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>
                                View details here; LINK For the APP Section.
                              </li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Benchmarking similar or sister vessels for several
                            parameters
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>
                                Speed and consumption at similar conditions.
                              </li>
                              <li>
                                Main engine and auxiliary engine utilizations
                                and performance assessments.
                              </li>
                              <li>Boiler performance and utilizations.</li>
                              <li>CII ratings and voyage assessments.</li>
                              <li>
                                Alerts generated for different parameters.
                              </li>
                              <li>Hull resistance analysis.</li>
                              <li>And many more…</li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" className=" mt-2 mb-2">
                          <Accordion.Header>Environment</Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>EU and UK MRV for CO2 emission.</li>
                              <li>IMO DCS Reports.</li>
                              <li>CII Ratings and AER.</li>
                              <li>SEEMP data for IMO.</li>
                              <li>Energy efficiency operating index (EEOI).</li>
                              <li>MARPOL seal log.</li>
                              <li>Electronic logs for.</li>
                              <ul>
                                <li>Sludge and Bilge.</li>
                                <li>Garbage Log (Annex IV).</li>
                                <li>
                                  Refrigerant gas record and log (Annex V).
                                </li>
                                <li>
                                  Sewage disposal record (Annex VI) electronic
                                  reporting.
                                </li>
                              </ul>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Port activity planner
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>
                                Plan different activities and communicate with
                                3rd party through the system to execute the
                                same.
                              </li>
                              <li>
                                Vessel form initiated and auto shared once the
                                activity is planned for ships to report and
                                close the same.
                              </li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="11" className=" mt-2 mb-2">
                          <Accordion.Header>
                            Autolog and Big Data
                          </Accordion.Header>
                          <Accordion.Body>
                            <ul>
                              <li>
                                NAU is fully integrable with any Auto log or big
                                data flow from various source systems: Vessel
                                Design Data, Autolog Data, Noon Report Data and
                                3rd Party Data (AIS, Weather, etc.). These can
                                feed data to the NAU system using API or other
                                connectors enabling deeper analysis, monitoring
                                and assessment.
                              </li>
                            </ul>
                          </Accordion.Body>
                        </Accordion.Item>
                      </Row>
                    </Accordion>
                  </motion.div>
                </Col>

                <Col xs={12} sm={6}>
                  <img
                    src="/Images/Mockups/fleet-dashboard-mockupTop.png"
                    alt="Fleet Performance"
                    className="p-t-5per img-fluid sticky-top"
                  />
                </Col>

                <motion.div
                  variants={boxVariantsPop}
                  whileInView="whileInView"
                  initial="initial"
                  viewport={{ once: true }}
                >
                  <Container fluid className="m-t-40">
                    <div className="snip1276">
                      <div className="plan plan1 m-t-50">
                        <header>
                          <img
                            src="/Images/CommonImages/3.png"
                            alt=""
                            className="img-fluid flowchart flowchart1"
                          />
                          <h4 className="plan-title">OPERATIONS</h4>
                        </header>
                        <ul className="plan-features">
                          <li>Charter Party</li>
                          <li>Vessel Charter Details</li>
                          <li>Event Report</li>
                          <li>Bunker Report</li>
                          <li>Consolidated Report</li>
                          <li>Voyage Report</li>
                          <li>EU/UK ETS</li>
                          <li>IMO Dock & Other Dates</li>
                          <li>Vessel Alerts</li>
                        </ul>
                      </div>
                      <div className="plan plan2 m-t-50">
                        <header>
                          <img
                            src="/Images/CommonImages/4.png"
                            alt=""
                            className="img-fluid flowchart flowchart2"
                          />
                          <h4 className="plan-title">TECHNICAL</h4>
                        </header>
                        <ul className="plan-features">
                          <li>Daily Engine Parameters</li>
                          <li>Engine Performance</li>
                          <li>Monthly and Annual Reports</li>
                          <li>ME Hull Analysis</li>
                          <li>Pump Static Info</li>
                          <li>Vessel Pump Running Hrs</li>
                          <li>Special Events</li>
                          <li>Auxiliaries Benchmarks</li>
                        </ul>
                      </div>

                      <div className="plan plan3 m-t-50">
                        <header>
                          <img
                            src="/Images/CommonImages/5.png"
                            alt=""
                            className="img-fluid flowchart flowchart3"
                          />
                          <h4 className="plan-title">ENVIRONMENT</h4>
                        </header>
                        <ul className="plan-features">
                          <li>Annex IV Log</li>
                          <li>Annex VI Ref. Gas Record</li>
                          <li>Waste Management - Sludge, Bilge, & Garbage</li>
                          <li>Marpol Seal</li>
                        </ul>
                      </div>
                    </div>
                  </Container>
                </motion.div>
              </Row>
              <Row>
                <Col xs={12} className="motion-container">
                  <motion.div
                    variants={boxVariantsPop}
                    whileInView="whileInView"
                    initial="initial"
                    viewport={{ once: true }}
                  >
                    <h3
                      className="text-left font-bold"
                      style={{ color: "#3d3370" }}
                    >
                      Key Benefits
                    </h3>
                    <div className="features1_component-copy text-left m-t-40">
                      <div className="features-item-1">
                        <div className="layout11_item">
                          <div className="layout11_icon-wrapper">
                            <img src="/Images/SVG/TargetPeople.svg" loading="lazy" alt="" />
                          </div>
                          <div className="layout11_content-wrapper">
                            <div className="margin-bottom margin-small">
                              <h3 className="heading-small">
                                The Benefits of Peak Performance
                              </h3>
                            </div>
                            <p className="paragraph-11">
                              The rewards of adopting Orion's Fleet Performance
                              and Energy Efficiency Software are multifaceted.
                              Experience significant cost savings through
                              reduced fuel consumption, a welcome benefit in
                              today's volatile market. Furthermore, Orion
                              empowers you to become a sustainability leader,
                              minimizing your environmental footprint and
                              adhering to ever-evolving regulations.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="features-item-2">
                        <div className="layout11_item">
                          <div className="layout11_icon-wrapper">
                            <img src="/Images/SVG/Key trends.svg" loading="lazy" alt="" />
                          </div>
                          <div className="layout11_content-wrapper">
                            <div className="margin-bottom margin-small">
                              <h3 className="heading-small">
                                Unparalleled Transparency and Actionable
                                Insights
                              </h3>
                            </div>
                            <p className="paragraph-11">
                              Transparency is key to achieving peak performance.
                              Orion equips you with a clear and comprehensive
                              picture of your fleet's performance across all
                              dimensions. Access accurate and easy-to-understand
                              reports that empower data-driven decision-making.
                              Identify areas for improvement and capitalize on
                              opportunities to streamline operations and
                              maximize profitability.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="features-item-3">
                        <div className="layout11_item">
                          <div className="layout11_icon-wrapper">
                            <img src="/Images/SVG/Stayaheadofremediationcosts-o.svg" loading="lazy" alt="" />
                          </div>
                          <div className="layout11_content-wrapper">
                            <div className="margin-bottom margin-small">
                              <h3 className="heading-small">
                                Features Designed for Efficiency
                              </h3>
                            </div>
                            <p className="paragraph-11">
                              Orion's feature set is meticulously crafted to
                              address the specific needs of modern shipping
                              companies. From voyage assessment and continuous
                              monitoring to advanced reporting and analytics,
                              our software equips you with everything you need
                              to achieve operational excellence. Optimize hull
                              performance, track main and auxiliary machinery
                              performance, and ensure regulatory compliance with
                              features like IMO DCS and EU MRV support.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="features-item-4">
                        <div className="layout11_item">
                          <div className="layout11_icon-wrapper">
                            <img src="/Images/SVG/Securepage.svg" loading="lazy" alt="" />
                          </div>
                          <div className="layout11_content-wrapper">
                            <div className="margin-bottom margin-small">
                              <h3 className="heading-small">
                                Embrace a Sustainable Future
                              </h3>
                            </div>
                            <p className="paragraph-11">
                              The maritime industry is on a journey towards a
                              cleaner future. Orion empowers you to be a part of
                              the solution. Reduce emissions and achieve
                              significant cost savings through our fuel
                              consumption and emissions reporting features. With
                              Orion, you can contribute to a sustainable future
                              without sacrificing profitability.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="features-item-5">
                        <div className="layout11_item">
                          <div className="layout11_icon-wrapper">
                            <img src="/Images/SVG/KYBandUBOchecks.svg" loading="lazy" alt="" />
                          </div>
                          <div className="layout11_content-wrapper">
                            <div className="margin-bottom margin-small">
                              <h3 className="heading-small">
                                Take Your Fleet to the Next Level
                              </h3>
                            </div>
                            <p className="paragraph-11">
                              Ready to unlock the full potential of your fleet?
                              Contact us today for a free demo and discover how
                              Orion's Fleet Performance and Energy Efficiency
                              Software can propel you towards a future of
                              unparalleled efficiency, sustainability, and
                              profitability
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              </Row>
            </Container>
          </Row>
        </Container>
        <Container fluid style={{ padding: "0" }} className=" m-t-40 text-left">
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

export default PerformanceMonitoring;
