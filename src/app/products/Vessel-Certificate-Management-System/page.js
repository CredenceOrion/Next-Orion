"use client";
import { Container, Row, Col, Button } from 'react-bootstrap';

import Link from 'next/link';
import { motion } from 'framer-motion';



function VCertificate(index) {
    let boxVariantsL = {};
    let boxVariantsR = {};
    let boxVariantsPop = {};
    const isMobile =typeof window !=="undefined" && window.innerWidth < 1100;
    if (!isMobile) {
        boxVariantsL = {
            initial: { opacity: 0 },
            whileInView: { opacity: 1, transition: { duration: 0.7 } }
        }
        boxVariantsR = {
            initial: { opacity: 0 },
            whileInView: { opacity: 1, transition: { duration: 0.7 } }
        }
        boxVariantsPop = {
            initial: { opacity: 0, scale: 0.2 },
            whileInView: { opacity: 1, scale: 1, transition: { duration: 1 } }
        }
    }
    else {
        boxVariantsL = {
            initial: { opacity: 1 },
            whileInView: { opacity: 1 }
        }
        boxVariantsR = {
            initial: { opacity: 1 },
            whileInView: { opacity: 1 }
        }
        boxVariantsPop = {
            initial: { opacity: 1 },
            whileInView: { opacity: 1 }
        }
    }
    return (

        <>


            <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
                <Container fluid className="p-l-0 p-r-0 backgroundTtachment">
                    <Row className='m-l-0 m-r-0 motion-container'>
                        <Col xs={12} md={6}>
                            <motion.div variants={boxVariantsL} whileInView="whileInView" initial="initial" viewport={{ once: true }} >
                                <img src="/Images/ProductImages/tab.png" alt="E-cloud" className='p-t-5per p-l-10per p-r-10per img-fluid' style={{ maxWidth: "90%" }} />
                            </motion.div>
                        </Col>
                        <Col xs={12} md={6}>
                            <motion.div variants={boxVariantsR} whileInView="whileInView" initial="initial" viewport={{ once: true }} >

                            <h1 className='un-leash-Heading text-left'  style={{ color: "rgb(6 23 68)", paddingBottom: "3%",paddingTop: "5%", fontSize: "2rem" }}>NAU 2.1 - Vessel Certificate Management System </h1>
                                <h1 className='un-leash-command-subheading text-left'>NAU's VCMS: Never Miss a Renewal Again</h1>
                                <p className=' text-left'>
                                    NAU's Vessel Certificate Management System (VCMS) is an essential tool for ship owners and operators looking to ensure regulatory compliance and avoid costly disruptions caused by expired certificates.
                                    This user-friendly, web-based system provides a centralized platform for managing all your vessel, crew, and class certificates, streamlining processes and guaranteeing peace of mind.
                                </p>
                                <h1 className='m-t-40 un-leash-command-subheading text-left'>The Importance of Certificate Management</h1>
                                <p className=' text-left'>
                                    Maintaining a vast array of vessel certificates can be a complex and time-consuming task.
                                    Manually tracking renewal dates increases the risk of missed deadlines, which can lead to detentions, fines, and operational delays.
                                </p>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
            </Row>
            <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
                <Container fluid className="p-l-0 p-r-0 ">
                    <Row style={{ margin: '0', padding: '0' }}>
                        <Container>
                            <Row className='mt-1'>
                                <Col xs={12} md={6} className='motion-container'>

                                    <h4 className="text-left un-leash-efficient-subheading mb-2">
                                        NAU's VCMS eliminates the hassle of manual certificate tracking by offering a comprehensive suite of features designed to:
                                    </h4>
                                    <motion.div variants={boxVariantsL} whileInView="whileInView" initial="initial" viewport={{ once: true }} >
                                        <ul className="list-items list-items-layout2 list-unstyled text-left">
                                            <li>Centralize Certificate Management: Maintain a centralized repository for all your vessel, crew, and class certificates, easily accessible from any internet-connected device. </li>
                                            <li>Automate Renewal Tracking: Define renewal dates for each certificate and receive automated alerts well in advance to ensure timely renewal.</li>
                                            <li>Simplify Uploads and Storage: Upload electronic copies of your certificates for secure storage and easy retrieval.</li>
                                            <li>Harmonized Surveys and Audits: Track internal and external audits and harmonized surveys alongside certificate information.</li>
                                            <li>Predefined Certificate Schema: Benefit from a predefined schema that includes common ship certificates, ensuring you never miss a critical renewal.</li>
                                            <li>Multi-Reminder System: Set up multiple reminder notifications via email or SMS to guarantee you stay ahead of renewal deadlines.</li>
                                        </ul>
                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <img src="/Images/LC/CertificatesLifeCycle.gif" alt='Products' className='img-fluid' style={{ boxShadow: "#6b6b6b 1px 1px 4px", borderRadius: "4px" }} />
                                </Col>
                            </Row>
                            <Row className="mt-5 text-start">

                                <Col xs={12} className='m-b-40 text-center'>
                                    <h1 className='un-leash-command-heading'>
                                        Streamlined Certificate Management
                                    </h1>
                                </Col>
                            </Row>

                        </Container>
                        <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
                            <Col xs={12} className='p-l-0 p-r-0'>
                                <img src="/Images/Mockups/ecloud-big.jpg" alt="" className='img-fluid' />
                            </Col>
                        </Row>

                    </Row>

                </Container>
            </Row>

            <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
                <Container>
                    <Row className='motion-container'>
                        <motion.div variants={boxVariantsPop} whileInView="whileInView" viewport={{ once: true }} initial="initial">
                            <Col xs={12} className='text-left m-t-40'>
                                <h4 className='un-leash-command-subheading text-left'>Benefits of NAU's VCMS</h4>
                                <h5 className='un-leash-efficient-paragraph'>By implementing NAU's VCMS, you can experience a multitude of benefits, including:</h5>
                                <div className="features1_component-copy text-left m-t-10">
                                    <div className="features-item-1">
                                        <div className="layout11_item">
                                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/TargetPeople.svg" loading="lazy" alt="" /></div>
                                            <div className="layout11_content-wrapper">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-small">Enhanced Regulatory Compliance</h3>
                                                </div>
                                                <p className="paragraph-11">
                                                    Ensure your vessels always operate with valid certificates, minimizing the risk of detentions and fines.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features-item-2">
                                        <div className="layout11_item">
                                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Key trends.svg" loading="lazy" alt="" /></div>
                                            <div className="layout11_content-wrapper">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-small">Improved Operational Efficiency</h3>
                                                </div>
                                                <p className="paragraph-11">Streamline certificate management processes and free up valuable time for your staff.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features-item-3">
                                        <div className="layout11_item">
                                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Stayaheadofremediationcosts-o.svg" loading="lazy" alt="" /></div>
                                            <div className="layout11_content-wrapper">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-small">Increased Peace of Mind</h3>
                                                </div>
                                                <p className="paragraph-11">
                                                    Gain complete confidence knowing your certificates are always up-to-date and readily accessible.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features-item-4">
                                        <div className="layout11_item">
                                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Securepage.svg" loading="lazy" alt="" /></div>
                                            <div className="layout11_content-wrapper">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-small">Improved Decision-Making</h3>
                                                </div>
                                                <p className="paragraph-11">
                                                    Access comprehensive certificate data to make informed decisions regarding certificate renewal priorities.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="features-item-5">
                                        <div className="layout11_item">
                                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/KYBandUBOchecks.svg" loading="lazy" alt="" /></div>
                                            <div className="layout11_content-wrapper">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-small">Reduced Costs</h3>
                                                </div>
                                                <p className="paragraph-11">
                                                    Avoid the financial penalties associated with expired certificates.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </motion.div>
                    </Row>

                </Container>
            </Row>

            <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
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

export default VCertificate;