import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Accordion } from 'react-bootstrap';
import '../CustomCss/CustomStyle.css';
import MarpoleBg from '../Images/ProductImages/ELECTRONIC-MARPOL-SEAL-LOG-BOOK.jpg';
import Marpole1 from '../Images/ProductImages/marpole-seal-log-n.png';
import Marpole2 from '../Images/ProductImages/seal-open-270x270.png';

function Marpole() {

    return (
        <>
            <Container fluid style={{ padding: '0' }}>
                <Row className='mb-5' style={{ backgroundColor: '#f9f9f9', margin: '0', padding: '0' }}>
                    <div className='col-12' style={{ padding: "0" }}>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <div className='ResponsiveImage' style={{ position: "relative" }}>
                                <img src={MarpoleBg} loading='eager' alt='Products' className='img-fluid' />
                                <div className='PositionedText'>
                                    <h1>ELECTRONIC MARPOL SEAL LOG BOOK</h1>
                                    <h3>-</h3>
                                    <h5 style={{ fontWeight: "400" }}>Ensures compliance with the myriad and ever-changing international requirements</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className='mb-5' style={{ margin: '0', padding: '0' }}>
                    <Container>
                        <Row className="g-5 text-start">
                            <div className="col-12 col-sm-6">
                                <img src={Marpole1} alt='Products' className='img-fluid' />
                            </div>
                            <div className="col-12 col-sm-6">
                                <div className='row justify-content-start'>
                                    <h5>“AN INITIATIVE UNDER THE INTERNATIONAL CONVENTION FOR PREVENTION OF POLLUTION FROM SHIPS, ENVIRONMENT COMPLIANCE PROGRAM, USA AND IMPLEMENTATION OF ISO 14000.”</h5>
                                    <p style={{ lineHeight: "28px" }}>
                                        The Electronic Seal Log ensures compliance with the myriad and ever-changing international, federal, and state requirements imposed on domestic and international shipping.
                                    </p>
                                </div>
                            </div>
                        </Row>
                        <Row className='mt-5 text-start'>
                            <div className="col-12 col-sm-9">
                                <h5>FEATURES AND BENEFITS OF E-MARPOL SEAL LOG:</h5>
                                <p style={{ lineHeight: "28px" }}>
                                    The Marpol seal log section enforces the sealing of any equipment, pipelines, flanges, pumps or others which are related to and are potential factors in causing incidental or intentional Marine oil pollution at Sea. It regulates and monitors that no un-authorised use of any equipment onboard ships which can lead to non-compliance with the legal, legislative and company policies of zero tolerance.
                                </p>
                            </div>
                            <div className="col-12 col-sm-3">
                                <img src={Marpole2} alt='Products' className='img-fluid' />
                            </div>
                        </Row>
                        <Row>
                            <Accordion alwaysOpen className=' text-start'>
                                <Row className="g-4 mt-5 CommonAccordion">
                                    <div className='col-12 col-sm-4'>
                                        <Accordion.Item eventKey="0" className=' mt-2 mb-2'>
                                            <Accordion.Header>MARPOL Systems onboard</Accordion.Header>
                                            <Accordion.Body>
                                                <p>All the critical equipment potential of overboard discharge including lines and vales for the oily water separator (OWS), sewage system, bilge system, portable pumps, hoses or any other onboard equipment are categorized and maintained within this system for monitoring seal locking and opening.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4" className=' mt-2 mb-2'>
                                            <Accordion.Header>High Level Management Oversight</Accordion.Header>
                                            <Accordion.Body>
                                                <p>With regular data synchronization the person in charge of the elements of the ECP department has a complete overview of the vessel seal status including the history and effectiveness of the compliance program.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className=' mt-2 mb-2'>
                                            <Accordion.Header>Database and inventory management</Accordion.Header>
                                            <Accordion.Body>
                                                <p>The module allows the Companies to maintain fleet wide records of the supply status for the seal tags on a single interface. The supply is easily managed within the system and users are pre-warned for the further requirements on both shore and ship interfaces.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col-12 col-sm-4'>
                                        <Accordion.Item eventKey="1" className=' mt-2 mb-2'>
                                            <Accordion.Header>Hierarchical approach</Accordion.Header>
                                            <Accordion.Body>
                                                <p>The entire ship is divided into zones and items as per the equipment and the components which may have the potential of causing Marine Pollution for the users to easily navigate and work on the section to record the locking and unlocking of the seal tags.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5" className=' mt-2 mb-2'>
                                            <Accordion.Header>Monitoring, auditing and transparency</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Be ready for internal and external authorities to overview of the vessels during the vessel inspections and audits at any time.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8" className=' mt-2 mb-2'>
                                            <Accordion.Header>Records and Reports</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Inventory of the spare seals, running reports for the seals used and discarded for each equipment are available at anytime at a click for the different zones onboard the ship.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col-12 col-sm-4'>
                                        <Accordion.Item eventKey="3" className=' mt-2 mb-2'>
                                            <Accordion.Header>Important information</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Information related to the activity for which the seal was removed with date and time and adequate reasons are required to be recorded within the system.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className=' mt-2 mb-2'>
                                            <Accordion.Header>Alerts through the system</Accordion.Header>
                                            <Accordion.Body>
                                                <p>The system notifies the ship and shore office for the status of seals onboard the vessel incase of any have been left open more than the required period.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                </Row>
                            </Accordion>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    );
}

export default Marpole;