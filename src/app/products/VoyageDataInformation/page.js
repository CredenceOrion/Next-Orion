"use client";
import { Container, Row, Accordion, Col } from 'react-bootstrap';


function VoyageDataRecorder() {

    return (
        <>
            <Container fluid style={{ padding: '0' }}>
                <Row className='mb-5' style={{ backgroundColor: '#f9f9f9', margin: '0', padding: '0' }}>
                    <div className='col-12' style={{ padding: "0" }}>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <div className='ResponsiveImage' style={{ position: "relative" }}>
                                <img src="/Images/ProductImages/VOYAGE-DATA-INFORMATION-ANALYSIS-AND-ASSESSMENT.jpg" loading='eager' alt='Products' className='img-fluid' />
                                <div className='PositionedText'>
                                    <h1>VOYAGE DATA INFORMATION, ANALYSIS AND ASSESSMENT</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className='mb-5' style={{ margin: '0', padding: '0' }}>
                    <Container>
                        <Row className="g-5 text-start">
                            <div className="col-12 col-sm-5">
                                <img src="/Images/ProductImages/FEATURES-1.png" alt='Products' className='img-fluid' />
                            </div>
                            <div className="col-12 col-sm-7">
                                <div className='row justify-content-start'>
                                    <h5>“RECONSTRUCT THE EVENT THROUGH THE DETAILED REPORTS AND SECURED DATA AVAILABLE AT ALL TIMES ON THE SYSTEM FOR THE COMPLETE FLEET.”</h5>
                                    <p style={{ lineHeight: "28px" }}>
                                        Proactive approach towards secure, efficient and accurate centralised reports for analysing fleet data to identify trends and causes with access anytime anywhere to help you take informed decisions towards your fleet navigational and behavioural safety.
                                    </p>
                                </div>
                            </div>
                        </Row>
                        <Row className='mt-5 text-start'>
                            <div className="col-12 col-sm-5">
                                <h5>OVERVIEW</h5>
                                <p style={{ lineHeight: "28px" }}>
                                    The software has an inbuilt industry specific checklist which is fully customisable to the company’s requirements for creating reports and generate feedback on occurrences, events with their frequency to the relevant fleet managers.
                                    An important tool to assess the efficiency of the various data recording channels establishing a warning towards any faults and findings to have the corrective actions. And the quality together with the Benchmark data within the fleet, analyse and share your findings across the fleet and industry with full confidentiality.
                                </p>
                            </div>
                            <div className="col-12 col-sm-7">
                                <img src="/Images/ProductImages/voyage-data-system-1.png" alt='Products' className='img-fluid' />
                            </div>
                        </Row>
                        <Row>
                            <Accordion alwaysOpen className=' text-start'>
                                <Row className="g-4 mt-5 CommonAccordion">
                                    <div className='col-12 col-sm-12 mt-5'>
                                        <h2>KEY FEATURES & BENEFITS</h2>
                                        <h4 className='mt-4'>Efficient and effortless record keeping, paperless solution to save man hours and complete data backup available to restore in case of any system failures.</h4>
                                    </div>
                                    <Col xs={12} md={6}>
                                        <ul style={{ lineHeight: "28px" }}>
                                            <li>Quantitative and qualitative analysis.</li>
                                            <li>Performance effectiveness monitoring</li>
                                            <li>Benchmark within the Company and external data</li>
                                            <li>Training objectives to promote safety</li>
                                            <li>Efficient fleet information and knowledge sharing</li>
                                            <li>Vessel optimization</li>
                                            <li>Accident investigation</li>
                                            <li>Accident Prevention</li>
                                            <li>Bridge team training</li>
                                        </ul>
                                    </Col>
                                    <Col xs={12} md={6}>
                                        <ul style={{ lineHeight: "28px" }}>
                                            <li>Promoting best practice for operations</li>
                                            <li>Assessment of feedback to safety and environment emergencies</li>
                                            <li>Reduction of running cost</li>
                                            <li>Preventative maintenance</li>
                                            <li>Fleet overview and annual planner</li>
                                            <li>Vendor management</li>
                                            <li>Auto generated notifications and reminders</li>
                                            <li>Custom reports templates</li>
                                            <li>Audio & video clips for incidents & events.</li>
                                            <li>Audits and inspection ready</li>
                                        </ul>
                                    </Col>
                                </Row>
                            </Accordion>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    );
}

export default VoyageDataRecorder;