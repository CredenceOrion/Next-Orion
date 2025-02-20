"use client";
import { useRef, useState, useEffect } from "react";
import { Container, Row, Accordion, Col, Button } from "react-bootstrap";
import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPenClip,faMicrophone,faPersonChalkboard,faCity,faArrowCircleRight,faRightToBracket,faCheck,faTimes} from "@fortawesome/free-solid-svg-icons";
import { faFileAlt, faFilePdf } from "@fortawesome/fontawesome-free-regular";

export default function InspectNau(index) {
  const [isMobile, setIsMobile] = useState(false);
    
        useEffect(() => {
         
            setIsMobile(window.innerWidth < 1100);
        }, []);
    
      const boxVariantsL = !isMobile
            ? {
                  hidden: { opacity: 0, x: index % 2 === 0 ? 350 : -350 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
              }
            : { hidden: { opacity: 1 }, visible: { opacity: 1 } };
    
        const boxVariantsR = !isMobile
            ? {
                  hidden: { opacity: 0, x: index % 2 === 0 ? -350 : 350 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
              }
            : { hidden: { opacity: 1 }, visible: { opacity: 1 } };
    
         
  

  //scroll to Register section
  const targetRef = useRef(null);

  const handleScroll = () => {
    targetRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
     

      <Row className="m-l-0 m-r-0 p-l-0 p-r-0">
        <Container fluid className="p-l-0 p-r-0 backgroundTtachment">
          <Row className="m-l-0 m-r-0 motion-container">
            <Col xs={12} style={{ padding: "0" }}>
              <section className="hero-area circle-wrap">
                <div className="circle x1"></div>
                <div className="circle x2"></div>
                <div className="circle x3"></div>
                <div className="circle x4"></div>
                <div className="circle x5"></div>
                <div className="circle x6"></div>
                <div className="circle x7"></div>
                <div className="circle x8"></div>
                <div className="circle x9"></div>
                <div className="circle x10"></div>

                <Container fluid>
                  <Row className="m-l-0 m-r-0 full-height align-items-center">
                    <Col
                      xs={12}
                      md={5}
                      className="Minu70"
                      style={{ position: "relative" }}
                    >
                      <motion.div variants={boxVariantsL}  initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}
                      >
                        <h1
                          className="p-l-10per  BiEmpowering"
                          style={{
                            color: "rgb(255 255 255)",
                            paddingTop: "1%",
                            fontSize: "2rem",
                          }}
                        >
                          InspectNAU: The Future of Marine Inspections
                        </h1>
                        <div
                          className="p-l-10per  text-left fs-18"
                          style={{ color: "rgb(255 255 255)" }}
                        >
                          Simplify marine inspections with InspectNAU, a
                          powerful mobile app designed to save time, enhance
                          accuracy, and ensure compliance. Built by maritime
                          experts, InspectNAU is your all-in-one solution for
                          efficient inspections, real-time reporting, and
                          seamless collaboration.
                        </div>
                        <h1
                          className="p-l-10per  BiEmpowering"
                          style={{
                            color: "rgb(255 255 255)",
                            paddingTop: "7%",
                            fontSize: "2rem",
                          }}
                        >
                          Streamline Inspections. Ensure Compliance. Maximize
                          Efficiency.
                        </h1>
                        <div
                          className="p-l-10per  text-left fs-18"
                          style={{ color: "rgb(255 255 255)" }}
                        >
                          From pre-loaded checklists to automated reporting,
                          InspectNAU empowers maritime professionals to meet
                          evolving industry demands with ease.
                        </div>
                        <div className="apps-buttons p-l-10per m-t-40 text-left">
                          <a
                            href="https://apps.apple.com/in/app/inspectnau/id6737123212"
                            className="float-left"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="/Images/AppStore.png"
                              alt="App Store Download"
                              style={{ maxWidth: "180px", animation: "none" }}
                              className="img-fluid"
                            />
                          </a>
                          <a href="https://play.google.com/store/apps/details?id=com.LaunchfortTechnologies.InspectNau&hl=en"
                          target="_blank"
                          rel="noreferrer">
                          <img
                            src="/Images/playStore.png"
                            alt="Coming Soon on the Play Store"
                            style={{ maxWidth: "180px", animation: "none" }}
                            className="img-fluid m-l-10"
                          />
                          </a>

                          <div className="col-xs-12 mt-5">
                          <Button
                                variant="light"
                                className="mb-5 p-l-10 p-r-10 fs-25 p-t-10 p-b-10 "
                                style={{
                                  borderRadius: "50px",
                                  padding: "5px 50px",
                                  fontSize: "25px",
                                  fontWeight: "500",}} id="LogIn"
                              >
                                <Link
                                  href="https://inspectnau.orionmarineconcepts.com/loginpage.aspx"
                                  target="_blank"
                                  style={{ fontSize: "1.4rem", color: "#000000" }}
                                >
                                  Login <FontAwesomeIcon className="m-l-5" icon={faRightToBracket} />
                                </Link>
                              </Button>

                            <Button
                              onClick={handleScroll}
                              variant="light"
                              className="mb-5 p-l-10 p-r-10 fs-25 p-t-10 p-b-10 "
                              style={{
                                borderRadius: "50px",
                                padding: "5px 50px",
                                fontSize: "25px",
                                fontWeight: "500",
                              }} id="Register"
                            >
                              How to Register
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </Col>
                    <Col md={7} xs={12}>
                      <img
                        src="/Images/Mockups/InspectNau-Top.png"
                        alt="Products"
                        className="img-fluid hero-mock"
                      />
                    </Col>
                  </Row>
                </Container>
              </section>

              <section id="services" className="p-100px-tb sm-p-50px-b">
                <div className="container">
                  <Row className="row justify-content-md-center">
                    <Col xs={12} className="text-center">
                      <h1 className="un-leash-command-heading m-b-60">
                        Smart Inspection Tools That Work Anywhere
                      </h1>
                    </Col>
                    <Col xs={12} className="col-lg-3 col-md-3">
                      <div className="service-box text-center p-60px lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b">
                        <FontAwesomeIcon
                          icon={faFilePdf}
                          style={{ fontSize: "50px" }}
                          className="m-b-30"
                        />

                        <h4>
                          Seamless PDF <br />
                          Reports
                        </h4>
                        <p>
                          Generate detailed PDF reports with live photos and
                          gallery images, all in one format. Easily share
                          professional, compliant reports that keep all data
                          centralized—whether you're online or offline, it’s
                          accessible and seamless.
                        </p>
                      </div>
                    </Col>

                    <Col xs={12} className="col-lg-3 col-md-3">
                      <div className="service-box text-center p-60px lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b">
                        <FontAwesomeIcon
                          icon={faMicrophone}
                          style={{ fontSize: "50px" }}
                          className="m-b-30"
                        />
                        <h4>Voice To Text Integration</h4>
                        <p>
                          Record observations directly in the app using our
                          voice-to-text feature, even offline. Dictate notes
                          hands-free for faster, more efficient data capture.
                          Once online, sync seamlessly, ensuring every detail is
                          accurately documented and ready for reports.
                        </p>
                      </div>
                    </Col>

                    <Col xs={12} className="col-lg-3 col-md-3">
                      <div
                        className="service-box text-center p-60px lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b"
                        style={{ paddingLeft: "45px", paddingRight: "45px" }}
                      >
                        <FontAwesomeIcon
                          icon={faPenClip}
                          style={{ fontSize: "50px" }}
                          className="m-b-30"
                        />
                        <h4>Apple Pencil Integration & Digital Signatures</h4>
                        <p>
                          Write notes naturally using apple Pencil in the
                          observation section. Handwritten notes are converted
                          to editable text. Both signatures from the Captain and
                          Inspector can be digitally added to close the
                          report—offline or online, ensuring smooth workflows.
                        </p>
                      </div>
                    </Col>
                    <Col xs={12} className="col-lg-3 col-md-3">
                      <div
                        className="service-box text-center p-60px lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b"
                        style={{ paddingLeft: "43px", paddingRight: "43px" }}
                      >
                        <FontAwesomeIcon
                          icon={faFileAlt}
                          style={{ fontSize: "50px" }}
                          className="m-b-30"
                        />
                        <h4>Industry Best Practices Guidance</h4>
                        <p>
                          The app includes built-in guidance for training
                          personnel on industry best practices, such as SIRE 2.0
                          and TMSA. It helps promote a safety culture and
                          ensures compliance with standards, forming the
                          backbone of tanker industry operations and best
                          practices.
                        </p>
                      </div>
                    </Col>
                  </Row>
                </div>
              </section>
            </Col>
          </Row>
        </Container>
        <Container fluid className="p-l-0 p-r-0 ">
          <Row className="m-l-0 m-r-0">
            <Col xs={12} className="p-l-0 p-r-0 mt-2">
              <img
                src="/Images/Mockups/InspectNau.png"
                alt="Products"
                className="img-fluid float-left"
              />
            </Col>
          </Row>

          <Row className="mt-5 pt-5 m-l-0 m-r-0">
            <Col xs={12} className="justify-content-start mb-5">
              <h1
                className="un-leash-command-heading"
                style={{ fontSize: "2.5rem" }}
              >
                What Makes InspectNAU the Go-To Inspection Tool?
              </h1>
              <p>
                Marine inspections are complex and time-consuming, often riddled
                with inefficiencies. InspectNAU addresses these challenges
                head-on with a comprehensive set of tools tailored to the needs
                of inspectors, auditors, and operators. Whether onboard or in
                the office, InspectNAU equips you to conduct accurate,
                efficient, and compliant inspections every time.
              </p>
            </Col>
            <Col xs={12} md={7} className="p-l-0">
              <img
                src="/Images/Mockups/InspectNauIpad.png"
                alt="Products"
                className="img-fluid sticky-top"
              />
            </Col>

            <Col xs={12} md={5} className="motion-container text-left">
              <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }}>
                <Accordion
                  alwaysOpen
                  defaultActiveKey="0"
                  className=" text-start"
                >
                  <Row className="mt-3 CommonAccordion">
                    <Accordion.Item eventKey="0" className=" mt-2 mb-2">
                      <Accordion.Header>
                        Versatile Inspection Capabilities
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul className="list-items list-items-layout2 list-unstyled text-left">
                          <li>
                            <b> SIRE 2.0 Pre Vetting Inspection</b>
                          </li>
                          <li>
                            <b> RightShip 3.1 Pre Vetting Inspection</b>
                          </li>
                          <li>
                            <b>
                              {" "}
                              ISM, ISPS, QHSSE Inspections and Audits (Company
                              specific)
                            </b>
                          </li>
                          <li>
                            <b>
                              {" "}
                              Technical and Marine Inspections (Company
                              specific)
                            </b>
                          </li>
                          <li>
                            <b>
                              {" "}
                              Cargo, Mooring and other Inspections (Company
                              specific)
                            </b>
                          </li>
                          <li>
                            <b> Navigation Audits (Company specific)</b>
                          </li>
                          <li>
                            <b> Pre-Purchase Inspections</b>
                          </li>
                          <li>
                            <b> P&I Club Inspections</b>
                          </li>
                          <li>
                            <b> Terminal Inspections for vessels</b>
                          </li>
                          <li>
                            <b>
                              {" "}
                              Any other type of inspections and audits can be
                              uploaded on your cloud account and synchronised
                              with the InspectNAU APP.
                            </b>
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className=" mt-2 mb-2">
                      <Accordion.Header>
                        Real-Time Documentation
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Record observations instantly, attaching photos,
                            voice to text, and files for complete accuracy.
                          </li>
                          <li>
                            Keep all inspection data securely organized and
                            readily accessible in one platform.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7" className=" mt-2 mb-2">
                      <Accordion.Header>Automated Reporting</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Generate comprehensive, shareable reports at the
                            touch of a button, cutting down hours of manual
                            work.
                          </li>
                          <li>
                            Eliminate errors and speed up the approval process
                            with standardized, accurate reporting templates.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10" className=" mt-2 mb-2">
                      <Accordion.Header>Offline Capability</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Conduct inspections anytime, anywhere—even without
                            internet access.
                          </li>
                          <li>
                            Data automatically syncs when reconnected, ensuring
                            seamless workflow continuity.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className=" mt-2 mb-2">
                      <Accordion.Header>
                        Cloud-Based Platform with BI Integration
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Store, access, and manage data securely with cloud
                            technology.
                          </li>
                          <li>
                            Integrated Business Intelligence (BI) tools provide
                            actionable insights and performance analytics.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5" className=" mt-2 mb-2">
                      <Accordion.Header>ERP Compatibility</Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Connect seamlessly to your ERP systems, centralizing
                            data for better management and efficiency.
                          </li>
                          <li>
                            Enhanced Power BI integration enables deep insights
                            into inspection trends and operational performance.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className=" mt-2 mb-2">
                      <Accordion.Header>
                        Photographs with Condition Rating
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Capture photos directly within the app and assign
                            condition ratings to the observed items instantly.
                            This feature ensures detailed visual documentation
                            tied to inspection standards, providing clarity and
                            actionable insights for every observation.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11" className=" mt-2 mb-2">
                      <Accordion.Header>
                        Future-Ready with AI Integration
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            Get ready for the next wave of innovation with
                            upcoming AI-powered features, offering predictive
                            analytics and smarter decision-making tools.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9" className=" mt-2 mb-2">
                      <Accordion.Header>
                        Integrated Training and SMS Guidelines
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            InspectNAU goes beyond just inspections by offering
                            built-in guidance to train personnel on industry
                            best practices. The app includes detailed
                            instructions aligned with SIRE 2.0, TMSA standards,
                            and the company’s own Safety Management System (SMS)
                            guidelines. This ensures every team member is
                            trained to meet the highest operational and safety
                            standards. By integrating these guidelines directly
                            into the app, we enable a seamless and effective
                            learning experience, helping companies build a
                            culture of compliance and safety while maintaining
                            operational excellence.
                          </li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Row>
                </Accordion>
              </motion.div>
            </Col>
          </Row>
        </Container>
        <Container ref={targetRef} className="HowToRegisterPage">
          <Row style={{ margin: "0", padding: "0" }}>
            <Col xs={12} className="justify-content-start m-t-50 mb-3">
              <h1
                className="un-leash-command-heading"
                style={{ fontSize: "2.5rem" }}
              >
                How to Register
              </h1>
            </Col>
            <Col xs={12} className="col-lg-6 col-xs-12 mt-3">
              <div
                className="service-box text-center lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b"
                style={{
                  backgroundColor: "#055160",
                  borderRadius: "10px",
                  color: "white",
                }}
              >
                <FontAwesomeIcon
                  icon={faPersonChalkboard}
                  className="m-t-30 fs-70"
                />
                <h2 className="mt-3 mb-5 font-bold">
                  Register as an Independent User
                </h2>

                <p className="p-l-30 p-r-30 p-b-5 font-bold text-start">
                  Choose independent registration if you:
                </p>
                <div className="p-l-30 p-r-30 text-start">
                  <ul>
                    <li className="fs-16">
                      Use only pre-loaded checklists, such as SIRE 2.0 and
                      RightShip, with no need for custom checklists.
                    </li>
                    <li className="fs-16">
                      Operate solely without team collaboration or centralized
                      management.
                    </li>
                    <li className="fs-16">
                      Do not require access to integrated Microsoft Business
                      Intelligence tools.
                    </li>
                   
                  </ul>
                  <div style={{boxShadow:"inset 0px 0px 15px #055160",borderRadius:"10px",padding:"10px",backgroundColor:"white",color:"black",float:"left",width:"100%",marginBottom:"20px"}}>
                  <b style={{fontSize:"18px"}}>How to Register and Log In</b>
                  <ul style={{listStyleType:"decimal",color:"black"}}>
                        <li>Download the InspectNAU App from  <span className="pull-right m-r-10">
                             <a
                            href="https://apps.apple.com/in/app/inspectnau/id6737123212"
                            className="m-l-5"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="/Images/AppStore.png"
                              alt="App Store Download"
                              style={{ maxWidth: "80px", animation: "none" }}
                              className="img-fluid"
                            />
                          </a>
                          <a href="https://play.google.com/store/apps/details?id=com.LaunchfortTechnologies.InspectNau&hl=en"
                          target="_blank"
                          rel="noreferrer">
                              <img
                            src="/Images/playStore.png"
                            alt="Get it on the Play Store"
                            style={{ maxWidth: "80px", animation: "none" }}
                            className="img-fluid m-l-10"
                          />
                          </a>
                          </span></li>
                        <li>Register with Authentication Code: <b>"ORION"</b>.</li>
                        <li>After registering on app Log in to the app and web admin panel using the same credentials. 
                        <Button
                                variant="primary"
                                size="sm"
                                className="m-t-5 m-b-5 p-t-1 p-b-1 m-l-5 pull-right"
                              >
                                <Link
                                  href="https://inspectnau.orionmarineconcepts.com/loginpage.aspx"
                                  target="_blank"
                                  style={{
                                    fontSize: "1rem",
                                    padding: "0px 4px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Track Your Reports <FontAwesomeIcon className="m-l-5" icon={faArrowCircleRight}/>
                                </Link>
                              </Button>
                              </li>
                      </ul>
                      </div>
                  <span className="fs-16 mt-5">
                    <b>Note:</b> Upgrade to a company account anytime to expand
                    your capabilities.
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12} className="col-lg-6 col-xs-12 mt-3">
              <div
                className="service-box text-center lg-p-40px md-p-30px sm-p-20px m-10px-t m-10px-b"
                style={{
                  backgroundColor: "#268a7a",
                  borderRadius: "10px",
                  color: "white",
                }}
              >
                <FontAwesomeIcon icon={faCity} className="m-t-30 fs-70" />
                <h2 className="mt-3 mb-5 font-bold">Register as a Company</h2>
                <p className="p-l-30 p-r-30 p-b-5 font-bold text-start">
                  Choose company registration if you:
                </p>
                <div className="p-l-30 p-r-30 text-start">
                  <ul>
                    <li className="fs-16">
                      Plan to use your own company's checklists alongside
                      pre-loaded ones like SIRE 2.0 and RightShip.
                    </li>
                    <li className="fs-16">
                      Are a Ship Manager or Ship Owner - Manage a team of
                      inspectors and/or Ships under a single account, with
                      centralized management and operations.
                    </li>
                    <li className="fs-16">
                      Are an Independent Inspecting Company - Perform
                      inspections for other companies using their specific audit
                      or inspection checklists.
                    </li>
                    <li className="fs-16">
                      Want to access integrated Microsoft Business Intelligence
                      for advanced monitoring and analysis.
                    </li>
                   
                  </ul>
                  <div style={{boxShadow:"inset 0px 0px 15px #055160",borderRadius:"10px",padding:"10px",backgroundColor:"white",color:"black",float:"left",width:"100%",marginBottom:"20px"}}>
                  <b style={{fontSize:"18px"}}>How to Register and Log In</b>
                  <ul style={{listStyleType:"decimal",color:"black"}}>
                        <li>Register your company on the Company Registration Page. <Button
                                variant="primary"
                                size="sm"
                                className="m-t-5 m-b-5 p-t-1 p-b-1 m-l-5 pull-right"
                              >
                                <Link
                                  href="https://inspectnau.orionmarineconcepts.com/companyregistration.aspx"
                                  target="_blank"
                                  style={{
                                    fontSize: "1rem",
                                    padding: "0px 4px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Register <FontAwesomeIcon className="m-l-5" icon={faArrowCircleRight}/>
                                </Link>
                              </Button></li>
                        <li>Receive a secret authentication code via email after registration.</li>
                        <li>Share the authentication code with your inspectors/auditors.</li>
                        <li>Inspectors/Auditors download the InspectNAU app and use the authentication code to register.
                        <span className="pull-right m-r-10">
                             <a
                            href="https://apps.apple.com/in/app/inspectnau/id6737123212"
                            className="m-l-5"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="/Images/AppStore.png"
                              alt="App Store Download"
                              style={{ maxWidth: "80px", animation: "none" }}
                              className="img-fluid"
                            />
                          </a>
                          <a href="https://play.google.com/store/apps/details?id=com.LaunchfortTechnologies.InspectNau&hl=en"
                          target="_blank"
                          rel="noreferrer">
                              <img
                            src="/Images/playStore.png"
                            alt="Get it on the Play Store"
                            style={{ maxWidth: "80px", animation: "none" }}
                            className="img-fluid m-l-10"
                          />
                          </a>
                          </span>
                        </li>
                        <li>Log in to the app and web admin panel using the same credentials.
                        <Button
                                variant="primary"
                                size="sm"
                                className="m-t-5 m-b-5 p-t-1 p-b-1 m-l-5 pull-right"
                              >
                                <Link
                                  href="https://inspectnau.orionmarineconcepts.com/loginpage.aspx"
                                  target="_blank"
                                  style={{
                                    fontSize: "1rem",
                                    padding: "0px 4px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Track Your Reports <FontAwesomeIcon className="m-l-5" icon={faArrowCircleRight}/>
                                </Link>
                              </Button>
                        </li>
                      </ul>
                      </div>
                  <span className="fs-16 mt-3">
                    *Require ERP integration to streamline reports into your
                    system via API.
                  </span>
                  <br />
                  <span className="fs-16">
                    <b>*Note:</b> For ERP integration please contact us for
                    facilitating.
                  </span>
                </div>
              </div>
            </Col>
            <Col xs={12} className="mt-3 mb-5">
              <h2 className="m-t-80 mb-5 font-bold un-leash-command-heading">
                Pricing Plans
              </h2>

              <div
                id="pricing67"
                className="pricing pricing-65 pricing-67 bg-white"
              >
                <Container fluid>
                  <Row style={{backgroundColor:"#f6f6f6"}}>
                    <Col className="col-12 col-lg-4 pricing-table text-center pr-0 pl-0">
                      <Col className="pricing-panel pricing-panel-1">
                        <div className="pricing--heading text--center">
                          <h4>Features</h4>
                        </div>

                        <Col className="pricing--body">
                          <ul className="pricing--list list-unstyled">
                            <li>
                              <span>
                                Pre-loaded SIRE 2.0 and RightShip Checklists{" "}
                              </span>
                            </li>
                            <li>
                              <span>Two free Inspections</span>
                            </li>
                            <li>
                              <span>Structured PDF report export</span>
                            </li>
                            <li>
                              <span>
                                Export Observations list in Excel (csv)
                              </span>
                            </li>
                            <li>
                              <span>
                                Speech to text for observations (Online /
                                Offline)
                              </span>
                            </li>
                            <li>
                              <span> Stylus compatibility</span>
                            </li>
                            <li>
                              <span>
                                Manage your account and credits on Cloud
                              </span>
                            </li>
                            <li>
                              <span>Own and/or Client's Custom Checklists</span>
                            </li>

                            <li>
                              <span>
                                Conduct Inspections / Audits Across Multiple
                                Companies
                              </span>
                            </li>
                            <li>
                              <span>Manage and monitor your team</span>
                            </li>
                            <li>
                              <span>
                                Microsoft Business Intelligence (BI) Integration
                                (Post 10 inspections)
                              </span>
                            </li>
                            <li>
                              <span>
                                Integration with Company Software and ERP
                                systems
                              </span>
                            </li>
                            <li style={{ backgroundColor: "#d9ebf2" }}>
                              <span className="font-bold fs-20">
                                Pricing :{" "}
                              </span>
                            </li>
                          </ul>
                        </Col>

                        <Col className="pricing--footer"></Col>
                      </Col>
                    </Col>

                    <Col className="col-12 col-lg-4 pricing-table text-center pr-0 pl-0">
                      <Col className="pricing-panel pricing-panel-3">
                        <Col className="pricing--heading text--center">
                          <h4>Independent Individual Plan *</h4>
                          <Col className="pricing--desc">
                            Solo users managing inspections with standard
                            pre-loaded checklists.
                          </Col>
                        </Col>

                        <Col className="pricing--body">
                          <ul className="pricing--list list-unstyled">
                            <li>
                              <span className="m-r-10">
                                Pre-loaded SIRE 2.0 and RightShip Checklists :
                              </span>{" "}
                              <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Two free Inspections :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Structured PDF report export :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Export Observations list in Excel (csv) :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Speech to text for observations (Online /
                                Offline) :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Stylus compatibility :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Manage your account and credits on Cloud :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Own and/or Client's Custom Checklists :
                              </span>{" "}
                              <FontAwesomeIcon icon={faTimes} style={{ color: "red" }}/>
                            </li>
                            <li>
                              <span className="m-r-10">
                                Conduct Inspections / Audits Across Multiple
                                Companies :
                              </span>{" "}
                              <FontAwesomeIcon icon={faTimes} style={{ color: "red" }}/>
                            </li>
                            <li>
                              <span className="m-r-10">
                                Manage and monitor your team :
                              </span>{" "}
                              <FontAwesomeIcon icon={faTimes} style={{ color: "red" }}/>
                            </li>
                            <li>
                              <span className="m-r-10">
                                Microsoft Business Intelligence (BI) Integration
                                (Post 10 inspections) :
                              </span>{" "}
                              <FontAwesomeIcon icon={faTimes} style={{ color: "red" }}/>
                            </li>
                            <li>
                              <span className="m-r-10">
                                Integration with Company Software and ERP
                                systems :
                              </span>{" "}
                              <FontAwesomeIcon icon={faTimes} style={{ color: "red" }}/>
                            </li>
                            <li
                              style={{
                                backgroundColor: "#055160",
                                color: "#ffffff",
                              }}
                            >
                              <div style={{lineHeight:"1.4",display:"flex",flexDirection:"column",alignItems:"center",margin:"0"}}>
                              <div style={{marginBottom:"5px"}}>
                                <span className="pricingInline">Pricing :</span>{" "}
                                <span className="currency"> $50 </span>
                                <span className="time m-l-5" style={{fontWeight:"normal"}}>
                                  {" "}
                                  Per Inspection **
                                </span>
                                </div>
                                <div className="FreeInspections">** Two inspections are free. Sample checklist included for trial.</div>
                               
                              </div>
                            </li>
                          </ul>
                        </Col>

                        <Col className="pricing--footer">
                          <Col className="text-start">
                            <b> Download App : For Individual Users</b>
                          </Col>
                          <ul
                            style={{ padding: "0", listStyleType: "none" }}
                            className="text-start m-b-0"
                          >
                           
                            <li>
                              <b>
                               
                                <FontAwesomeIcon
                                  icon={faArrowCircleRight}
                                  className="m-l-10 m-t-3 m-r-10 "
                                />
                              </b>
                             Register on App
                             <span className="pull-right m-r-10">
                             <a
                            href="https://apps.apple.com/in/app/inspectnau/id6737123212"
                            className="m-l-5"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src="/Images/AppStore.png"
                              alt="App Store Download"
                              style={{ maxWidth: "80px", animation: "none" }}
                              className="img-fluid"
                            />
                          </a>
                          <a href="https://play.google.com/store/apps/details?id=com.LaunchfortTechnologies.InspectNau&hl=en"
                          target="_blank"
                          rel="noreferrer">
                              <img
                            src="/Images/playStore.png"
                            alt="Get it on the Play Store"
                            style={{ maxWidth: "80px", animation: "none" }}
                            className="img-fluid m-l-10"
                          />
                          </a>
                          </span>
                              <div  style={{fontSize:"0.8rem"}}>(<i style={{fontSize:"0.8rem"}}>* Use Auth Code <b style={{fontSize:"0.8rem"}}>"ORION"</b>.</i>)</div>
                            </li>
                           
                           
                          </ul>
                        </Col>
                      </Col>
                    </Col>

                    <Col className="col-12 col-lg-4 pricing-table text-center pr-0 pl-0">
                      <Col className="pricing-panel pricing-panel-2">
                        <Col className="pricing--heading text--center">
                          <h4>Company / Enterprise Plan</h4>
                          <Col className="pricing--desc">
                            Team of inspectors and/or Onboard Ships with
                            centralized management and custom Checklists.
                          </Col>
                        </Col>

                        <Col className="pricing--body">
                          <ul className="pricing--list list-unstyled">
                            <li>
                              <span className="m-r-10">
                                Pre-loaded SIRE 2.0 and RightShip Checklists :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Two free Inspections :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Structured PDF report export :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Export Observations list in Excel (csv) :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Speech to text for observations (Online /
                                Offline) :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Stylus compatibility :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Manage your account and credits on Cloud :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Own and/or Client's Custom Checklists :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Conduct Inspections / Audits Across Multiple
                                Companies :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Manage and monitor your team :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Microsoft Business Intelligence (BI) Integration
                                (Post 10 inspections) :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li>
                              <span className="m-r-10">
                                Integration with Company Software and ERP
                                systems :
                              </span>{" "}
                               <FontAwesomeIcon icon={faCheck} />
                            </li>
                            <li
                              style={{
                                backgroundColor: "#268a7a",
                                color: "#ffffff",
                              }}
                            >
                             <div style={{lineHeight:"1.4",display:"flex",flexDirection:"column",alignItems:"center",margin:"0"}}>
                               
                                <div style={{marginBottom:"5px"}}>
                                <span className="pricingInline">Pricing :</span>{" "}
                                <span className="currency"> $75</span>
                                <span className="time m-l-5" style={{fontWeight:"normal"}}>
                                  {" "}
                                  Per Inspection **
                                </span>
                                </div>
                                <div className="FreeInspections">** Two inspections are free. Sample checklist included for trial.</div>
                              </div>
                            </li>
                          </ul>
                        </Col> 

                        <Col className="pricing--footer">
                        <Col className="text-start">
                            <b>For Companies</b>
                          </Col>
                          <ul
                            style={{ padding: "0", listStyleType: "none" }}
                            className="text-start m-b-0"
                          >
                           
                            <li>
                              <b>
                               
                                <FontAwesomeIcon
                                  icon={faArrowCircleRight}
                                  className="m-l-10 m-t-3 m-r-10"
                                />
                              </b>Register Your Company
                              <Button
                                variant="primary"
                                size="sm"
                                className="m-t-5 m-b-5 p-t-1 p-b-1 m-l-5 pull-right"
                              >
                                <Link
                                  href="https://inspectnau.orionmarineconcepts.com/companyregistration.aspx"
                                  target="_blank"
                                  style={{
                                    fontSize: "1rem",
                                    padding: "0px 4px",
                                    color: "#ffffff",
                                  }}
                                >
                                  Register
                                </Link>
                              </Button>
                              {/* <div  style={{fontSize:"0.8rem"}}>(<i style={{fontSize:"0.8rem"}}>* To get Auth Code.</i>)</div> */}
                            </li>

                            {/* <li>
                              <b>
                               
                                <FontAwesomeIcon
                                  icon={faArrowCircleRight}
                                  className="m-l-10 m-t-3 m-r-10"
                                />
                              </b>Inspectors/Auditors register on the App
                              <a
                            href="https://apps.apple.com/in/app/inspectnau/id6737123212"
                            className="m-l-5"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <img
                              src={AppStore}
                              alt="App Store Download"
                              style={{ maxWidth: "70px", animation: "none" }}
                              className="img-fluid"
                            />
                          </a>
                              
                              <img
                            src={PlayStore}
                            alt="Coming Soon on the Play Store"
                            style={{ maxWidth: "70px", animation: "none" }}
                            className="img-fluid m-l-10"
                          />
                              <div  style={{fontSize:"0.8rem"}}>(<i style={{fontSize:"0.8rem"}}>* Use company Auth Code to register.</i>)</div>
                            </li> */}
                            
                           
                          </ul>

                        </Col>
                      </Col>
                    </Col>

                   
                  </Row>
                  <Row>
                  <Col
                      className="col-12 mt-5"
                      style={{
                        backgroundColor: "#256ea0",
                        color: "#ffffff",
                        borderRadius: "5px",
                        padding: "10px",
                      }}
                    >
                      <p className="text-start">
                        <b className="fs-20">Note* :</b> Independent inspectors
                        conducting inspections for multiple companies can opt
                        for the Company Plan to access team management, custom
                        checklists, and enhanced integration features for
                        streamlined operations.
                      </p>
                    </Col>
                  </Row>
                </Container>


              </div>
            </Col>
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
                  style={{ color: "#ffffff", paddingTop: "1%" }}
                >
                  Redefine Maritime Excellence{" "}
                </h1>
                <h1
                  className="BiEmpoweringBottomText"
                  style={{ color: "#ffffff" }}
                >
                  Shape the future of maritime management with our innovative
                  apps that enhance operations and boost efficiency.{" "}
                </h1>
              </Col>
              <Col xs={12} md={4}>
                <a
                  href="https://apps.apple.com/in/app/inspectnau/id6737123212"
                  className="float-left m-t-50 m-l-10"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/Images/AppStore.png"
                    alt="App Store Download"
                    style={{ maxWidth: "140px", animation: "none" }}
                    className="img-fluid"
                  />
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.LaunchfortTechnologies.InspectNau&hl=en"
                  className="float-left m-t-50 m-l-20"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/Images/playStore.png"
                    alt="App Store Download"
                    style={{ maxWidth: "140px", animation: "none" }}
                    className="img-fluid"
                  />
                </a>
              </Col>
            </Row>
          </Row>
        </Container>
      </Row>
    </>
  );
}
