"use client";
import React from 'react';
import { Container, Row, Accordion, Col} from 'react-bootstrap';
import { motion } from 'framer-motion';

function FPMApp(index) {
  let boxVariantsL = {};
  let boxVariantsR = {};
  //let boxVariantsPop = {};
  const isMobile = typeof window !== "undefined" && window.innerWidth < 1100;
  if (!isMobile) {
    boxVariantsL = {
      initial: { opacity: 0 },
      whileInView: { opacity: 1, transition: { duration: 0.7 } }
    }
    boxVariantsR = {
      initial: { opacity: 0 },
      whileInView: { opacity: 1, transition: { duration: 0.7 } }
    }
    // boxVariantsPop = {
    //   initial: { opacity: 0, scale: 0.2 },
    //   whileInView: { opacity: 1, scale: 1, transition: { duration: 1 } }
    // }
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
    // boxVariantsPop = {
    //   initial: { opacity: 1 },
    //   whileInView: { opacity: 1 }
    // }
  }
  return (
    <>

     
      <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
        <Container fluid className="p-l-0 p-r-0 backgroundTtachment">
          <Row className='m-l-0 m-r-0 motion-container'>
            <Col xs={12} md={7}>
              <motion.div variants={boxVariantsL} whileInView="whileInView" initial="initial" viewport={{ once: true }} >
              <h1 className='p-l-10per BiEmpowering' style={{ color: "rgb(6 23 68)", paddingTop: "5%", fontSize: "2rem" }}>Orion's NAU App: Seamlessly Connecting Maritime Operations</h1>
              <div className='p-l-10per text-left fs-18' style={{ color: "rgb(6 23 68)" }}>
                  Orion's Fleet Positioning Mobile App is a comprehensive solution designed to optimize maritime operations through real-time insights and seamless communication. With features including AIS and Vessel reports, daily updates, and dynamic dashboards for critical parameters and environmental data, the app empowers fleet managers to make informed decisions efficiently. Providing access to agency information, important events, and direct communication channels, Orion's app ensures streamlined collaboration and enhances situational awareness for maritime teams, driving efficiency and safety across the fleet.
                </div>
              <h1 className='p-l-10per BiEmpowering' style={{ color: "rgb(6 23 68)", paddingTop: "7%", fontSize: "2rem" }}>Orion's Fleet Positioning App</h1>
              <div className='p-l-10per text-left fs-18' style={{ color: "rgb(6 23 68)" }}>
              The Fleet Performance Mobile Application Can Lead To Major Financial & Environment Saving Of 8 Million USD And 22k Tonne Co2 Respectively.
                </div>
              <div className='p-l-10per text-left fs-18' style={{ color: "rgb(6 23 68)" }}>
              Follow the status of your fleet wherever you are and control the important performance KPIs; such as consumption, speed, charter party compliance, weather and next port information with ETA and more technical and operational information to make informed decisions that can save time, save fuel, cut emissions and lower operational costs.
                </div>
                <div className="apps-buttons p-l-10per m-t-40 text-left">
                     
                     <a href="https://apps.apple.com/in/app/nau/id1441118751" className="float-left" target='_blank' rel="noreferrer">
                    <img src="/Images/AppStore.png" alt="App Store Download" style={{maxWidth:"180px", animation:"none"}} className='img-fluid'/>
                      
                      </a>
                      <a href="https://play.google.com/store/apps/details?id=nau.in&hl=en" target='_blank' rel="noreferrer">
                      <img src="/Images/playStore.png" alt="Coming Soon on the Play Store" style={{maxWidth:"180px", animation:"none"}} className='img-fluid m-l-10'/>
                      </a>
                  </div>
              </motion.div>
            </Col>
            
            <Col xs={12} md={5}>
              <motion.div variants={boxVariantsR} whileInView="whileInView" initial="initial" viewport={{ once: true }} >
                <img src="/Images/Mockups/NauApp/NauApp3.png" alt="" className='img-fluid' />
              </motion.div>
            </Col>
          </Row>
        </Container>
        <Container fluid className="p-l-0 p-r-0 ">

        <Row className='mt-5 m-l-0 m-r-0'>
          <Col xs={12} className='m-t-20 text-center'>
                    <h1 className='un-leash-command-heading'>
                    FLEET PERFORMANCE MOBILE APP
                    </h1>
                    <h2 className='un-leash-command-subheading'>Follow the status of your fleet wherever you are and control the important performance KPIs</h2>
                  </Col>
            <Col xs={12} className='p-l-0 p-r-0 mt-5'>

              <img src="/Images/Mockups/NauApp/NauApp2.jpg" alt='Products' className='img-fluid float-left' />

            </Col>
          </Row>

          <Row className='pt-5 m-l-0 m-r-0'>
            <Col xs={12} md={6} className='p-l-0'>
             
                <img src="/Images/Mockups/NauApp/NauApp1.png" alt='Products' className='img-fluid sticky-top' />
             
            </Col>

            <Col xs={12} md={6} className='motion-container text-left'>
              <motion.div variants={boxVariantsR} whileInView="whileInView" initial="initial" viewport={{ once: true }} >
              <div className='row justify-content-start'>
                      <h1 className='un-leash-command-heading' style={{fontSize:"2.5rem"}}>FEATURES & BENEFITS OF THE APP:</h1>
                      <p>
                        The operator receives invaluable information on every operation and activity on the APP based on the acquired measurements, a set of performance parameters which are calculated continuously and available for the fleet to the users to manage their vessels in a more economical and environmentally beneficial way.
                      </p>
                    </div>
             
                  <Accordion alwaysOpen className=' text-start'>
                    <Row className="mt-3 CommonAccordion">
                     
                        <Accordion.Item eventKey="0" className=' mt-2 mb-2'>
                          <Accordion.Header>Fleet list</Accordion.Header>
                          <Accordion.Body>
                            <p>All the vessels under your fleet at a glance with their latest reported positions, parameters and statistics.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4" className=' mt-2 mb-2'>
                          <Accordion.Header>Benchmark</Accordion.Header>
                          <Accordion.Body>
                            <p>Benchmark your vessels against their Sea trial as well as Charter party to find the variance.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="7" className=' mt-2 mb-2'>
                          <Accordion.Header>Energy efficiency operating index, CO2 and other emissions</Accordion.Header>
                          <Accordion.Body>
                            <p>Emissions data readily available along with the EEOI and emissions. The emission of CO2, NOX and SOX is calculated based on combustion process analysis, fuel quality and fuel consumption.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="10" className=' mt-2 mb-2'>
                          <Accordion.Header>Fuel Efficiency and speed</Accordion.Header>
                          <Accordion.Body>
                            <p>The speed and power curves with the fuel consumption plotted over the sea trial and shop trial data. Rolling and continuous performance monitoring.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                     
                        <Accordion.Item eventKey="1" className=' mt-2 mb-2'>
                          <Accordion.Header>Under performance Alerts</Accordion.Header>
                          <Accordion.Body>
                            <p>Underperformance based on speed, consumption for fuel, lube oils, fresh waters are highlighted for the users.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5" className=' mt-2 mb-2'>
                          <Accordion.Header>Vessel movement information</Accordion.Header>
                          <Accordion.Body>
                            <p>Vessel past movement history for viewing trade options, patterns to take a decision for future fixtures.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="8" className=' mt-2 mb-2'>
                          <Accordion.Header>Vessel reported data and AIS data overlay</Accordion.Header>
                          <Accordion.Body>
                            <p>The AIS data together with the vessel reported position, weather and other parameters depict the accuracy of the reports from the vessel and also enable the shore office to keep track of any discrepancies.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="11" className=' mt-2 mb-2'>
                          <Accordion.Header>Main & Auxiliary Engine efficiency</Accordion.Header>
                          <Accordion.Body>
                            <p>Time and power utilization plotted over the fuel efficiency with SFOC provides the helpful data towards efficient and optimum use of the machinery by the vessel staff.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                     
                        <Accordion.Item eventKey="3" className=' mt-2 mb-2'>
                          <Accordion.Header>Information of the planned activities</Accordion.Header>
                          <Accordion.Body>
                            <p>The interface allows the users to view the activities planned and enter on cloud for inspections, repairs, supplies, crew change, etc. planned for the forth coming port.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6" className=' mt-2 mb-2'>
                          <Accordion.Header>Agency Information</Accordion.Header>
                          <Accordion.Body>
                            <p>Ready information for the Owner’s and charterer’s agency information available to directly connect on voice or email. The Company can allow access to agencies and other parties for direct feeds and following the vessels in their region.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="9" className=' mt-2 mb-2'>
                          <Accordion.Header>Weather information</Accordion.Header>
                          <Accordion.Body>
                            <p>Wind, waves, currents, temperature, rain and other data is available on the map.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="12" className=' mt-2 mb-2'>
                          <Accordion.Header>Waste management overview</Accordion.Header>
                          <Accordion.Body>
                            <p>This is a very important as the system monitors and acts as a warning towards leakage or any abnormalities within the machinery causing over accumulation of bilge water or sludge generation in the tanks.</p>
                          </Accordion.Body>
                        </Accordion.Item>
                     
                    </Row>
                  </Accordion>
                </motion.div>
            </Col>


          </Row>
         

        </Container>
        
        <Container fluid style={{ padding: '0' }} className=' m-t-40 text-left'>
          <Row style={{ margin: '0', padding: '0' }}>

            <Row className=' pt-5 pb-5 text-center' style={{ backgroundImage: "url(/Images/Nau/CrossPattern.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "0", margin: "0" }}>
              <Col xs={12} md={8}>
                <h1 className="BiEmpowering" style={{ color: "#ffffff", paddingTop: "3%" }}>Redefine Maritime Excellence </h1>
                <h1 className="BiEmpoweringBottomText" style={{ color: "#ffffff", paddingTop: "3%" }}>Shape the future of maritime management with our innovative apps that enhance operations and boost efficiency. </h1>
              </Col>
              <Col xs={12} md={4}>
                
                  <a href="https://apps.apple.com/in/app/nau/id1441118751" className="float-left m-t-50 m-l-5" target='_blank' rel="noreferrer" >
                    <img src="/Images/AppStore.png" alt="App Store Download" style={{maxWidth:"140px", animation:"none"}} className='img-fluid'/>
                      
                      </a>
                
                      <a href="https://play.google.com/store/apps/details?id=nau.in&hl=en" className="float-left m-t-50 m-l-20" target='_blank' rel="noreferrer">
                    <img src="/Images/playStore.png" alt="App Store Download" style={{maxWidth:"140px", animation:"none"}} className='img-fluid'/>
                      
                      </a>
                
              </Col>

            </Row>
          </Row>
        </Container>
      </Row>
    </>
  );
}

export default FPMApp;