"use client";
import { Container, Row, Col, Button, Accordion } from "react-bootstrap";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function EDMS(index) {
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
        <Container fluid className="p-l-0 p-r-0 backgroundTtachment">
          <Row className="m-l-0 m-r-0 motion-container">
            <Col xs={12} sm={6}>
              {!isMobile ? (
                <motion.div
                  variants={boxVariantsL}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                >
                  <h1
                    className="p-l-10per un-leash-Heading text-left"
                    style={{
                      color: "rgb(6 23 68)",
                      paddingTop: "7%",
                      paddingBottom: "3%",
                      fontSize: "2rem",
                    }}
                  >
                    NAU 2.1 - Electronic Safety Management System{" "}
                  </h1>

                  <h1
                    className="p-l-10per un-leash-command-subheading text-left"
                    style={{ color: "rgb(6 23 68)", paddingTop: "0" }}
                  >
                    Improve Efficiency And Provide Better Experiences!
                  </h1>

                  <div className="p-l-10per text-left un-leash-paragraph">
                    In today's environmentally conscious world, NAU's Electronic
                    Safety Management System (e-SMS) empowers shipping companies
                    to revolutionize their document management practices. This
                    user-friendly, web-based system eliminates the need for
                    paper-based documents, promoting sustainability while
                    significantly enhancing efficiency, accuracy, and regulatory
                    compliance.
                  </div>
                  <p className="p-l-10per text-left mt-3 un-leash-efficient-subheading">
                    Embrace a More Efficient and Sustainable Future
                  </p>
                  <p className="p-l-10per text-left un-leash-paragraph">
                    NAU's e-SMS is the perfect solution for shipping companies
                    looking to streamline document management practices, improve
                    efficiency, and contribute to a greener future.
                  </p>
                </motion.div>
              ) : (
                <div>
                  <h1
                    className="p-l-10per un-leash-Heading text-left"
                    style={{
                      color: "rgb(6 23 68)",
                      paddingTop: "7%",
                      paddingBottom: "3%",
                      fontSize: "2rem",
                    }}
                  >
                    NAU 2.1 - Electronic Safety Management System{" "}
                  </h1>

                  <h1
                    className="p-l-10per un-leash-command-subheading text-left"
                    style={{ color: "rgb(6 23 68)", paddingTop: "0" }}
                  >
                    Improve Efficiency And Provide Better Experiences!
                  </h1>

                  <div className="p-l-10per text-left un-leash-paragraph">
                    In today's environmentally conscious world, NAU's Electronic
                    Safety Management System (e-SMS) empowers shipping companies
                    to revolutionize their document management practices. This
                    user-friendly, web-based system eliminates the need for
                    paper-based documents, promoting sustainability while
                    significantly enhancing efficiency, accuracy, and regulatory
                    compliance.
                  </div>
                  <p className="p-l-10per text-left mt-3 un-leash-efficient-subheading">
                    Embrace a More Efficient and Sustainable Future
                  </p>
                  <p className="p-l-10per text-left un-leash-paragraph">
                    NAU's e-SMS is the perfect solution for shipping companies
                    looking to streamline document management practices, improve
                    efficiency, and contribute to a greener future.
                  </p>
                </div>
              )}
            </Col>

            <Col xs={12} sm={6}>
              {!isMobile ? (
                <motion.div
                  variants={boxVariantsR}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                >
                  <img
                    src="/Images/E-SMS.png"
                    alt="E-cloud"
                    className="p-t-5per img-fluid"
                  />
                </motion.div>
              ) : (
                <div>
                  <img
                    src="/Images/E-SMS.png"
                    alt="E-cloud"
                    className="p-t-5per img-fluid"
                  />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="m-l-0 m-r-0 p-l-0 p-r-0">
        <Container fluid className="p-l-0 p-r-0 ">
          <Container></Container>
        </Container>
      </Row>

      <Row className="m-l-0 m-r-0 p-l-0 p-r-0">
        <Container>
          <Row className="motion-container">
            <Col xs={12}>
              <h3
                className="text-center font-bold m-t-80 mb-5"
                style={{ color: "rgb(6 23 68)" }}
              >
                Key Features of NAU's e-SMS
              </h3>
            </Col>
            {!isMobile ? (
              <motion.div
                variants={boxVariantsPop}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0 }}
              >
                <Accordion alwaysOpen className=" text-start">
                  <Row className="g-4 CommonAccordion">
                    <Col xs={12} sm={6}>
                      <Accordion.Item eventKey="0" className=" mb-2">
                        <Accordion.Header>
                          Digitized Ship and Shore Manuals{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            SMS manuals, operations, management, and technical
                            manuals are fully digitized for seamless access.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" className=" mt-2 mb-2">
                        <Accordion.Header>Company Policies </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Easy access to all company policies, ensuring
                            compliance and consistency.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2" className=" mt-2 mb-2">
                        <Accordion.Header>
                          User-Friendly Interface
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul className="list-items list-items-layout2 list-unstyled text-left">
                            <li>
                              Intuitive search function for quick and efficient
                              document retrieval.
                            </li>
                            <li>
                              Bookmarking feature to save important sections.
                            </li>
                            <li>
                              Memory of the last read position for easy
                              continuation.
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5" className=" mt-2 mb-2">
                        <Accordion.Header>
                          Hierarchical Revision Process{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul className="list-items list-items-layout2 list-unstyled text-left">
                            <li>
                              Automatic revision creation and traceability for
                              all documents.
                            </li>
                            <li>
                              Ensure up-to-date and accurate documentation.
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6" className=" mt-2 mb-2">
                        <Accordion.Header>
                          Fleet Communications
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Release and maintain fleet circulars, fleet alerts,
                            and fleet notices.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Col>
                    <Col xs={12} sm={6}>
                      <Accordion.Item eventKey="7" className="mb-2">
                        <Accordion.Header>
                          Forms and Checklists Library
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul className="list-items list-items-layout2 list-unstyled text-left">
                            <li>
                              Centralized repository for easy access and
                              retrieval of forms and checklists.
                            </li>
                            <li>
                              Forms related to specific manuals are accessible
                              in their respective sections.
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="8" className=" mt-2 mb-2">
                        <Accordion.Header>
                          Integrated Maintenance Procedures
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Connect procedure forms and checklists to the
                            planned maintenance system for machinery
                            maintenance.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="9" className=" mt-2 mb-2">
                        <Accordion.Header>
                          Comprehensive Dashboard
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Overview of the latest updates and information
                            across the entire SMS.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="10" className=" mt-2 mb-2">
                        <Accordion.Header>
                          System Familiarization
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul className="list-items list-items-layout2 list-unstyled text-left">
                            <li>
                              Officers and crew can familiarize themselves with
                              the system.
                            </li>
                            <li>
                              Recordings of time spent on sections and logging
                              for audits and internal records.
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Col>
                  </Row>
                </Accordion>
              </motion.div>
            ) : (
              <div>
                <Accordion alwaysOpen className=" text-start">
                  <Row className="g-4 CommonAccordion">
                    <Col xs={12} sm={6}>
                      <Accordion.Item eventKey="0" className=" mb-2">
                        <Accordion.Header>
                          Digitized Ship and Shore Manuals{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            SMS manuals, operations, management, and technical
                            manuals are fully digitized for seamless access.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1" className=" mt-2 mb-2">
                        <Accordion.Header>Company Policies </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Easy access to all company policies, ensuring
                            compliance and consistency.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2" className=" mt-2 mb-2">
                        <Accordion.Header>
                          User-Friendly Interface
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul className="list-items list-items-layout2 list-unstyled text-left">
                            <li>
                              Intuitive search function for quick and efficient
                              document retrieval.
                            </li>
                            <li>
                              Bookmarking feature to save important sections.
                            </li>
                            <li>
                              Memory of the last read position for easy
                              continuation.
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5" className=" mt-2 mb-2">
                        <Accordion.Header>
                          Hierarchical Revision Process{" "}
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul className="list-items list-items-layout2 list-unstyled text-left">
                            <li>
                              Automatic revision creation and traceability for
                              all documents.
                            </li>
                            <li>
                              Ensure up-to-date and accurate documentation.
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6" className=" mt-2 mb-2">
                        <Accordion.Header>
                          Fleet Communications
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Release and maintain fleet circulars, fleet alerts,
                            and fleet notices.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Col>
                    <Col xs={12} sm={6}>
                      <Accordion.Item eventKey="7" className="mb-2">
                        <Accordion.Header>
                          Forms and Checklists Library
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul className="list-items list-items-layout2 list-unstyled text-left">
                            <li>
                              Centralized repository for easy access and
                              retrieval of forms and checklists.
                            </li>
                            <li>
                              Forms related to specific manuals are accessible
                              in their respective sections.
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="8" className=" mt-2 mb-2">
                        <Accordion.Header>
                          Integrated Maintenance Procedures
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Connect procedure forms and checklists to the
                            planned maintenance system for machinery
                            maintenance.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="9" className=" mt-2 mb-2">
                        <Accordion.Header>
                          Comprehensive Dashboard
                        </Accordion.Header>
                        <Accordion.Body>
                          <p>
                            Overview of the latest updates and information
                            across the entire SMS.
                          </p>
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="10" className=" mt-2 mb-2">
                        <Accordion.Header>
                          System Familiarization
                        </Accordion.Header>
                        <Accordion.Body>
                          <ul className="list-items list-items-layout2 list-unstyled text-left">
                            <li>
                              Officers and crew can familiarize themselves with
                              the system.
                            </li>
                            <li>
                              Recordings of time spent on sections and logging
                              for audits and internal records.
                            </li>
                          </ul>
                        </Accordion.Body>
                      </Accordion.Item>
                    </Col>
                  </Row>
                </Accordion>
              </div>
            )}
          </Row>
          <Row className="text-start mt-5">
            <Col xs={12} md={6} className="motion-container sticky-top">
              <img
                src="/Images/SMSDashboard.png"
                alt="Products"
                className="img-fluid"
              />
            </Col>
            <Col xs={12} md={6} className=" motion-container">
              {!isMobile ? (
                <motion.div
                  variants={boxVariantsR}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                >
                  <p className="un-leash-paragraph">
                    NAU's e-SMS is particularly valuable for managing your
                    Safety Management System (SMS) documents. Our system
                    provides a centralized repository for all your SMS
                    documents, including:
                  </p>
                  <ul>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Company Safety Manuals and Policies
                    </li>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Office Manuals
                    </li>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Shipboard Manuals
                    </li>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Guidance Documents
                    </li>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Company Circulars and Fleet Alerts
                    </li>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Forms and Checklists
                    </li>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Reference Library
                    </li>
                  </ul>
                  <p className="un-leash-paragraph font-bold font-italic">
                    With NAU's e-SMS, your SMS documents are always readily
                    available to crew members, ensuring they have the
                    information they need to operate the vessel safely and
                    efficiently. The system also includes features like
                    bookmarking, reading history, and intelligent search to
                    facilitate easy access to critical information.
                  </p>
                </motion.div>
              ) : (
                <div>
                  <p className="un-leash-paragraph">
                    NAU's e-SMS is particularly valuable for managing your
                    Safety Management System (SMS) documents. Our system
                    provides a centralized repository for all your SMS
                    documents, including:
                  </p>
                  <ul>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Company Safety Manuals and Policies
                    </li>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Office Manuals
                    </li>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Shipboard Manuals
                    </li>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Guidance Documents
                    </li>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Company Circulars and Fleet Alerts
                    </li>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Forms and Checklists
                    </li>
                    <li style={{ color: "rgb(6, 23, 68)", fontWeight: "600" }}>
                      Reference Library
                    </li>
                  </ul>
                  <p className="un-leash-paragraph font-bold font-italic">
                    With NAU's e-SMS, your SMS documents are always readily
                    available to crew members, ensuring they have the
                    information they need to operate the vessel safely and
                    efficiently. The system also includes features like
                    bookmarking, reading history, and intelligent search to
                    facilitate easy access to critical information.
                  </p>
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={12} className="text-center m-t-100">
              <h4
                className="font-bold m-b-20"
                style={{ color: "rgb(6 23 68)", fontSize: "1.7rem" }}
              >
                By implementing NAU's e-SMS, you can experience a multitude of
                benefits, including:
              </h4>
              {!isMobile ? (
                <motion.div
                  variants={boxVariantsPop}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                >
                  <div className="features1_component-copy text-left m-t-10 motion-container">
                    <div className="features-item-1">
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
                            <h3 className="heading-small">Reduced Costs</h3>
                          </div>
                          <p className="paragraph-11">
                            Save money on printing, paper, storage, and filing.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-2">
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
                              Improved Productivity
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Spend less time searching for documents and more
                            time focusing on important tasks.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-3">
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
                              Enhanced Regulatory Compliance
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Ensure easy access to critical documents for audits
                            and inspections.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-4">
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
                              Increased Collaboration
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Improve communication and collaboration between
                            shore-based staff and crew members.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-5">
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
                            <h3 className="heading-small">
                              Environmental Sustainability
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Reduce your environmental footprint by going
                            paperless.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div>
                  <div className="features1_component-copy text-left m-t-10 motion-container">
                    <div className="features-item-1">
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
                            <h3 className="heading-small">Reduced Costs</h3>
                          </div>
                          <p className="paragraph-11">
                            Save money on printing, paper, storage, and filing.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-2">
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
                              Improved Productivity
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Spend less time searching for documents and more
                            time focusing on important tasks.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-3">
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
                              Enhanced Regulatory Compliance
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Ensure easy access to critical documents for audits
                            and inspections.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-4">
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
                              Increased Collaboration
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Improve communication and collaboration between
                            shore-based staff and crew members.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="features-item-5">
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
                            <h3 className="heading-small">
                              Environmental Sustainability
                            </h3>
                          </div>
                          <p className="paragraph-11">
                            Reduce your environmental footprint by going
                            paperless.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Col>
          </Row>
          <Row className=" m-t-80">
            <Col xs={12} md={6}>
              <img
                src="/Images/fleet-types.jpg"
                alt="Products"
                className="img-fluid"
              />
            </Col>
            <Col xs={12} md={6} className="motion-container p-l-20">
              {!isMobile ? (
                <motion.div
                  variants={boxVariantsR}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0 }}
                >
                  <h3
                    className="text-left font-bold m-t-80"
                    style={{ color: "rgb(6 23 68)" }}
                  >
                    Why Choose Our E-SMS?
                  </h3>
                  <ul className="list-items list-items-layout2 list-unstyled text-left">
                    <li>
                      Enhanced Efficiency: Streamlined access to critical
                      documents reduces search time and boosts productivity.{" "}
                    </li>
                    <li>
                      Accurate Document Control: A hierarchical revision process
                      with automatic traceability ensures all documents are
                      current and accurate.
                    </li>
                    <li>
                      Effective Communication: Centralized fleet circulars,
                      alerts, and notices maintain clear and consistent
                      communication across the fleet.
                    </li>
                    <li>
                      Organized Documentation: Centralized library for forms and
                      checklists ensures easy access and retrieval.{" "}
                    </li>
                    <li>
                      Integrated Maintenance Management: Connecting procedure
                      forms and checklists to the planned maintenance system
                      enhances efficiency and accuracy in machinery maintenance.
                    </li>
                  </ul>
                </motion.div>
              ) : (
                <div>
                  <h3
                    className="text-left font-bold m-t-80"
                    style={{ color: "rgb(6 23 68)" }}
                  >
                    Why Choose Our E-SMS?
                  </h3>
                  <ul className="list-items list-items-layout2 list-unstyled text-left">
                    <li>
                      Enhanced Efficiency: Streamlined access to critical
                      documents reduces search time and boosts productivity.{" "}
                    </li>
                    <li>
                      Accurate Document Control: A hierarchical revision process
                      with automatic traceability ensures all documents are
                      current and accurate.
                    </li>
                    <li>
                      Effective Communication: Centralized fleet circulars,
                      alerts, and notices maintain clear and consistent
                      communication across the fleet.
                    </li>
                    <li>
                      Organized Documentation: Centralized library for forms and
                      checklists ensures easy access and retrieval.{" "}
                    </li>
                    <li>
                      Integrated Maintenance Management: Connecting procedure
                      forms and checklists to the planned maintenance system
                      enhances efficiency and accuracy in machinery maintenance.
                    </li>
                  </ul>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className="m-l-0 m-r-0 p-l-0 p-r-0">
        <Container fluid style={{ padding: "0" }} className=" m-t-60 text-left">
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
                Set sail on a journey that redefines efficiency and ushers in a
                new era in maritime management. Join the NAU 2.1 wave today.{" "}
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
        </Container>
      </Row>
    </>
  );
}

export default EDMS;
