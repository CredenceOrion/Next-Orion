"use client";
import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/fontawesome-free-solid";
import {} from "@fortawesome/fontawesome-free";
import {} from "@fortawesome/fontawesome-free-regular";



export default function OrionMarineApps(index) {
  let boxVariantsL = {};
 
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1100;
  if (!isMobile) {
    boxVariantsL = {
      initial: { opacity: 0, x: index % 2 === 0 ? 350 : -350 },
      whileInView: { opacity: 1, x: 0, transition: { duration: 0.7 } },
    };
    
  } else {
    boxVariantsL = {
      initial: { opacity: 1 },
      whileInView: { opacity: 1 },
    };
    
  }
  return (
    <>
     

      <Row className="m-l-0 m-r-0 p-l-0 p-r-0">
        <Container fluid className="p-l-0 p-r-0 ">
          <Row className="m-l-0 m-r-0 motion-container">
            <Col xs={12} style={{ padding: "0" }}>
              <Container
                fluid
                className="p-l-0 p-r-0 backgroundTtachment"
                style={{ backgroundImage: `url(/Images/OrionAppsBannerbg-main.jpg)` }}
              >
                <Container className="p-t-80 p-b-80">
                  <Row className="m-l-0 m-r-0 full-height align-items-center">
                    <Col xs={12} md={6} style={{ position: "relative" }}>
                      <motion.div
                        variants={boxVariantsL}
                        whileInView="whileInView"
                        initial="initial"
                        viewport={{ once: true }}
                      >
                        <h1
                          class="p-l-10per BiEmpowering"
                          style={{color: "#ffffff", paddingTop: "7%", fontSize: "2rem"}}
                        >
                          NAU Suite of Maritime Solutions
                        </h1>
                        <h1
                          className="p-l-10per  BiEmpowering"
                          style={{
                            color: "rgb(255 255 255)",
                            paddingTop: "3%",
                            fontSize: "2rem",
                          }}
                        >
                          Revolutionizing Maritime Operations
                        </h1>
                        <div
                          className="p-l-10per  text-left fs-18"
                          style={{ color: "rgb(255 255 255)" }}
                        >
                          Redefine inspections and fleet management with
                          innovative digital tools crafted for unparalleled
                          efficiency, compliance, and operational performance.
                          The NAU Suite empowers maritime professionals to
                          achieve new benchmarks in safety and productivity.
                        </div>
                        <h1
                          className="p-l-10per  BiEmpowering"
                          style={{
                            color: "rgb(255 255 255)",
                            paddingTop: "7%",
                            fontSize: "2rem",
                          }}
                        >
                          Empowering Mariners, Enhancing Operations
                        </h1>
                        <div
                          className="p-l-10per  text-left fs-18"
                          style={{ color: "rgb(255 255 255)" }}
                        >
                          Experience purpose-built applications tailored to
                          streamline inspections and optimize fleet performance.
                          From comprehensive audits to real-time insights, our
                          tools are designed to simplify complex operations and
                          drive excellence across the maritime sector.
                        </div>
                      </motion.div>
                    </Col>
                    <Col md={6} xs={12} className="p-r-100 p-l-100">
                      <div class="mockup">
                        <img
                          alt="Mockup Inspect Nau"
                          src="/Images/Mockups/mockup1-front.png"
                          class="img-fluid front wow fadeInDown animated"
                          data-wow-duration=".7s"
                          data-wow-delay="0.8s"
                          style={{
                            visibility: "visible",
                            animationDuration: "0.7s",
                            animationDelay: "0.8s",
                            animationName: "fadeInDown",
                          }}
                        />
                        <img
                          alt="Mockup NAU"
                          src="/Images/Mockups/mockup1-back.png"
                          class="img-fluid back wow fadeInDown animated"
                          data-wow-duration=".7s"
                          data-wow-delay="0.5s"
                          style={{
                            visibility: "visible",
                            animationDuration: "0.7s",
                            animationDelay: "0.5s",
                            animationName: "fadeInDown",
                          }}
                        />
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Container>

              <section id="services" className="p-100px-t p-50px-b sm-p-50px-b">
                <div className="container-fluid">
                  <Row className="row justify-content-md-center">
                    <Col xs={12} className="text-center">
                      <h1 class="un-leash-command-heading">
                        A New Era in Maritime Efficiency
                      </h1>
                      <h2 class="un-leash-command-subheading">
                        Discover how our apps redefine maritime management,
                        ensuring compliance, accuracy, and operational
                        excellence
                      </h2>
                    </Col>
                    <Col xs={12} className="col-lg-6 col-xs-12 mt-3">
                      <div className="service-box text-center  lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b">
                        <img
                          src="/Images/Mockups/FleetApp.jpg"
                          alt="Fleet performance App"
                          className="img-fluid"
                        />
                        <h3 className="mt-3 mb-3 font-bold">
                          Fleet Performance NAU App
                        </h3>
                        <p className="p-l-30 p-r-30 p-b-30 text-start">
                          Elevate fleet management with cutting-edge tools
                          providing real-time data insights. Track fuel
                          consumption, CO₂ emissions, and vessel performance
                          metrics while optimizing operations for cost savings
                          and environmental sustainability.
                        </p>

                        <div className="col-xs-12 m-b-20">
                          <Button variant="primary">
                            <Link
                              href="/products/Fleet-Performance-Mobile-App"
                              style={{ fontSize: "1.2rem", color: "#ffffff" }}
                            >
                              Explore Fleet Performance NAU{" "}
                              <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className="fs-20 m-l-10"
                              />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Col>
                    <Col xs={12} className="col-lg-6 col-xs-12 mt-3">
                      <div className="service-box text-center lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b">
                        <img
                          src="/Images/Mockups/InspectNauApp.jpg"
                          alt="Inspect Nau App"
                          className="img-fluid"
                        />
                        <h3 className="mt-3 mb-3 font-bold">Inspect NAU App</h3>

                        <p className="p-l-30 p-r-30 p-b-30 text-start">
                          Simplify maritime inspections with an intuitive
                          all-in-one solution for SIRE 2.0, RightShip, and
                          custom audits. Gain efficiency through streamlined
                          workflows, real-time documentation, and automated
                          reporting tools that save time and reduce errors.
                        </p>
                        <div className="col-xs-12 m-b-20">
                          <Button variant="primary">
                            <Link
                              href="/Inspect-Nau-App"
                              style={{ fontSize: "1.2rem", color: "#ffffff" }}
                            >
                              Learn More About InspectNAU{" "}
                              <FontAwesomeIcon
                                icon={faArrowAltCircleRight}
                                className="fs-20 m-l-10"
                              />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </section>
            </Col>
          </Row>
        </Container>

        <Container fluid style={{ padding: "0" }} className=" m-t-60 text-left">
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
                  Take Your Fleet to the Next Level{" "}
                </h1>
                <h1
                  className="BiEmpoweringBottomText"
                  style={{ color: "#ffffff", paddingTop: "3%" }}
                >
                  Ready to unlock the full potential of your fleet? Contact us
                  today for a free demo and discover how Orion BI can propel you
                  towards a future of unparalleled efficiency, sustainability,
                  and profitability.
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
