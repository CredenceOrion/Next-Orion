"use client";
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function ECloud(index) {
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
  
  
  return (
    <>

     

      <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
        <Container fluid className="p-l-0 p-r-0 backgroundTtachment">
          <Row className='m-l-0 m-r-0 motion-container'>
            <Col xs={12} md={6}>
              <motion.div variants={boxVariantsL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
              <h1 className='p-l-10per BiEmpowering'  style={{ color: "rgb(6 23 68)", paddingTop: "7%", fontSize: "2rem" }}>E-Cloud: Your Centralized Filing System</h1>
                <h1 className="p-l-10per un-leash-command-subheading text-left" style={{ color: "rgb(6 23 68)", paddingTop: "1%" }}>Revolutionize File Management with E-Cloud</h1>
                <div className='p-l-10per text-left fs-18' style={{ color: "rgb(6 23 68)" }}>
                  Experience seamless file management with E-Cloud, our innovative centralized filing system designed to keep all your company's documentation organized and accessible.
                  Whether it's monthly, quarterly, half-yearly, or yearly forms, E-Cloud ensures that all your data is systematically filed, easily retrievable, and securely stored.
                </div>
                <h1 className='p-l-10per un-leash-command-subheading text-left' style={{paddingTop:"3%"}}>Discover the Power of E-Cloud</h1>
                  <p className='p-l-10per text-left fs-18' style={{ color: "rgb(6 23 68)" }}>Take the first step towards transforming your company's file management system. 
                  Contact us today for a demo and see how E-Cloud can revolutionize your document-handling processes, making them more efficient, secure, and hassle-free.
                  </p>
               
              </motion.div>
            </Col>
            <Col xs={12} md={6} style={{ position: "relative" }}>
              <img src="/Images/Mockups/e-cloud.png" alt="E-cloud" className='p-t-5per p-l-10per p-r-10per img-fluid' />
            </Col>
          </Row>
        </Container>
      </Row>
      <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
        <Container fluid className="p-l-0 p-r-0 ">
          <Container>
            <Row className="mt-1 text-start">
              <Col xs={12} md={6} className='motion-container sticky-top'>
                <img src="/Images/LC/digiFiling.gif" alt='Products' className='img-fluid' />
                <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                 
                </motion.div>
              </Col>
              <Col xs={12} md={6} className='motion-container'>
                <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }}>
                   <h3 className='font-bold' style={{color:"rgb(6 23 68)"}}>Key Benefits of E-Cloud:</h3>

                  <ul className="list-items list-items-layout2 list-unstyled text-left">
                    <li>
                      Organized Filing: Keep all forms and documents systematically organized based on timeframes (monthly, quarterly, half-yearly, yearly).
                    </li>
                    <li>
                      Real-Time Updates: Vessels can update the repository in real-time, ensuring that the most current information is always available.
                    </li>
                    <li>
                      Reduced Email Communication: Minimize email traffic and streamline communication by maintaining a centralized document repository.
                    </li>
                    <li>
                      Anytime, Anywhere Access: Access critical documents from any location, ensuring you are always in touch with essential data.
                    </li>
                    <li>
                      Enhanced Traceability: Maintain a clear and retrievable record of all ship's reports, ensuring that documents are never misplaced or lost.
                    </li>
                    <li>
                      Robust Security: End-to-end encryption keeps your data safe and secure from unauthorized access.
                    </li>
                    <li>
                      Email Reduction: By utilizing a centralized filing system, save the effort and time involved in sending millions of emails every year.
                    </li>

                  </ul>

                </motion.div>
              </Col>

            </Row>

          </Container>
        </Container>
      </Row>
      
      <Row className='m-l-0 m-r-0 p-l-0 p-r-0 pt-5'>
        <Container>
          <Row>
          <Col xs={12} className='motion-container'>
                    <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                      <div className="features1_component-copy text-left m-t-5">

                        <div className="features-item-1">
                          <div className="layout11_item">
                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Clients-o.svg" loading="lazy" alt="" /></div>
                            <div className="layout11_content-wrapper">
                              <div className="margin-bottom margin-small">
                                <h3 className="heading-small">Embrace Efficiency with E-Cloud</h3>
                              </div>
                              <p className="paragraph-11">E-Cloud simplifies your document management and enhances overall efficiency by ensuring that all necessary files are well-organized and easily accessible. Embrace the future of maritime document management with E-Cloud and enjoy a more streamlined, effective, and organized approach to filing.</p>
                            </div>
                          </div>
                        </div>

                        <div className="features-item-2">
                          <div className="layout11_item">
                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Stayaheadofremediationcosts-o.svg" loading="lazy" alt="" /></div>
                            <div className="layout11_content-wrapper">
                              <div className="margin-bottom margin-small">
                                <h3 className="heading-small">End-to-End Encryption and Security</h3>
                              </div>
                              <p className="paragraph-11">E-Cloud is built with end-to-end encryption to keep your data secure. Our advanced security protocols ensure that your documents are protected from unauthorized access, maintaining the confidentiality and integrity of your sensitive information.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="features-item-3">
                          <div className="layout11_item">
                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Key trends.svg" loading="lazy" alt="" /></div>
                            <div className="layout11_content-wrapper">
                              <div className="margin-bottom margin-small">
                                <h3 className="heading-small">Streamlined Access and Review</h3>
                              </div>
                              <p className="paragraph-11">Gone are the days of sifting through countless emails and files. With E-Cloud, all your critical documents are just a few clicks away, accessible from anywhere at any time. This ensures that you can review and retrieve ship reports swiftly and efficiently, enhancing productivity and operational oversight.</p>
                            </div>
                          </div>
                        </div>

                        <div className="features-item-4">
                          <div className="layout11_item">
                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/customerprocess-o.svg" loading="lazy" alt="" /></div>
                            <div className="layout11_content-wrapper">
                              <div className="margin-bottom margin-small">
                                <h3 className="heading-small">Centralized Data Repository</h3>
                              </div>
                              <p className="paragraph-11">E-Cloud serves as a robust data repository, continuously updated by vessels and readily accessible by the shore office. This real-time synchronization minimizes the need for extensive email communication and ensures that ship reports are maintained at a single, secure location.</p>
                            </div>
                          </div>
                        </div>

                       
                      </div>
                    </motion.div>
                  </Col>
          
            
          </Row>
          </Container>
      </Row>
      <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
        <Container fluid style={{ padding: '0' }} className=' m-t-40 text-left'>
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
        </Container>
      </Row>
    </>
  );
}

export default ECloud;