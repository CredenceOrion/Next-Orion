import { Container, Row, Col } from 'react-bootstrap';
import EmailForm from '../../components/SendContactUsEmail';

function ContactUsForm() {

    return (
        <>

           

            <Container fluid style={{ padding: '0' }}>
                <Row style={{ backgroundColor: '#f9f9f9', margin: '0', padding: '0' }}>
                    <Col xs={12} style={{ padding: "0" }}>
                        <div className='ResponsiveImage' style={{ position: "relative" }}>
                            <img src="/Images/cnt.jpg" loading='eager' alt='about-us' className='img-fluid' style={{ width: "100%", backgroundPosition: "0 0" }} />
                        </div>
                    </Col>
                </Row>
                <Row className="g-4 mb-5" style={{ margin: "0" }}>
                    <Container fluid>
                        <Row className="pt-5 pb-5 g-4 mt-1 mb-5 text-start" style={{ backgroundColor: "#f0f8ff" }}>
                            <Col xs={12}  md={4}>
                                <iframe title='Address' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.516482134354!2d77.10292727494942!3d28.43384319307653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f5460dd0603%3A0x290142ae2ddbae39!2sOrion%20Marine%20Concepts!5e0!3m2!1sen!2sin!4v1709033156380!5m2!1sen!2sin" className='MapContact' allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                <div className="">
                                    <p><strong>Orion&nbsp;Marine Concepts</strong></p>
                                    <p></p>
                                    <p> Unit no 116, First Floor,<br />Suncity Business Tower, Sector-54, Golf Course Road
                                        <br />Gurugram, Haryana, India – 122002
                                        <br />Email: contact@orionmarineconcepts.com
                                        <br />Tel  +91 124-403 6622, +91 124-420 9280
                                    </p>

                                </div>
                            </Col>
                            <Col xs={12}  md={8}> <EmailForm /> </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                <h2 className='mt-4 mb-5'>
                                    Our Global Presence
                                </h2>
                            </Col>
                            <Col xs={12}  md={7}>
                                <img src="/Images/globalPresence.png" alt="" className='img-fluid' />
                            </Col>
                            <Col xs={12}  md={5}>
                                <Row>
                                    <Col xs={12} className='m-t-20'>
                                        <div className="layout11_item" style={{ padding: "5px" }}>
                                            <div className="layout11_icon-wrapper"><img src="/Images/ProductImages/Flag_of_India.png" loading="lazy" alt="" /></div>
                                            <div className="layout11_content-wrapper text-left">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-small">India (Head Quarter)</h3>
                                                </div>
                                                <p className="paragraph-11">
                                                    Unit no 116, First Floor,<br />Suncity Business Tower, Sector-54, Golf Course Road
                                                    <br />Gurugram, Haryana, India – 122002
                                                    <br />Email: contact@orionmarineconcepts.com
                                                    <br />Tel  +91 124-403 6622, +91 124-420 9280
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} className='m-t-20'>
                                        <div className="layout11_item" style={{ padding: "5px" }}>
                                            <div className="layout11_icon-wrapper"><img src="/Images/ProductImages/Flag_of_Oman.png" loading="lazy" alt="" /></div>
                                            <div className="layout11_content-wrapper text-left">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-small">Oman</h3>
                                                </div>
                                                <p className="paragraph-11">
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col xs={12} className='m-t-20'>
                                        <div className="layout11_item" style={{ padding: "5px" }}>
                                            <div className="layout11_icon-wrapper"><img src="/Images/ProductImages/flag_of_the_united_arab_emirates.png" loading="lazy" alt="" /></div>
                                            <div className="layout11_content-wrapper text-left">
                                                <div className="margin-bottom margin-small">
                                                    <h3 className="heading-small">Dubai</h3>
                                                </div>
                                                <p className="paragraph-11">
                                                    Business Center 1, M Floor,
                                                    <br /> The Meydan Hotel, Nad Al Sheba,
                                                    <br /> Dubai, U.A.E
                                                </p>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
        </>
    )
}

export default ContactUsForm;