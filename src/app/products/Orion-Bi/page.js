"use client";
import { Container, Row, Col, Button, Accordion } from 'react-bootstrap';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


export default function OrionPowerBi(index) {
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
                       
                        <Col xs={12} md={6}>
                            <motion.div variants={boxVariantsL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} >


                                <h1 className='un-leash-green-subheading text-left' style={{ paddingTop: "7%" }}>ORION BI</h1>
                                <h4 className="un-leash-green-subheading text-left">Business Intelligence Insights</h4>
                                <h1 className='un-leash-command-subheading text-left' style={{ paddingTop: "2%" }}>Experience Precision Fleet Management Like Never Before</h1>
                                <p className=' text-left'>
                                    Step into a new era of fleet management with data-driven precision and unparalleled efficiency through Business Intelligence Insights under NAU 2.1.
                                    Orion BI is designed to enhance your fleet management experience by providing clear, concise information from various reports and modules.

                                </p>
                                <h1 className='m-t-40 un-leash-command-subheading text-left'>Comprehensive Module Overview</h1>
                                <p className=' text-left'>
                                    Orion BI offers an extensive overview of several key modules, including MARPOL Annex V (Garbage Treatment/Disposal), IOPP 3.1 and 3.3 (Sludge and Bilge Generation), Analysis of Annual CII Rating, Inspection and Audits Analysis, and Near Miss Analysis.
                                    This comprehensive approach ensures you have all the information you need to manage your fleet effectively.
                                </p>
                                <h1 className='m-t-40 un-leash-command-subheading text-left'>Fleet Operations Excellence</h1>
                                <p className=' text-left'>
                                    Navigate seamlessly through various reports such as Fleet Summary, Performance Dashboards, Consolidated, Technical, and Custom Reports, and Voyage Audits from a single landing page.
                                    Orion BI provides a detailed voyage synopsis and CII rating analysis, along with aggregate data for justification, all designed to support your fleet operations excellence.
                                </p>
                            </motion.div>
                        </Col>
                        <Col xs={12} md={6}>
                            <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} >
                                <img src="/Images/Mockups/BiMockup2.png" alt="E-cloud" className='p-t-5per img-fluid' style={{ maxWidth: "90%" }} />
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
                <Container fluid className="p-l-0 p-r-0 ">
                    <Row style={{ margin: '0', padding: '0' }}>
                        <Container>
                            <Row className='mt-5'>
                                <Col xs={12} md={6} className='motion-container'>
                                    <motion.div variants={boxVariantsL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} >

                                        <Accordion className='mb-3 text-start' defaultActiveKey="0">
                                            <Row className="g-4 CommonAccordion">
                                                <div className='col-12 col-sm-12'>
                                                    <Accordion.Item eventKey="0" className=' mb-2'>
                                                        <Accordion.Header>Enhanced Decision-Making </Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>
                                                                Data-Driven Insights: By consolidating data from various modules, Orion BI provides clear, actionable insights that enable informed decision-making.
                                                                </p><p>
                                                                Comprehensive Analysis: The ability to analyze performance metrics, environmental compliance data, and inspection results helps identify areas for improvement and strategic opportunities.

                                                            </p>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1" className=' mt-2 mb-2'>

                                                        <Accordion.Header>Operational Efficiency </Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>
                                                                Streamlined Navigation: Access all essential reports and dashboards from a single landing page, saving time and reducing the complexity of fleet management.
                                                                </p><p>
                                                                Performance Optimization: Detailed analysis of voyage data, CII ratings, and waste management practices enables the optimization of operational processes and resource allocation.

                                                            </p>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="2" className=' mt-2 mb-2'>
                                                        <Accordion.Header>Regulatory Compliance</Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>
                                                                Environmental Monitoring: Modules like MARPOL Annex V and IOPP 3.1 and 3.3 ensure compliance with international environmental regulations by providing detailed records of waste disposal and sludge/bilge management.
                                                                </p><p>
                                                                Proactive Compliance Management: Stay ahead of regulatory requirements by continuously monitoring and analyzing compliance-related data, reducing the risk of fines and detentions.

                                                            </p>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="5" className=' mt-2 mb-2'>
                                                        <Accordion.Header>Sustainability and Environmental Responsibility </Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>
                                                                CII Rating Improvement: By understanding and improving the Carbon Intensity Indicator (CII) ratings, Orion BI supports efforts to reduce the environmental impact of shipping operations.
                                                                </p><p>
                                                                Waste Management: Effective tracking and analysis of garbage disposal and sludge/bilge generation contribute to more sustainable practices and better environmental stewardship.

                                                            </p>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="6" className=' mt-2 mb-2'>
                                                        <Accordion.Header>Risk Management</Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>
                                                                Incident Analysis: Modules like Near Miss Analysis help in identifying potential risks and preventing future incidents through detailed trend analysis and root cause identification.
                                                               </p><p>
                                                                Inspection and Audit Reports: Regularly updated inspection and audit analyses ensure that any deficiencies are promptly addressed, enhancing overall safety and compliance.

                                                            </p>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="7" className=' mt-2 mb-2'>
                                                        <Accordion.Header>Cost Efficiency</Accordion.Header>
                                                        <Accordion.Body>
                                                            <p>
                                                                Optimized Resource Usage: By providing detailed performance and compliance data, Orion BI helps in optimizing resource usage, reducing operational costs, and improving profitability.
                                                                </p><p>
                                                                Preventive Maintenance: Analysis of operational data can highlight areas where preventive maintenance is needed, avoiding costly repairs and downtime.

                                                            </p>

                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                  
                                                </div>
                                            </Row>
                                        </Accordion>
                                    </motion.div>
                                </Col>
                                <Col xs={12} md={6}>
                                    <img src="/Images/LC/BiMockup1.jpg" alt='Products' className='img-fluid' style={{ boxShadow: "#6b6b6b 1px 1px 4px", borderRadius: "4px" }} />
                                </Col>
                            </Row>
                            <Row className="mt-5 text-start">

                                <Col xs={12} className='m-b-20 text-center'>
                                    <h1 className='un-leash-command-heading'>
                                    Business Intelligence Insights
                                    </h1>
                                </Col>
                            </Row>

                        </Container>
                        <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
                            <Col xs={12} className='p-l-0 p-r-0'>
                                <img src="/Images/Mockups/OrionBiBannerImage.jpg" alt="" className='img-fluid' />
                            </Col>
                        </Row>
                        <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
                            <Container>
                                <Row className=' motion-container'>
                                    <motion.div variants={boxVariantsPop} whileInView="whileInView" viewport={{ once: true }} initial="initial">
                                        <Col xs={12} className='text-left m-t-60'>
                                            <h4 style={{ color: "rgb(6 23 68)", fontWeight: "bold", fontSize: "1.7rem" }}>Why Orion BI is Important</h4>
                                            <h5 style={{ color: "rgb(6 23 68)", fontWeight: "bold", fontSize: "1.2rem" }}>In today's competitive maritime industry, the ability to harness and interpret data is crucial for maintaining operational efficiency, regulatory compliance, and overall fleet performance. Here's why Orion BI is essential:</h5>
                                            <div className="features1_component-copy text-left m-t-10">
                                                <div className="features-item-1">
                                                    <div className="layout11_item">
                                                        <div className="layout11_icon-wrapper"><img src="/Images/SVG/Mappedbyverifieddata-o.svg" loading="lazy" alt="" /></div>
                                                        <div className="layout11_content-wrapper">
                                                            <div className="margin-bottom margin-small">
                                                                <h3 className="heading-small">CII Analysis</h3>
                                                            </div>
                                                            <p className="paragraph-11">
                                                                Understand the performance of your entire fleet with detailed CII (Carbon Intensity Indicator) ratings.
                                                                Our in-depth evaluations reveal what caused ratings to improve, deteriorate, or remain constant year over year, taking into account several parameters such as total distance traveled (laden and ballast legs), steaming time, and CO2 emissions.
                                                                This granular insight helps you make informed decisions to enhance fleet efficiency and sustainability.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-item-2">
                                                    <div className="layout11_item">
                                                        <div className="layout11_icon-wrapper"><img src="/Images/SVG/Key trends.svg" loading="lazy" alt="" /></div>
                                                        <div className="layout11_content-wrapper">
                                                            <div className="margin-bottom margin-small">
                                                                <h3 className="heading-small">MARPOL Annex-V Compliance</h3>
                                                            </div>
                                                            <p className="paragraph-11">
                                                                Visualize garbage disposal records across your fleet with graphical representations.
                                                                Track the quantity of waste disposed of by each vessel annually, quarterly, or monthly, with detailed specifications on disposal methods (at sea or at port) and incineration data.
                                                                This module ensures compliance with MARPOL Annex-V regulations and promotes environmentally responsible waste management.

                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-item-3">
                                                    <div className="layout11_item">
                                                        <div className="layout11_icon-wrapper"><img src="/Images/SVG/regulatorycompliance-o.svg" loading="lazy" alt="" /></div>
                                                        <div className="layout11_content-wrapper">
                                                            <div className="margin-bottom margin-small">
                                                                <h3 className="heading-small">IOPP 3.1 and 3.3 Compliance</h3>
                                                            </div>
                                                            <p className="paragraph-11">

                                                                Monitor sludge and bilge generation with precision. This module records daily logs of sludge and bilge, showing proportions generated over selected durations (yearly, quarterly, monthly).
                                                                Additionally, it tracks quantities incinerated, transferred through OWS (Oil Water Separator) operations, landed ashore, and evaporated, ensuring comprehensive compliance with IOPP regulations.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="features-item-4">
                                                    <div className="layout11_item">
                                                        <div className="layout11_icon-wrapper"><img src="/Images/SVG/Securepage.svg" loading="lazy" alt="" /></div>
                                                        <div className="layout11_content-wrapper">
                                                            <div className="margin-bottom margin-small">
                                                                <h3 className="heading-small">Unparalleled Transparency and Actionable Insights</h3>
                                                            </div>
                                                            <p className="paragraph-11">
                                                                Orion BI equips you with a clear and comprehensive picture of your fleet's performance. Access accurate, easy-to-understand reports that empower data-driven decision-making.
                                                                Identify areas for improvement and capitalize on opportunities to streamline operations and maximize profitability.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-item-5">
                                                    <div className="layout11_item">
                                                        <div className="layout11_icon-wrapper"><img src="/Images/SVG/Searchproblem.svg" loading="lazy" alt="" /></div>
                                                        <div className="layout11_content-wrapper">
                                                            <div className="margin-bottom margin-small">
                                                                <h3 className="heading-small">Features Designed for Efficiency</h3>
                                                            </div>
                                                            <p className="paragraph-11">
                                                                Orion BI's feature set is meticulously crafted to meet the specific needs of modern shipping companies.
                                                                From waste management and sludge monitoring to detailed performance analysis and regulatory compliance, our software equips you with everything you need to achieve operational excellence.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="features-item-6">
                                                    <div className="layout11_item">
                                                        <div className="layout11_icon-wrapper"><img src="/Images/SVG/Search bar.svg" loading="lazy" alt="" /></div>
                                                        <div className="layout11_content-wrapper">
                                                            <div className="margin-bottom margin-small">
                                                                <h3 className="heading-small">Embrace a Sustainable Future</h3>
                                                            </div>
                                                            <p className="paragraph-11">
                                                                The maritime industry is on a journey towards a cleaner future.
                                                                Orion BI empowers you to be a part of the solution. Reduce emissions, manage waste responsibly, and achieve significant cost savings through our comprehensive reporting and analytics features.
                                                                With Orion BI, you can contribute to a sustainable future without sacrificing profitability.
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
                    </Row>

                </Container>
                <Container fluid style={{ padding: '0' }} className=' m-t-60 text-left'>
                    <Row style={{ margin: '0', padding: '0' }}>

                        <Row className=' pt-5 pb-5 text-center' style={{ backgroundImage: "url(/Images/Nau/CrossPattern.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "0", margin: "0" }}>
                            <Col xs={12}  md={8}>
                                <h1 className="BiEmpowering" style={{ color: "#ffffff", paddingTop: "3%" }}>Take Your Fleet to the Next Level </h1>
                                <h1 className="BiEmpoweringBottomText" style={{ color: "#ffffff", paddingTop: "3%" }}>Ready to unlock the full potential of your fleet? Contact us today for a free demo and discover how Orion BI can propel you towards a future of unparalleled efficiency, sustainability, and profitability.</h1>
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
            </Row>
        </>
    )
}
