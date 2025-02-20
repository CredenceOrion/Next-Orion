"use client";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faAnchor, faWater, faDharmachakra } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useState, useEffect } from "react";
import OurTeamManagement from "../../components/OurTeamManagement/ManagementTeam";
import OurTeamDevs from "../../components/OurTeamDevs/DevsTeam";
import OurSupportTeam from "../../components/OurTeamSupport/SupportTeam";

export default function OurTeam(index) {

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

            <Row className="m-l-0 m-r-0">
                <Container fluid className="p-r-0 p-l-0 backgroundTtachment m-b-120" style={{ backgroundImage: `url(/Images/Ourteam/OurTeamPhoto.jpg)`, backgroundPosition: "center center", backgroundSize: "cover", backgroundAttachment: "fixed" }}>
                    <Col>
                        <h1 className="fs-50 p-t-30">MEET THE TEAM</h1>
                    </Col>
                </Container>
                <Container className="motion-container">
                    <Row>
                        <Col md={1}></Col>
                        <Col xs={12} md={5} className="motion-container">
                            <motion.div variants={boxVariantsL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                                <div className="col-12 text-left">
                                    <h4 style={{ color: "#5864FF", fontWeight: '600', marginBottom: '20px' }}>MEET OUR DIRECTOR</h4>
                                    <h2 style={{ fontWeight: '600', marginBottom: '20px' }}>CAPTAIN MOHIT SABHARWAL</h2>
                                    <p className="m-b-20" style={{ color: "#666666", letterSpacing: "1px", lineHeight: "1.8" }}>Captain Mohit's journey began on the waves, rising from a young cadet to a seasoned Master Mariner. His three decades which included navigating the oceans and being part of the Maritime Fraternity instilled a deep understanding of seafaring and a desire to push boundaries.</p>
                                    <ul className="elementor-icon-list-items">
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-icon">
                                                <FontAwesomeIcon icon={faWater} />
                                            </span>
                                            <span className="elementor-icon-list-text">This yearning led him to found Orion Marine Concepts in 2006, leveraging his expertise to pave the way for innovative solutions. Driven by a thirst for knowledge, he pursued an MBA in Ship Management and certifications in quality management, building a unique blend of operational acumen and dedication to excellence.</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-icon">
                                                <FontAwesomeIcon icon={faAnchor} />
                                            </span>
                                            <span className="elementor-icon-list-text">In 2009, his vision materialised with the birth of Orion Technology division. This company embodies his belief in seamlessly blending maritime expertise with cutting-edge technology to exceed client expectations and lead the industry.</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-icon">
                                                <FontAwesomeIcon icon={faDharmachakra} />
                                            </span>
                                            <span className="elementor-icon-list-text">Today, Capt. Mohit continues to captain Orion's journey, drawing upon his diverse experiences to champion innovation. He actively explores integrating technologies like augmented reality and AI, shaping a more efficient and sustainable future for the maritime industry.</span>
                                        </li>
                                        <li className="elementor-icon-list-item">
                                            <span className="elementor-icon-list-icon">
                                                <FontAwesomeIcon icon={faShip} />
                                            </span>
                                            <span className="elementor-icon-list-text">Our Captain's story is a testament to the power of vision, continuous learning, and a relentless pursuit of progress. It serves as an inspiration to aspiring professionals, demonstrating that the possibilities within the vast seas of the maritime industry are boundless.</span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </Col>
                        <Col xs={12} md={5} className="motion-container">
                            <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                                <div className="col-12" style={{ borderRadius: "25px", overflow: "hidden" }}>
                                    <img alt='orion ceo' src="/Images/Ourteam/CptM.jpg" className="img-fluid" />
                                </div>
                            </motion.div>
                        </Col>
                        <Col md={1}></Col>
                    </Row>
                </Container>
                <Container className="m-t-120 motion-container">
                    <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                        <Row>
                            <h1 className="m-b-40 font-bold">TEAM ORION MARINE CONCEPTS</h1>
                            <h5 className="m-b-40" style={{ lineHeight: "1.8" }}>
                                At Orion Marine Concepts, we take pride in the diversity and expertise of our talented team.<br />
                                Together, we are driven by a shared commitment to excellence, innovation, and client success.
                            </h5>
                            <h3 className="m-b-50 font-bold">OUR MANAGEMENT</h3>
                            <OurTeamManagement/>
                        </Row>
                    </motion.div>
                    <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                        <Row className="m-t-50">
                            <h2 className="m-b-50 font-bold">MEET OUR DEVS</h2>
                            <OurTeamDevs/>
                        </Row>
                    </motion.div>
                    <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.1 }} >
                        <Row className="m-t-50">
                            <h2 className="m-b-50 font-bold">OUR IMPLEMENTATION, SUPPORT & DEPLOYMENT</h2>
                            <OurSupportTeam/>
                        </Row>
                    </motion.div>
                </Container>
            </Row >
        </>
    )
}