"use client";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faComputer,faShip,faServer,} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { motion } from "framer-motion";
import CarouselProduct from "../components/OurExperties/OurExperties";
import CountUp from "react-countup";
function Home() {
  return (
    <>
      
      <Row style={{ margin: "0", padding: "0" }}>
        <Container fluid style={{ padding: "0", overflow: "hidden" }}>
          <div className="row">
            <div className="col-12" style={{ position: "relative" }}>
              <Row style={{ margin: "0" }}>
                <Col style={{ padding: "0px" }}>
                  <div className="col-12 OceanBG">
                    <img
                      src="/Images/OceanBg.gif"
                      alt="ocean bg"
                      loading="lazy"
                      className="img-fluid GifBackGround"
                      style={{
                        backgroundSize: "cover",
                        width: " 100%",
                        marginBottom: " 20px",
                      }}
                    />
                    <video
                      loop
                      autoPlay
                      muted
                      disablePictureInPicture
                      playsInline
                      className="VideoBackGround"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    >
                      <source src="/Images/OceanBg.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </Col>
              </Row>
              <Row className="VText">
                <Row>
                  <Col></Col>
                  <Col className="text-right">
                    <h1>Simplify.</h1>
                  </Col>
                  <Col>
                    <h1>Manage.</h1>
                  </Col>
                  <Col className="text-left">
                    <h1>Thrive.</h1>
                  </Col>
                  <Col></Col>
                </Row>
                <Row className="BVisualbuttons">
                  <Col xs={12} md={6}>
                    <Link className="nav-link ButtonStl " href="/NauServer">
                      Simplified Maritime Solutions
                    </Link>
                  </Col>
                  <Col xs={12} md={6}>
                    <Link className="nav-link ButtonStl" href="/Orion-Marine-Apps">
                    Maritime Mobile Apps
                    </Link>
                  </Col>
                </Row>
              </Row>
            </div>
          </div>
        </Container>
      </Row>
      <Row style={{ margin: "0", padding: "0" }}>
        <Container
          fluid
          style={{
            backgroundColor: "black",
            backgroundImage: `url(/Images/patt.png)`,
            overflow: "hidden",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "0",
          }}
        >
          <Container style={{ minHeight: "600px" }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.2 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{}}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Col className="p-t-110">
                <h1 className="p-l-180 p-r-180 fs-60 font-bold colorWhite">
                  Steering the Maritime Industry Toward a Digital Future
                </h1>
                <h3
                  className="m-t-70 p-l-180 p-r-180 fs-25 colorWhite"
                  style={{ lineHeight: "1.8", letterSpacing: "3px" }}
                >
                  We're committed to playing a vital role in the maritime
                  industry's journey towards sustainability. Our software
                  solutions are designed to help you reduce fuel consumption,
                  minimize emissions, and comply with environmental regulations.
                  By optimizing routes, monitoring vessel performance, and
                  providing real-time data insights, we empower you to make
                  informed decisions that benefit both your bottom line and the
                  planet.
                </h3>
                <h5 className="m-t-70">
                  <Link className="nav-link ButtonStl" href="/about">
                    About Us
                  </Link>
                </h5>
              </Col>
            </motion.div>
          </Container>
        </Container>
      </Row>
      <Row style={{ margin: "0" }}>
        <Container fluid style={{ overflow: "hidden", padding: "0" }}>
          <Col style={{ padding: "0" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1000 100"
              preserveAspectRatio="none"
            >
              <path fill="#000000" d="M0,6V0h1000v100L0,6z"></path>
            </svg>
          </Col>
        </Container>
      </Row>
      <Row style={{ backgroundColor: "#f9f9f9", margin: "0", padding: "0" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={{}}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Container fluid>
            <div>
              <h2 className="m-t-50 mb-3 font-bold fs-35">Our expertise</h2>
              <h4 className="mb-5">
                Delivering Excellence in Maritime Solutions
              </h4>
            </div>
            <Row>
              <Col>
                <CarouselProduct />
              </Col>
            </Row>
          </Container>
        </motion.div>
      </Row>
      <Row style={{ margin: "0", padding: "0" }}>
        <Container
          fluid
          style={{
            minHeight: "250px",
            backgroundColor: "#ebffff",
            backgroundPosition: "0",
            backgroundSize: "cover",
            backgroundImage: `url(/Images/white-concrete-wall.jpg)`,
          }}
        >
          <Container>
            <Col xs={12}>
              <h2 className="m-t-50 mb-3 font-bold fs-35">Our Achievements</h2>
            </Col>
            <Row className="pt-5 pb-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.2 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{}}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Row>
                  <Col xs={12} md={4} className="mb-5 mt-5">
                    <Row>
                      <Col xs={12} className="fs-35 font-bold">
                        Total Installation
                      </Col>
                      <Col xs={6} className="text-right">
                        <FontAwesomeIcon
                          icon={faComputer}
                          className="fs-30 CounterIcon"
                        />
                      </Col>
                      <Col xs={6} className="text-left">
                        <CountUp
                          start={0}
                          end={900}
                          suffix=" +"
                          duration={3}
                          scrollSpyOnce={true}
                          enableScrollSpy={true}
                        >
                          {({ countUpRef }) => (
                            <span
                              className="fs-60 font-bold"
                              style={{ color: "#212529" }}
                              ref={countUpRef}
                            />
                          )}
                        </CountUp>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={4} className="mb-5 mt-5">
                    <Row>
                      <Col xs={12} className="fs-35 font-bold">
                        Running Vessels
                      </Col>
                      <Col xs={6} className="text-right">
                        <FontAwesomeIcon
                          icon={faShip}
                          className="fs-30 CounterIcon"
                        />
                      </Col>
                      <Col xs={6} className="text-left">
                        <CountUp
                          start={0}
                          end={750}
                          suffix=" +"
                          duration={3}
                          scrollSpyOnce={true}
                          enableScrollSpy={true}
                        >
                          {({ countUpRef }) => (
                            <span
                              className="fs-60 font-bold"
                              style={{ color: "#212529" }}
                              ref={countUpRef}
                            />
                          )}
                        </CountUp>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} md={4} className="mb-5 mt-5">
                    <Row>
                      <Col xs={12} className="fs-35 font-bold">
                        Server Crash Effects
                      </Col>
                      <Col xs={6} className="text-right">
                        <FontAwesomeIcon
                          icon={faServer}
                          className="fs-30 CounterIcon"
                        />
                      </Col>
                      <Col xs={6} className="text-left">
                        <span
                          className="fs-60 font-bold"
                          style={{ color: "#212529" }}
                        >
                          0
                        </span>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </motion.div>
            </Row>
          </Container>
        </Container>
      </Row>
    </>
  );
}

export default Home;
