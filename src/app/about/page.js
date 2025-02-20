"use client";
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import ClientListComponent from '../../components/clientList/page';
import ReactPlayer from 'react-player';
import Lottie from "lottie-react";


function AboutUs(index) {
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


 const [animationData, setAnimationData] = useState(null);
    useEffect(() => {
      fetch("/Images/Lottie/Datacode.json")  // Adjust path if needed
          .then(response => response.json())
          .then(data => setAnimationData(data))
          .catch(error => console.error("Error loading Lottie JSON:", error));
  }, []);
    return (
        <>
           
            <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
                <Container fluid className="p-l-0 p-r-0 backgroundTtachment" style={{ backgroundImage: `url(/Images/740.jpg)` }}>
                    <Row className='m-l-0 m-r-0 text-center motion-container'>
                        <Col xs={12}>
                            <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                                <h1 style={{ color: "#ffffff", fontSize: "4rem", fontWeight: "600", padding: "15% 1% 1% 1%" }}>SHIPPING & IT EXPERTS</h1>
                                <h4 style={{ color: "#ffffff", fontSize: "2rem", fontWeight: "500", padding: "1% 1% 2% 1%" }}>Setting Sail on Digital Transformation</h4>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid style={{ padding: '0' }}>
                    <Row style={{ margin: '0', padding: '0' }}>
                        <Container>
                            <Row className="mt-5 text-start">
                                <Col xs={12} md={7}>
                                    <span className='sticky-top'>
                                        <span style={{ position: "relative" }}>
                                            <img src="/Images/ProductImages/isometricship1.png" alt="E-cloud" className='ship1 img-fluid' style={{ left: "calc(50% - 15px)", width:"7vw", bottom: "0" }} />
                                            <img src="/Images/ProductImages/isometricship2.png" alt="E-cloud" className='ship2 img-fluid' style={{ left: "0", bottom: "80px", width:"7vw", transform: "scaleX(-1)" }} />
                                            <Lottie animationData={animationData} loop={true} />
                                        </span>
                                        <h1 className='m-t-50 un-leash-command-subheading' >A Proven Track Record of Success</h1>
                                        <p>Our team of maritime specialists and seasoned software developers  collaborate closely to deliver bespoke solutions and expert  consultancy services.
                                            We seamlessly integrate with existing systems, helping you leverage the latest technologies for maximum impact.</p>
                                    </span>
                                </Col>
                                <Col xs={12} md={5} className='motion-container'>
                                    <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                                        <div className='row justify-content-start'>
                                            <h1 className='un-leash-Heading'>Setting Sail on Digital Transformation</h1>
                                            <p style={{ fontWeight: "600" }}>Orion is a leading maritime ERP software provider, driven by mariners for mariners.
                                                For over 16 years, we've been a trusted partner for over 350+ vessels, with a comprehensive suite designed to meet the evolving needs of the maritime industry.</p>
                                            <h1 className='un-leash-Heading'>Our Mission: Powering a Sustainable Future</h1>
                                            <p>At Orion, we're passionate about using technology to empower a sustainable and efficient maritime industry. Our software equips companies to:</p>
                                            <p>Reduce Carbon Emissions: Optimize operations and fuel consumption for a greener fleet.</p>
                                            <p>Boost Efficiency: Save costs and streamline processes with real-time data and insights.</p>
                                            <p>Minimize Incidents: Proactive maintenance and risk management for safer voyages.</p>
                                            <p>Control Budgets: Gain financial clarity and make data-driven decisions.</p>
                                            <p>Compliance Made Easy</p>
                                            <p>Our class-approved software ensures seamless adherence to international regulations, including MRV, IMO DCS, TMSA, and ILO.</p>
                                        </div>
                                    </motion.div>
                                </Col>
                            </Row>
                        </Container>
                        <Container >
                            <Row>
                                <Col xs={12} className='m-t-40 m-b-10'>
                                    <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                                        <h1 className='un-leash-green-subheading'>Join Us on the Voyage to Digital Transformation</h1>
                                        <h4>Contact Orion today and see how our maritime ERP solutions can empower  your  fleet for a sustainable and profitable future.</h4>
                                    </motion.div>
                                </Col>
                            </Row>
                            <Row xs={1} md={2} lg={2} xlg={2} className="mt-5 text-start">
                                <Col xs={12} md={6} className='motion-container pb-5'>
                                    <motion.div variants={boxVariantsL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                                        <ReactPlayer url="https://www.youtube.com/embed/viDo2J8_qMs?rel=0" light={true} controls={true} className='OrionVid' />
                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6} className='motion-container'>
                                    <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                                        <h1 className='un-leash-green-subheading'>Futuristic Approach for the Current Maritime Industry</h1>
                                        <p>Orion Marine Concepts comes with a futuristic approach for the current marine industry Landscape with its best-in-class and System integrated ERP suite. Our ERP solutions are well beyond just software systems. Our class approved systems are well-tailored to match the ever-changing needs of our customers. Our Product implementation team ensures the smooth transaction at every step, stable communication and data management between the main office and the vessels. We offer a variety of software solution with broad functionality in procurement, maintenance, QHSSE, dry-docking, document management, inspections, Fleet Performance, etc. Our systems can be used as a single well-integrated ERP Solution or as separate systems catering to the specific needs of any organization.</p>
                                    </motion.div>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <Row style={{ margin: "0" }}>
                        <Container fluid>
                            <h3 className='un-leash-green-subheading mt-3 mb-3'>
                                OUR CLIENTS
                            </h3>
                            <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                                <ClientListComponent />
                            </motion.div>
                        </Container>
                    </Row>
                </Container>
            </Row>
        </>
    );

}

export default AboutUs;