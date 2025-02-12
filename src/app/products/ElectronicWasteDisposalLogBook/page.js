"use client";
import { Container, Row, Accordion } from 'react-bootstrap';


function WasteDisposal() {

    return (
        <>
            <Container fluid style={{ padding: '0' }}>
                <Row className='mb-5' style={{ backgroundColor: '#f9f9f9', margin: '0', padding: '0' }}>
                    <div className='col-12' style={{ padding: "0" }}>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12'>
                            <div className='ResponsiveImage' style={{ position: "relative" }}>
                                <img src="/Images/ProductImages/ELECTRONIC-WASTE-DISPOSAL-LOG-BOOK.jpg" loading='eager' alt='Products' className='img-fluid' />
                                <div className='PositionedText'>
                                    <h1>ELECTRONIC WASTE DISPOSAL LOG BOOK</h1>
                                    <h3>-</h3>
                                    <h5 style={{ fontWeight: "400" }}>International convention for prevention of pollution from ships</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </Row>
                <Row className='mb-5' style={{ margin: '0', padding: '0' }}>
                    <Container>
                        <Row className="g-5 text-start">
                            <div className="col-12 col-sm-6">
                                <div className='row justify-content-start'>
                                    <h5>MOST ESSENTIAL ELEMENTS FOR THE INTERNATIONAL CONVENTION FOR PREVENTION OF POLLUTION FROM SHIPS UNDER THE MARPOL ANNEX I AND V AND IMPLEMENTATION OF ISO 14000</h5>
                                    <p style={{ lineHeight: "28px" }}>
                                        A system designed to store the information electronically establish transparency, credibility and traceability for ship-owners, ship operators, and authorities worldwide.
                                        The system makes it feasible for the owners and operators to have an immediate overview of the vessel data without having to wait for audits and inspections to find deficiencies.
                                        An initiative to safe guard ship owners and operators from multimillion dollar fines and criminally prosecutions for oil-book violations imposed due to inaccurate records and im-proper discharges of oily water, garbage and other waste from the ships.
                                    </p>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6">
                                <img src="/Images/ProductImages/Electroniclogbook.png" alt='Products' className='img-fluid' />
                            </div>
                        </Row>
                        <Row className='mt-5 text-start'>
                            <div className='col-12 col-sm-12 mt-5 mb-5'>
                                <p><strong>Orion’s Marine QHSSE module is a “Best Practice” Software solution developed with a pragmatic approach for the ease of staff. It is designed to maintain all data pertaining to the Quality, Health, Safety, Security and Environment. The system enables the users to make informed decisions to meet and comply with ISM, ISO, TMSA, EMS and OHSAS requirements and analyze the events arising from occurrences that distress safety and quality of operations on board of ships and shore. The system encompasses important functions related to the company’s QHSSE operations; Risk Assessments, Safety Committee Meetings, Master’s Review, Incident Reporting and Permit to Work System.</strong> </p>
                            </div>
                        </Row>
                        <Row className='mt-5 text-start'>
                            <div className="col-12 col-sm-4">
                                <h5>KEY FEATURES</h5>
                                <p style={{ lineHeight: "28px" }}>
                                    <ul>
                                        <li>Maintaining tank quantities for sludge oil and bilge water</li>
                                        <li>Sludge generation</li>
                                        <li>Bilge water accumulation and discharge</li>
                                        <li>Incineration</li>
                                        <li>Pumped ashore</li>
                                        <li>Pumped overboard through OWS</li>
                                        <li>Rate of sludge and bilge generation</li>
                                        <li>Investigate and act on any discrepancies found</li>
                                        <li>Categorised Garbage entry log as per the IMO regulations</li>
                                        <li>Garbage disposal log.</li>
                                        <li>Time, date, location, quantity, records available.</li>
                                        <li>Leakage log: Leaks recorded when found and action taken to minimise wastage</li>
                                    </ul>
                                </p>
                            </div>
                            <div className="col-12 col-sm-8">
                                <img src="/Images/ProductImages/sludgeblidgeReport.png" alt='Products' className='img-fluid' />
                            </div>
                        </Row>
                        <Row>
                            <Accordion alwaysOpen className=' text-start'>
                                <Row className="g-4 mt-5 CommonAccordion">
                                    <div className='col-12 col-sm-4'>
                                        <Accordion.Item eventKey="0" className=' mt-2 mb-2'>
                                            <Accordion.Header>User friendly</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Efficient and effortless record keeping, paperless solution to save man hours and complete data backup available to restore in case of any system failures.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4" className=' mt-2 mb-2'>
                                            <Accordion.Header>Tamper proof</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Entries made into the system cannot be altered, edited or deleted by neither the vessel nor the operators.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className=' mt-2 mb-2'>
                                            <Accordion.Header>Indication of Leakages and accumulation </Accordion.Header>
                                            <Accordion.Body>
                                                <p>The system plays a vital role by its enhanced graphical representation of the data to alert the user at a glance of a potential leakage or an excess accumulation of the waste.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col-12 col-sm-4'>
                                        <Accordion.Item eventKey="1" className=' mt-2 mb-2'>
                                            <Accordion.Header>The Sludge Vs fuel analysis</Accordion.Header>
                                            <Accordion.Body>
                                                <p>the operators can immediately assess the quality of the fuel based on the ratio of Sludge generated to fuel received.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5" className=' mt-2 mb-2'>
                                            <Accordion.Header>Accurate recordkeeping and automated calculations</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Daily tank soundings are recorded on the system and automatic calculations are per-formed to prevent errors, detentions, delays and legal conflicts towards the accuracy of information.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </div>
                                    <div className='col-12 col-sm-4'>
                                        <Accordion.Item eventKey="3" className=' mt-2 mb-2'>
                                            <Accordion.Header>Operational assessment of the disposal equipment</Accordion.Header>
                                            <Accordion.Body>
                                                <p>The rate generation of the sludge and the rate of incineration determines the effi-ciency of the incinerator and oily water separator discharge rate versus the bilge generation indicates the usage and efficiency of the oily water separator unit.</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className=' mt-2 mb-2'>
                                            <Accordion.Header>Audits and inspections</Accordion.Header>
                                            <Accordion.Body>
                                                <p>Ready information for every ship on a click which saves time during audits and in-spections with the data available at a prevue instead of checking logbooks, calcula-tions and activities.</p>
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

export default WasteDisposal;