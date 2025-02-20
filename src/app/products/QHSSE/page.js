"use client";
import { Container, Row, Accordion, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function QHSSE(index) {
    const [isMobile, setIsMobile] = useState(false);
      
          useEffect(() => {
              const checkMobile = () => window.innerWidth < 1100;
              setIsMobile(checkMobile);
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
      
          const boxVariantsPop = !isMobile
              ? {
                    hidden: { opacity: 0, scale: 0.2 },
                    visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
                }
              : { hidden: { opacity: 1 }, visible: { opacity: 1 } };
    
    
    return (
        <>


            <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
                <Container fluid className="p-l-0 p-r-0 backgroundTtachment">
                    <Row className='m-l-0 m-r-0 motion-container'>
                        <Col xs={12} md={5}>
                            <motion.div variants={boxVariantsL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                                <img src="/Images/ProductImages/qhsse_cover.png" alt="E-cloud" className='p-t-5per img-fluid' />
                            </motion.div>
                        </Col>
                        <Col xs={12} md={7}>
                            <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                            <h1 className='p-l-10per BiEmpowering'  style={{ color: "rgb(6 23 68)", paddingTop: "7%",fontSize:"2rem" }}>NAU's Quality, Health, Safety, Security and Environment  </h1>
                            {/* <h4 className='p-l-10per BiEmpowering'  style={{ color: "rgb(6 23 68)", paddingTop: "1%", fontSize: "2rem" }}>Safeguarding lives, environment, and excellence.</h4> */}
                            </motion.div>
                            <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.9 }} >
                                <h1 className="p-l-10per un-leash-command-subheading text-left" style={{ color: "rgb(6 23 68)", paddingTop: "1%" }}>Ensure Safety, Efficiency, and Compliance with NAU's QHSSE Module  </h1>
                                <div className='p-l-10per text-left fs-18' style={{ color: "rgb(6 23 68)" }}>
                                    NAU's QHSSE module is a comprehensive software solution designed to empower shipping companies to manage all aspects of Quality, Health, Safety, Security, and Environment (QHSSE).
                                    This user-friendly, web-based system streamlines QHSSE processes, minimizes paperwork, and ensures regulatory compliance, all while promoting a culture of safety and environmental responsibility.
                                </div>
                            </motion.div>
                            <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.1 }}  >
                                <h1 className="p-l-10per un-leash-command-subheading text-left" style={{ color: "rgb(6 23 68)", paddingTop: "1%" }}>Invest in Your Future with NAU's QHSSE Module</h1>
                                <div className='p-l-10per text-left fs-18' style={{ color: "rgb(6 23 68)" }}>
                                    Our QHSSE module is an investment in the safety, efficiency, and environmental sustainability of your shipping operations.
                                    By proactively managing QHSSE risks, you can create a safer workplace for your crew, minimize environmental impact, ensure regulatory compliance, and ultimately contribute to the long-term success of your business.
                                </div>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="p-l-0 p-r-0 ">
                    <Row className='mt-3 mb-3' style={{ margin: '0', padding: '0' }}>
                        <Container>
                            <Row className="mt-5 text-start">
                                <Col xs={12} className='motion-container text-center'>
                                    <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                                        <h1 className='un-leash-command-heading'>How NAU's QHSSE Module Saves You Time and Money</h1>
                                        <h1 className='un-leash-efficient-subheading m-t-25'>NAU's QHSSE module offers a multitude of features designed to streamline your QHSSE operations and reduce administrative costs:</h1>

                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6}>

                                    <img src="/Images/Mockups/qhsse-dashboard-mockup2.png" alt="E-cloud" className='p-t-5per img-fluid sticky-top' />
                                </Col>
                                <Col xs={12} md={6} className='motion-container'>
                                    <h3 className='text-left font-bold mt-5 mb-1' style={{ color: "rgb(6 23 68)" }}>Key Features</h3>



                                    <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >

                                        <Accordion className=' text-start'>
                                            <Row className="g-4 CommonAccordion">
                                                <div className='col-12 col-sm-12'>
                                                    <Accordion.Item eventKey="0" className=' mt-2 mb-2'>
                                                        <Accordion.Header>Reports and Analytics</Accordion.Header>
                                                        <Accordion.Body>
                                                            <ul className="list-items list-items-layout2 list-unstyled text-left">
                                                                <li>Individual Dashboards for each Section: Maintain a centralized repository for all your vessel, crew, and class certificates, easily accessible from any internet-connected device. </li>
                                                                <li>Business Intelligence Dashboard & Reports: Define renewal dates for each certificate and receive automated alerts well in advance to ensure timely renewal.</li>
                                                                <li>Smart filters for Searching & Sortings: Upload electronic copies of your certificates for secure storage and easy retrieval.</li>
                                                                <li>Grouping as per user Requirements: Track internal and external audits and harmonized surveys alongside certificate information.</li>
                                                                <li>User defined views & reports: Benefit from a predefined schema that includes common ship certificates, ensuring you never miss a critical renewal.</li>
                                                                <li>Generate preformatted reports in Pdf and Excel: Set up multiple reminder notifications via email or SMS to guarantee you stay ahead of renewal deadlines.</li>
                                                            </ul>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1" className=' mt-2 mb-2'>

                                                        <Accordion.Header>Inspections & Audits</Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>Manage internal and external audits seamlessly, including SIRE, CDI, PSC, Flag State Control, and terminal inspections. Our system ensures clear identification of deficiencies, tracks corrective actions, and simplifies closeout procedures.</p>
                                                        </Accordion.Body>
                                                    </Accordion.Item>

                                                    <Accordion.Item eventKey="2" className=' mt-2 mb-2'>
                                                        <Accordion.Header>Incidents & Accidents</Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>Record and track all incidents, accidents, and near misses in near real-time, facilitating trend analysis and identification of root causes.</p>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                   
                                                    <Accordion.Item eventKey="4" className=' mt-2 mb-2'>
                                                        <Accordion.Header>Safety Committee Meetings</Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>
                                                                Ship staff can effortlessly record the minutes of safety meetings on the system's electronic form. The ship and shore can exchange comments through the system. The reports are always available and easily retrievable for audit and traceability.
                                                            </p>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="5" className=' mt-2 mb-2'>
                                                        <Accordion.Header>Master's Review</Accordion.Header>
                                                        <Accordion.Body>
                                                            <p> The Master's system review on board ships can be carried out through this system on the customized company's form. The form data and Master's suggestions are transmitted to the shore system. The shore managers can review and respond through the system.</p>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="6" className=' mt-2 mb-2'>
                                                        <Accordion.Header>Permit to Work System</Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>The users can create job-specific permits so that the necessary precautions are put in place to safely carry out a task within a specified time frame. The system ensures that these protocols are followed & implemented together with the important documents such as method statements and risk assessments.</p>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="7" className=' mt-2 mb-2'>
                                                        <Accordion.Header>Risk Assessments (Ship & Shore)</Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>Identify the root causes of incidents to prevent them from happening again. Our sophisticated RCA module guides users through a structured process to pinpoint underlying contributing factors.</p>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                 
                                                </div>
                                            </Row>
                                        </Accordion>
                                    </motion.div>
                                </Col>

                            </Row>

                        </Container>

                    </Row>
                </Container>
                <Row style={{ margin: "0", padding: "0" }}>
                    <Col xs={12} className='mt-5'>
                        <h1 className='un-leash-Heading'>Orion QHSSE Guardian</h1>
                    </Col>
                    <Col xs={12} style={{ padding: "0" }} className='m-t-15'>
                        <img src="/Images//Mockups/Hsseq.jpg" alt='Products' className='img-fluid sticky-top' />
                    </Col>
                </Row>
                <Row className='m-l-0 m-r-0 p-r-0 p-l-0'>
                <Container>
                    <Row className="text-start">
                        <Col xs={12} className='m-t-80'>
                            <h3 style={{ color: "rgb(6, 23, 68)", fontWeight: "bold", fontSize: "2rem" }}>Why is QHSSE Important?</h3>
                            <p style={{ color: "rgb(6, 23, 68)", fontWeight: "bold" }}>A robust QHSSE program is essential for any successful shipping operation. It helps to:</p>
                        </Col>

                        <Col xs={12} md={6}>
                            <div className="features1_component-copy text-left m-t-5 motion-container" style={{ gridTemplateColumns: "1fr" }}>
                                <motion.div variants={boxVariantsL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                                    <div className="features-item-1">
                                        <div className="layout11_item" style={{ padding: "1rem", marginBottom: "1rem" }}>
                                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/flagsimmediately-o.svg" loading="lazy" alt="" /></div>
                                            <div className="layout11_content-wrapper">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-small">Reduce accidents and injuries</h3>
                                                </div>
                                                <p className="paragraph-11">By proactively identifying and mitigating risks, you can create a safer work environment for your crew and minimize the potential for costly accidents.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features-item-2">
                                        <div className="layout11_item" style={{ padding: "1rem", marginBottom: "1rem" }}>
                                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/decisions,faster-o..svg" loading="lazy" alt="" /></div>
                                            <div className="layout11_content-wrapper">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-small">Enhance regulatory compliance</h3>
                                                </div>
                                                <p className="paragraph-11">Stay ahead of the curve with a system that keeps you up-to-date on the latest QHSSE regulations and facilitates the collection and storage of essential documentation.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features-item-4">
                                        <div className="layout11_item" style={{ padding: "1rem", marginBottom: "1rem" }}>
                                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Flowdata.svg" loading="lazy" alt="" /></div>
                                            <div className="layout11_content-wrapper">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-small">Protect the environment</h3>
                                                </div>
                                                <p className="paragraph-11">QHSSE regulations help to prevent pollution from shipping operations. Our system equips you with the tools to comply with the latest environmental regulations, such as MARPOL Annex I and VI, and contribute to a sustainable maritime industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features-item-5">
                                        <div className="layout11_item" style={{ padding: "1rem", marginBottom: "1rem" }}>
                                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Supportingyoursuccess-o..svg" loading="lazy" alt="" /></div>
                                            <div className="layout11_content-wrapper">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-small">Improve operational efficiency</h3>
                                                </div>
                                                <p className="paragraph-11">Streamlined QHSSE processes can save time and money. Our system automates tasks, reduces administrative burdens, and facilitates clear communication between shore-based staff and crew members.</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <img src="/Images/Mockups/qhsse-dashboard-mockupTop.png" alt='Products' className='img-fluid sticky-top' />
                        </Col>
                    </Row>
                </Container>
                </Row>
                <Container fluid style={{ padding: '0' }} className=' m-t-60 text-left'>
                    <Row style={{ margin: '0', padding: '0' }}>

                        <Row className=' pt-5 pb-5 text-center' style={{ backgroundImage: "url(/Images/Nau/CrossPattern.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "0", margin: "0" }}>
                            <Col xs={12} md={8}>
                                <h1 className="BiEmpowering" style={{ color: "#ffffff", paddingTop: "3%" }}>Ready to Sail? </h1>
                                <h1 className="BiEmpoweringBottomText" style={{ color: "#ffffff", paddingTop: "3%" }}>Set sail on a journey that redefines efficiency and ushers in a new era in maritime management. Join the NAU 2.1 wave today. </h1>
                            </Col>
                            <Col xs={12} md={4}>
                                <Button variant="light" className='m-t-90 p-l-50 p-r-50 fs-25 p-t-10 p-b-10 btn btn-light'>
                                    <Link href='/ScheduleDemo' style={{ fontSize: "1.4rem" }}>
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

export default QHSSE;