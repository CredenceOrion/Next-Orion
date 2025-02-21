"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Button, Card, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBezierCurve, faDraftingCompass, faServer, faBacon, faCodeBranch, faBroadcastTower, faLayerGroup, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/fontawesome-svg-core';
import { } from '@fortawesome/fontawesome-free-solid';
import { } from '@fortawesome/fontawesome-free';
import { motion } from 'framer-motion';
import Lottie from "lottie-react";

import Link from 'next/link';

const whyChooseUs = [

    {
        id: 1,
        head: "Road to Sustainability",
        data: "Commitment to sustainable practices. Environmental consciousness in our software development.",
        ico: faBezierCurve
    },
    {
        id: 2,
        head: "Easy Implementation and Third-Party Integration",
        data: "Seamless integration with existing systems. Minimal disruption during implementation.",
        ico: faDraftingCompass
    },
    {
        id: 3,
        head: "Cloud-Based",
        data: "Pioneers in cloud-based solutions since 2009. Increased accessibility, flexibility, and efficiency.",
        ico: faServer
    },
    {
        id: 4,
        head: "Clear Roadmap and Future-Proof with Next-Gen Ideas",
        data: "Transparent roadmap for software development. Anticipating and incorporating next-generation technologies.",
        ico: faBacon
    },
    {
        id: 5,
        head: "Scalability and Customization",
        data: "Easily scale your software to meet growing needs. Customizable to fit unique business requirements.",
        ico: faCodeBranch
    },
    {
        id: 6,
        head: "Long-Term Profit Trajectories",
        data: "Investment in long-term success for clients. Consistent growth potential and profitability.",
        ico: faBroadcastTower
    },
    {
        id: 7,
        head: "Extensive Knowledge Base and Domain Expertise",
        data: "Years of experience and expertise in the industry. A dedicated knowledge base for continuous learning and support.",
        ico: faLayerGroup
    },
    {
        id: 8,
        head: "Innovation in BI and AI Integration",
        data: "Pioneering integration with Business Intelligence (BI) and Artificial Intelligence (AI). Stay ahead with cutting-edge technology for data analysis and decision-making.",
        ico: faUserAstronaut
    }
]


function NauServer(index) {
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
         : { hidden: { opacity: 1, x:0 }, visible: { opacity: 1, x:0 } };
 
     const boxVariantsR = !isMobile
         ? {
               hidden: { opacity: 0, x: index % 2 === 0 ? -350 : 350 },
               visible: { opacity: 1, x: 0, transition: { duration: 0.7 } }
           }
         : { hidden: { opacity: 1, x:0 }, visible: { opacity: 1, x:0 } };
 
     const boxVariantsPop = !isMobile
         ? {
               hidden: { opacity: 0, scale: 0.2 },
               visible: { opacity: 1, scale: 1, transition: { duration: 1 } }
           }
         : { hidden: { opacity: 1, scale: 1 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } } };

         const boxVariantsY = !isMobile
         ? {
               hidden: { opacity: 0, y: index % 2 === 0 ? -350 : 350 },
               visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
           }
         : { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } };
        


    const [clickedIndex, setClickedIndex] = useState({});
    const [animationData, setAnimationData] = useState(null);
    useEffect(() => {
      fetch("/Images/Lottie/RoboFiles.json")  // Adjust path if needed
          .then(response => response.json())
          .then(data => setAnimationData(data))
          .catch(error => console.error("Error loading Lottie JSON:", error));
  }, []);

  if (!animationData) return <p>Loading animation...</p>;

    const handleClick = (index) => () => {
        setClickedIndex(state => ({
            ...state, // <-- copy previous state
            [index]: !state[index] // <-- update value by index key
        }));
    };
    return (<>
   
        <Container fluid style={{ paddingL: "0px" }}>
            <Row className='ContTopRobo'>
                <Col xs={12} md={6}>
                    <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                        <h1 className='NauHomeText'>
                            Venture into a future where adeptness reigns supreme on the oceans with NAU 2.1!
                        </h1>
                    </motion.div>
                </Col>
                <Col xs={12} md={6}>
                <Lottie animationData={animationData} loop={true} className='NauHomeRobo' />;
                </Col>
            </Row>
            <Row>
                <Col style={{ padding: "0" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path fill='#141C26' d="M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </Col>
            </Row>
            <Row style={{ backgroundImage: "url(/Images/Nau/DashLine.jpg)", backgroundRepeat:"no-repeat", backgroundSize:"cover" }} className='m-t-20 RoboSecCont'>
                <Col xs={12} md={6}>
                    <div style={{ color: "white", textAlign: "left" }}>
                        <motion.div variants={boxVariantsL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                            <h1 className=' HeroText'>
                                Sustainability
                            </h1>
                            <h1 className='HeroTextBottom'>
                                Steer your fleet green with our innovative solutions that ensure your voyages are as light on the environment as they are on your pockets.
                            </h1>
                        </motion.div>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                        <img src="/Images/Nau/Fship.png" alt="Nau Ship" className='img-fluid' style={{ filter: "opacity(0.7)" }} />
                    </motion.div>
                </Col>
            </Row>
            <Row className='Cont3'>
                <Col xs={12} md={4}>
                    <motion.div variants={boxVariantsL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                        <img src="/Images/Nau/NauLogo.png" alt="Nau Ship" className='Cont3NauShip' />
                    </motion.div>
                </Col>
                <Col xs={12} md={8}>
                    <div className='Cont3Text'>
                        <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                            <h1 className='font-bold'>
                                <p style={{ textAlign: "center", marginBottom:"0px" }} className=' fs-30'>Are you still relying on outdated, paper-based processes to manage your fleet?</p>
                            </h1>
                            <h3 className=' fs-25'>
                                <p style={{ textAlign: "center" }}>If so, you're wasting time and money, and you're putting your vessels at risk.</p>
                                <p style={{ textAlign: "center" }}>NAU 2.1 is a cloud-based solution that helps you to automate and streamline your fleet operations,</p>
                                <p style={{ textAlign: "center" }}>so you can save time, money, and improve safety.</p>
                            </h3>
                        </motion.div>
                    </div>
                </Col>
            </Row>
            <Row style={{ padding: "0", position: "relative", minHeight: "500px", backgroundColor: "#204488", overflow: "hidden" }}>
                <Container fluid className=' p-b-25 p-l-25 p-r-25'>
                    <h1 className='font-bold fs-30 p-t-35 p-b-35' style={{ color: "white" }}>System Modules</h1>
                    <motion.div variants={boxVariantsY} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col xs={12}  md={2}>
                                    <Nav variant="pills" className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="first"><span className='sideTab'><img src="/Images/Nau/FleetIco.png" alt="Fleet" /><p>Fleet</p></span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="second"><span className='sideTab'><img src="/Images/Nau/GroupIco.png" alt="Fleet" /><p>Crew</p></span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="third"><span className='sideTab'><img src="/Images/Nau/PmsIco.png" alt="Fleet" /><p>Maintenance</p></span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="four"><span className='sideTab'><img src="/Images/Nau/SafetyIco.png" alt="Fleet" /><p>QHSSE</p></span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="five"><span className='sideTab'><img src="/Images/Nau/InventoryIco.png" alt="Fleet" /><p>Inventory +</p></span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="six"><span className='sideTab'><img src="/Images/Nau/DmsIco.png" alt="Fleet" /><p>e-Cloud</p></span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="seven"><span className='sideTab'><img src="/Images/Nau/NotificationIco.png" alt="Fleet" /><p>Message Board</p></span></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="eight"><span className='sideTab'><img src="/Images/Nau/DocumentIco.png" alt="Fleet" /><p>EDMS</p></span></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col xs={12}  md={10}>
                                    <Tab.Content>
                                        <Tab.Pane eventKey="first">
                                            <Row>
                                                <Col xs={12}>
                                                    <div style={{ textAlign: "center" }}>

                                                        <h5 className='font-bold'>Orion FleetCommand Centre</h5>
                                                        <span><strong>Vessels Operational and Environmental Performance</strong></span>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <p className="Modules_T" style={{ textSlign: "left" }}>
                                                        <span className="Modules_T_iles"> Voyage assessment </span>
                                                        <span className="Modules_T_iles"> Continuous monitoring </span>
                                                        <span className="Modules_T_iles">Carbon and Sulphur Emissions continuous monitoring</span>
                                                        <span className="Modules_T_iles">IMO DCS, EU, UK MRV and EU ETS</span>
                                                        <span className="Modules_T_iles">Hull Performance</span>
                                                        <span className="Modules_T_iles">Main and Auxiliary Machinery performance</span>
                                                        <span className="Modules_T_iles">Electronic logs</span>
                                                        <span className="Modules_T_iles">Quantitative and qualitative assessment</span>
                                                        <span className="Modules_T_iles">Vessel system with plausibility checks</span>
                                                        <span className="Modules_T_iles">High frequency and auto log, Big Data</span>
                                                        <span className="Modules_T_iles">Reports</span>
                                                    </p>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <p className="Modules_D" style={{ textAlign: "left" }}>
                                                        <img loading="lazy" decoding="async" className="img-fluid" src="/Images/Nau/FleetDashboard.png" alt="fleet dashboard" width="1500" height="835" sizes="(max-width: 1500px) 100vw, 1500px" />
                                                    </p>
                                                </Col>
                                                <Col xs={12} className='text-right mt-5'>
                                                    <Link className="btn btn-xs btn-primary" href='../products/fleet-management'>Learn More..</Link>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="second">
                                            <Row>
                                                <Col xs={12}>
                                                    <div style={{ textAlign: "center" }}>
                                                        <h5 className='font-bold'>Orion CrewMate</h5>
                                                        <span><strong>Crew Management System</strong></span>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <p className="Modules_T" style={{ textSlign: "left" }}>
                                                        <span className="Modules_T_iles">Encapsulates all from; Registration to onboard to leave to Rejoining to Resignation</span>
                                                        <span className="Modules_T_iles">Maintain entire sea experience history and analyse</span>
                                                        <span className="Modules_T_iles">Complete personal data with certificates and documents</span>
                                                        <span className="Modules_T_iles">Rotation planner</span>
                                                        <span className="Modules_T_iles">Crew matrix</span>
                                                        <span className="Modules_T_iles">Training records</span>
                                                        <span className="Modules_T_iles">Work rest hour records</span>
                                                        <span className="Modules_T_iles">Crew and Officer appraisals</span>
                                                        <span className="Modules_T_iles">Master's monthly portage bill</span>
                                                        <span className="Modules_T_iles">Personal effects inventory and supply matrix</span>
                                                        <span className="Modules_T_iles">Integrate with other crew management system for data exchange</span>
                                                    </p>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <p className="Modules_D" style={{ textAlign: "left" }}>
                                                        <img loading="lazy" decoding="async" className="img-fluid" src="/Images/Nau/CrewDashboard.png" alt="Crew dashboard" width="1500" height="835" sizes="(max-width: 1500px) 100vw, 1500px" />
                                                    </p>
                                                </Col>
                                                <Col xs={12} className='text-right mt-5'>
                                                    <Link className="btn btn-xs btn-primary" href='../products/Crew-Management-System'>Learn More..</Link>
                                                </Col>
                                            </Row>

                                        </Tab.Pane>
                                        <Tab.Pane eventKey="third">
                                            <Row>
                                                <Col xs={12}>
                                                    <div style={{ textAlign: "center" }}>
                                                        <h5 className='font-bold'>Orion Uptime Maestro</h5>
                                                        <span><strong>Planned, unplanned and emergency job maintenance</strong></span>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <p className="Modules_T" style={{ textSlign: "left" }}>
                                                        <span className="Modules_T_iles">Marine codes hierarchical component list</span>
                                                        <span className="Modules_T_iles">Connect your Company SMS procedures and checklist with PMS</span>
                                                        <span className="Modules_T_iles">Report work for planned, unplanned and emergency jobs</span>
                                                        <span className="Modules_T_iles">Post pone jobs with authorization</span>
                                                        <span className="Modules_T_iles">Smart search and flexible report extraction</span>
                                                        <span className="Modules_T_iles">Convenient for issuing work orders with different criteria</span>
                                                        <span className="Modules_T_iles">Monitor and maintain equipment running hours</span>
                                                        <span className="Modules_T_iles">Intuitive dashboards for tracking</span>
                                                        <span className="Modules_T_iles">Connected to spares inventory</span>
                                                        <span className="Modules_T_iles">Attach risk assessment to work reports</span>
                                                        <span className="Modules_T_iles">Record defects attached to PMS components</span>
                                                        <span className="Modules_T_iles">Connect with the dry docking module</span>
                                                    </p>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <p className="Modules_D" style={{ textAlign: "left" }}>
                                                        <img loading="lazy" decoding="async" className="img-fluid" src="/Images/Nau/PmsDashboard.png" alt="Crew dashboard" width="1500" height="835" sizes="(max-width: 1500px) 100vw, 1500px" />
                                                    </p>
                                                </Col>
                                                <Col xs={12} className='text-right mt-5'>
                                                    <Link className="btn btn-xs btn-primary" href='../products/Planned-Maintenance-System'>Learn More..</Link>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="four">
                                            <Row>
                                                <Col xs={12}>
                                                    <div style={{ textAlign: "center" }}>
                                                        <h5 className='font-bold'>
                                                            Orion QHSSE Guardian
                                                        </h5>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <p className="Modules_T" style={{ textSlign: "left" }}>
                                                        <span className="Modules_T_iles">Accident, incident and near miss reporting</span>
                                                        <span className="Modules_T_iles">Lost time, injury and downtime assessment</span>
                                                        <span className="Modules_T_iles">Well structured and easy to use Root Cause analysis</span>
                                                        <span className="Modules_T_iles">Inspection reporting and recording module for SIRE, CDI, Rightship, Flag state, terminal, and other inspections</span>
                                                        <span className="Modules_T_iles">Internal and external integrated audit reporting and NC recording</span>
                                                        <span className="Modules_T_iles">Comments and dialogue flow between ship and shore</span>
                                                        <span className="Modules_T_iles">Observation and report closure from ship and shore</span>
                                                        <span className="Modules_T_iles">Automatic reports and analysis with different period comparison options</span>
                                                        <span className="Modules_T_iles">Smart tracker and planner for inspections</span>
                                                    </p>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <p className="Modules_D" style={{ textAlign: "left" }}>
                                                        <img loading="lazy" decoding="async" className="img-fluid" src="/Images/Nau/HsseqDashboard.png" alt="Crew dashboard" width="1500" height="835" sizes="(max-width: 1500px) 100vw, 1500px" />
                                                    </p>
                                                </Col>
                                                <Col xs={12} className='text-right mt-5'>
                                                    <Link className="btn btn-xs btn-primary" href='../products/QHSSE'>Learn More..</Link>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="five">
                                            <Row>
                                                <Col xs={12}>
                                                    <div style={{ textAlign: "center" }}>
                                                        <h5 className='font-bold'>
                                                            Orion supply Chain
                                                        </h5>
                                                        <span>
                                                            <strong>
                                                                Inventory Management, Purchase & Procurement
                                                            </strong>
                                                        </span>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12}>
                                                    <p className="Modules_T_full" style={{ textSlign: "left" }}>
                                                        <span className="Modules_T_iles">Marine standard codes for maintaining spares with their parent components</span>
                                                        <span className="Modules_T_iles">Create and manage requisitions from shore and ship</span>
                                                        <span className="Modules_T_iles">Vendor database and evaluation management</span>
                                                        <span className="Modules_T_iles">Vendor contract management</span>
                                                        <span className="Modules_T_iles">Request for quotations, compare vendor quotes on one screen</span>
                                                        <span className="Modules_T_iles">Multi-level approval hierarchy</span>
                                                        <span className="Modules_T_iles">Flexible and multiple currency options</span>
                                                        <span className="Modules_T_iles">Generate reports</span>
                                                        <span className="Modules_T_iles">Automatic system notifications at various levels</span>
                                                        <span className="Modules_T_iles">Vendor personal logins and management area</span>
                                                        <span className="Modules_T_iles">Manage delivery orders</span>
                                                        <span className="Modules_T_iles">Manage invoices</span>
                                                        <span className="Modules_T_iles">Integrate with Company's finance module</span>
                                                    </p>
                                                </Col>
                                                <Col xs={12} className='text-right mt-5'>
                                                    <Link className="btn btn-xs btn-primary" href='../products/supply-Chain'>Learn More..</Link>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="six">
                                            <Row>
                                                <Col xs={12}>
                                                    <div style={{ textAlign: "center" }}>
                                                        <h5 className='font-bold'>
                                                            Orion DocVault
                                                        </h5>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12}>
                                                    <p className="Modules_T_full" style={{ textSlign: "left" }}>
                                                        <span className="Modules_T_iles">Customizable repository for Company filling system for ship’s </span>
                                                        <span className="Modules_T_iles">Report storage for different frequency’s</span>
                                                        <span className="Modules_T_iles">To and fro comment between ship and shore</span>
                                                        <span className="Modules_T_iles">Ready reckoner for depicting missing reports at an expected frequency</span>
                                                        <span className="Modules_T_iles">Thousands of mails, man hours and efforts saved due to all in one place and easily accessible</span>
                                                        <span className="Modules_T_iles">Reports available at anytime from anywhere</span>
                                                    </p>
                                                </Col>
                                                <Col xs={12} className='text-right mt-5'>
                                                    <Link className="btn btn-xs btn-primary" href='../products/ECloud'>Learn More..</Link>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="seven">
                                            <Row>
                                                <Col xs={12}>
                                                    <p style={{ textAlign: "center" }}>
                                                        <span style={{ color: "#000000" }}>
                                                            <strong style={{ fontSize: "1.3em" }}>*Notification Panel/Message Board*</strong>
                                                        </span>
                                                    </p>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} md={6}>
                                                    <p className="Modules_T" style={{ textSlign: "left" }}><span className="Modules_T_iles">
                                                        Comprehensive Preview
                                                        <span>Provide a complete preview of the entire system with an upgraded notification dashboard.</span></span>
                                                        <span className="Modules_T_iles">
                                                            Task Management
                                                            <span>Assign and delegate tasks efficiently with the help of the task master.</span></span>
                                                        <span className="Modules_T_iles">
                                                            Alerts
                                                            <span>Display alerts for expired certificates, past due, planned, and unplanned maintenance.</span></span>
                                                        <span className="Modules_T_iles">
                                                            Latest Updates
                                                            <span>Highlight and display the latest updates from the ERP.</span></span>
                                                        <span className="Modules_T_iles">
                                                            Customization
                                                            <span>Edit and customize notification settings for a personalized experience.</span></span>
                                                        <span className="Modules_T_iles">
                                                            Track work permits
                                                            <span>Securely review and approve critical operations. Stay updated on and decisions. Assign tasks effortlessly. Access comprehensive safety protocols and guidelines.</span></span>
                                                    </p>
                                                </Col>
                                                <Col xs={12} md={6}>
                                                    <p className="Modules_D" style={{ textAlign: "left" }}>
                                                        <img loading="lazy" decoding="async" className="img-fluid" src="/Images/Nau/NotificationDashboard.png" alt="Crew dashboard" width="1500" height="835" sizes="(max-width: 1500px) 100vw, 1500px" />
                                                    </p>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="eight">
                                            <Row>
                                                <Col xs={12}>
                                                    <div style={{ textAlign: "center" }}>
                                                        <h5 className='font-bold'>
                                                            Orion e-SMS
                                                        </h5>
                                                        <span>
                                                            <strong>
                                                                Electronic Safety Management System
                                                            </strong>
                                                        </span>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12}>
                                                    <p className="Modules_T_full" style={{ textSlign: "left" }}>
                                                        <span className="Modules_T_iles">Digitized Company and Office SMS manuals </span>
                                                        <span className="Modules_T_iles">Forms and Checklist digital library</span>
                                                        <span className="Modules_T_iles">Release & maintain Fleet Circulars and Fleet Notices</span>
                                                        <span className="Modules_T_iles">Fleet sharing and alerts</span>
                                                        <span className="Modules_T_iles">Crew and Officer familiarization module</span>
                                                        <span className="Modules_T_iles">Universal hierarchical search facility</span>
                                                        <span className="Modules_T_iles">Last reads and bookmarking of important sections</span>
                                                        <span className="Modules_T_iles">Automatic revision tracker</span>
                                                        <span className="Modules_T_iles">Minimal data transmission</span>
                                                        <span className="Modules_T_iles">Dashboard for reviewing latest amendments, circulars and forms released</span>
                                                        <span className="Modules_T_iles">Manage external digital publications</span>
                                                    </p>
                                                </Col>
                                                <Col xs={12} className='text-right mt-5'>
                                                    <Link className="btn btn-xs btn-primary" href='../products/Electronic-Document-Management-System'>Learn More..</Link>
                                                </Col>
                                            </Row>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </motion.div>
                </Container>
            </Row>
            <Row>
                <Col style={{ padding: "0" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path fill="#204488" d="M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </Col>
            </Row>
            <Row className="p-t-40 p-b-40">
                <h1>
                    Why Choose Us?
                </h1>
                <h4 className='p-b-20'>
                    Innovative Solutions, Proven Excellence: Pioneers in cloud-based solutions since 2009
                </h4>
                <Container>
                    <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                        <Row xs={1} md={4} className="g-5">
                            {whyChooseUs.map((whyChooseUsData, index) => (
                                <Col key={whyChooseUsData.id} id={`item${whyChooseUsData.id}`}>
                                    <Card style={{ boxShadow: "none", overflow: "hidden" }} onMouseEnter={handleClick(index)} onMouseLeave={handleClick(index)} onTouchStart={handleClick(index)}>
                                        <div className={`${clickedIndex[index] ? "flipped" : ""} flip-card `}>
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <div className="card-content">
                                                        <FontAwesomeIcon icon={whyChooseUsData.ico} className='fa-3x' />
                                                        <h1 className='fs-18 font-bold p-t-30'>
                                                            {whyChooseUsData.head}
                                                        </h1>
                                                    </div>
                                                </div>
                                                <div className="flip-card-back">
                                                    <div className="card-content fs-18 font-bold p-t-30">
                                                        {whyChooseUsData.data}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </motion.div>
                </Container>
            </Row>
            <Row>
                <Col style={{ padding: "0", transform: "rotate(180deg)" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path fill="#204488" d="M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </Col>
            </Row>
            <Row style={{ backgroundImage: "url(/Images/Nau/SailingSeaG.jpg)" }} className='LvlUpCont'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.2 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    animate={{}}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}>
                    <div className='LvlUp'>
                        <h2 style={{ textAlign: "center", color: "#ffffff", fontWeight: "bold" }}>Time to level up. Brace yourselves.</h2>
                        <p></p>
                        <h4 style={{ textAlign: "center", color: "white", fontWeight: "bold" }}>Streamlining Maritime Operations</h4>
                        <p style={{ color: "white", textAlign: "center" }} className='fs-17'>NAU 2.1 is built to revolutionise the way you manage your fleet. It’s
                            not just about keeping a tab on hundreds of vessels – it’s about hitting the sweet spot between efficiency, sustainability and
                            cost savings.</p>
                        <p style={{ color: "white", textAlign: "center" }} className='fs-17'>Our comprehensive suite of modules dedicated to Crew and Fleet Management,
                            Planned Maintenance, Vendor Management, and more provide an unparalleled control, regardless of your fleet’s
                            size or operating conditions.</p>
                        <p style={{ color: "white", textAlign: "center" }} className='fs-17'>Add on Incident Reporting, Quality, Health and Safety,
                            as well as Inventory Reporting, and you have a total solution package ready to tackle any maritime challenge you face.</p>
                    </div>
                </motion.div>
            </Row>
           
        </Container>
        <Container fluid style={{ padding: '0' }} className='text-left'>
                    <Row style={{ margin: '0', padding: '0' }}>

                        <Row className=' pt-5 pb-5 text-center' style={{ backgroundImage: "url(/Images/Nau/CrossPattern.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "0", margin: "0" }}>
                            <Col xs={12}  md={8}>
                                <h1 className="BiEmpowering" style={{ color: "#ffffff", paddingTop: "3%" }}>Ready to Sail? </h1>
                                <h1 className="BiEmpoweringBottomText" style={{ color: "#ffffff", paddingTop: "3%" }}>Set sail on a journey that redefines efficiency and ushers in a new era in maritime management. Join the NAU 2.1 wave today. </h1>
                            </Col>
                            <Col xs={12}  md={4}>
                                <Button variant="light" className='m-t-90 p-l-50 p-r-50 fs-25 p-t-10 p-b-10 btn btn-light'>
                                    <Link href='/ScheduleDemo' style={{ fontSize: "1.4rem" }}>
                                        Embark Now
                                    </Link>
                                </Button>
                            </Col>

                        </Row>
                    </Row>
                </Container>
    </>)
}

export default NauServer;