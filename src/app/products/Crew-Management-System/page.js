"use client";
import { Container, Row, Accordion, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { motion } from 'framer-motion';



function ShipCrew(index) {
  let boxVariantsL = {};
  let boxVariantsR = {};
  let boxVariantsPop = {};
  const isMobile =typeof window !=="undefined" && window.innerWidth < 1100;
  if (!isMobile) {
    boxVariantsL = {
      initial: { opacity: 0 },
      whileInView: { opacity: 1, transition: { duration: 0.7 } }
    }
    boxVariantsR = {
      initial: { opacity: 0 },
      whileInView: { opacity: 1, transition: { duration: 0.7 } }
    }
    boxVariantsPop = {
      initial: { opacity: 0, scale: 0.2 },
      whileInView: { opacity: 1, scale: 1, transition: { duration: 1 } }
    }
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
    boxVariantsPop = {
      initial: { opacity: 1 },
      whileInView: { opacity: 1 }
    }
  }



  return (
    <>

      

      <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
        <Container fluid className="p-l-0 p-r-0 backgroundTtachment">
          <Row className='m-l-0 m-r-0 motion-container'>
            <Col xs={12} md={5}>
              <motion.div variants={boxVariantsL} whileInView="whileInView" initial="initial" viewport={{ once: true }} >
                <img src="/Images/Mockups/Crew-dashboard-mockup.png" alt="E-cloud" className='p-t-5per img-fluid' />
              </motion.div>
            </Col>
            <Col xs={12} md={7}>
              <motion.div variants={boxVariantsR} whileInView="whileInView" initial="initial" viewport={{ once: true }} >
                <h1 className='p-l-10per BiEmpowering' style={{ color: "rgb(6 23 68)", paddingTop: "7%", fontSize: "2rem" }}>NAU's Crew Management System</h1>
                <h1 className="p-l-10per un-leash-command-subheading text-left" style={{ color: "rgb(6 23 68)" }}>Build a High-Performing Crew with Orion's Streamlined Crew Management System</h1>


                <div className='p-l-10per text-left fs-18' style={{ color: "rgb(6 23 68)" }}>
                  Orion's Crew Management System tackles the complexities of crew management with a user-friendly, feature-rich platform.
                  Say goodbye to time-consuming paperwork and administrative headaches.
                  Our system automates many tasks, allowing you to focus on what matters most - building a high-performing team.

                </div>
              </motion.div>
              <motion.div variants={boxVariantsR} whileInView="whileInView" initial="initial" viewport={{ once: true }} transition={{ duration: 1.1 }}  >
                <h1 className="p-l-10per un-leash-command-subheading text-left" style={{ color: "rgb(6 23 68)", paddingTop: "1%" }}>Why Crew Management Matters</h1>
                <div className='p-l-10per text-left fs-18' style={{ color: "rgb(6 23 68)" }}>
                  Effective crew management goes beyond simply filling positions. It's about building a cohesive team of skilled professionals who are committed to safety, efficiency, and operational excellence.
                  A well-managed crew fosters a positive work environment, reduces employee turnover, and ultimately contributes to the success of your entire operation.
                </div>
              </motion.div>
            </Col>

          </Row>
        </Container>
        <Container fluid className="p-l-0 p-r-0 ">
          <Row style={{ margin: '0', padding: '0' }}>
            <Container>
              <Row className="mt-5 text-start">

                <Col xs={12} md={6} className='motion-container'>
                  <motion.div variants={boxVariantsL} whileInView="whileInView" initial="initial" viewport={{ once: true }} >

                    <Accordion className=' text-start'>
                      <Row className="g-4 CommonAccordion">
                        <div className='col-12 col-sm-12'>
                          <Accordion.Item eventKey="0" className=' mb-2'>
                            <Accordion.Header>Planning Vessel Assessment (Sign In / Sign Off) </Accordion.Header>
                            <Accordion.Body>
                              <p>Streamline crew transitions with efficient sign in/sign off processes, ensuring smooth vessel operations.</p>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1" className=' mt-2 mb-2'>

                            <Accordion.Header>Recruitment </Accordion.Header>
                            <Accordion.Body>
                              <p>Simplify the recruitment process with powerful search filters and a centralized database to find the best candidates.</p>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2" className=' mt-2 mb-2'>
                            <Accordion.Header>Seafarers Registration - Three Tier Induction Process</Accordion.Header>
                            <Accordion.Body>
                              <p>Maintain detailed records of seafarer's qualifications, certifications, and experience for easy access and verification. Ensuring comprehensive onboarding with a structured three-tier induction process, enhancing crew readiness and integration.</p>

                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="5" className=' mt-2 mb-2'>
                            <Accordion.Header>Sea Time Record </Accordion.Header>
                            <Accordion.Body>
                              <p>Accurately track and log sea time for each crew member to support career progression and compliance with maritime regulations.</p>
                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="6" className=' mt-2 mb-2'>
                            <Accordion.Header>Work & Rest Hours Records</Accordion.Header>
                            <Accordion.Body>
                              <p>Monitor and record work and rest hours to ensure compliance with maritime labor regulations and prevent fatigue.</p>

                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="7" className=' mt-2 mb-2'>
                            <Accordion.Header>Certificates, Documents & Other Records</Accordion.Header>
                            <Accordion.Body>
                              <p>Securely store and manage all crew-related certificates, documents, and records for easy retrieval and compliance verification.</p>

                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="8" className=' mt-2 mb-2'>
                            <Accordion.Header>Crew Account of Wages, Master's Portage Bill</Accordion.Header>
                            <Accordion.Body>
                              <p>Automate wage calculations and manage crew accounts efficiently with the Master's Portage Bill feature.</p>

                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="9" className=' mt-2 mb-2'>
                            <Accordion.Header>Personal Protective Equipment Planner</Accordion.Header>
                            <Accordion.Body>
                              <p>Plan and track the distribution and usage of personal protective equipment (PPE) to ensure crew safety.</p>

                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="10" className=' mt-2 mb-2'>
                            <Accordion.Header>Officer and Crew Appraisal Reports</Accordion.Header>
                            <Accordion.Body>
                              <p>Conduct regular performance appraisals and generate detailed reports to support crew development and management decisions.</p>

                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="11" className=' mt-2 mb-2'>
                            <Accordion.Header>Retention Reports</Accordion.Header>
                            <Accordion.Body>
                              <p>Analyze crew retention data to identify trends and implement strategies for improving crew retention rates.</p>

                            </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="12" className=' mt-2 mb-5'>
                            <Accordion.Header>Birthday Calendar</Accordion.Header>
                            <Accordion.Body>
                              <p>Enhance crew morale by recognizing and celebrating crew member's birthdays with a dedicated birthday calendar.</p>
                            </Accordion.Body>
                          </Accordion.Item>

                        </div>
                      </Row>
                    </Accordion>
                  </motion.div>
                </Col>
                <Col xs={12} md={6}>
                  <div className=' sticky-top'>
                    <img src="/Images/LC/CrewManagementLifeCycle.gif" alt='Products' className='img-fluid' />
                    <img src="/Images/LC/rotation-planning.jpg" alt='Products' className='mt-3 mb-5 img-fluid' />
                  </div>
                </Col>

                <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
                  <Col xs={12} className='m-t-20 text-center'>
                    <h1 className='un-leash-command-heading'>
                      Orion CrewMate
                    </h1>
                  
                  </Col>
                  <Col xs={12}>

                    <Row className='mt-3 motion-container'>
                      <motion.div variants={boxVariantsPop} whileInView="whileInView" initial="initial" viewport={{ once: true }}>

                        <Col xs={12} >
                          <div className='layout11_item fs-20 font-bold'>
                            Orion's Crew Management System is an investment in the future of your maritime operations. By empowering you to build a strong, motivated crew, our system contributes to a safer, more efficient, and ultimately more profitable shipping business.
                          </div>
                        </Col>

                      </motion.div>
                      <Col xs={12} md={6} className='motion-container'>
                        <motion.div variants={boxVariantsPop} whileInView="whileInView" initial="initial" viewport={{ once: true }} >
                          <h1 className='un-leash-command-subheading mt-5'> Ensuring Maritime Excellence </h1>
                          <p style={{ backgroundColor: "white", padding: "5px", borderRadius: "10px" }}>
                            Orion's Crew Management System stands as a cornerstone of maritime excellence.
                            By seamlessly integrating planning, recruitment, training, deployment, and welfare support, Orion ensures the highest standards of crew management throughout the maritime industry.
                            This comprehensive system not only optimizes crew performance and welfare but also fosters a culture of safety, efficiency, and operational excellence within Orion's maritime operations.

                            Orion's Crew Management System helps you to optimize crew selection, deployment and results in reducing administrative time and cost, thus helping ship owners and ship operators to build a proactive community and thereby earn loyalty of seafarers.
                            This proven cost-effective software tool enables seamless information sharing of vital crew data among all parties across the globe. It is easy to use and its intuitive layout ensures efficient and effective crew management processes. The system comes with several sophisticated search filters for the desired outputs.
                            The staff can export customized model of crew lists depending on the purpose and requirement.
                          </p>

                        </motion.div>
                      </Col>
                      <Col xs={12} md={6}>
                        <motion.div variants={boxVariantsPop} whileInView="whileInView" initial="initial" viewport={{ once: true }} >
                          <h1 className='un-leash-command-subheading mt-5'>Candidate Briefing, Vessel Assignment & Travel</h1>
                          <p style={{ backgroundColor: "white", padding: "5px", borderRadius: "10px" }}>
                            The fleet department can conduct, manage and maintain staff briefing records.
                            The vessels can be assigned to the crew and officers through the system including the sign on and sign off process.
                            The travel can be planned and maintained within the system for joining, signing off and transfers.
                          </p>
                          <h1 className='un-leash-command-subheading mt-5'>Appraisals</h1>
                          <p style={{ backgroundColor: "white", padding: "5px", borderRadius: "10px" }}>
                            The best appraisal of a seaman's ability comes on the job.
                            A versatile point system enables the senior ranks to carry out a fair and swift appraisal.
                            The form also includes comment area for the sea staff. The Master and Chief Engineer appraisals can be done by the shore staff.
                            This provides the crew manager with objective information to base his decisions.
                          </p>
                        </motion.div>
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={12} className='m-t-40'>
                    <h3 style={{ color: "#3d3370", fontWeight: "bold"}}>Key Benefits</h3>
                  </Col>
                  <Col xs={12} className='motion-container'>
                    <motion.div variants={boxVariantsPop} whileInView="whileInView" initial="initial" viewport={{ once: true }} >
                      <div className="features1_component-copy text-left m-t-5">

                        <div className="features-item-1">
                          <div className="layout11_item">
                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Clients-o.svg" loading="lazy" alt="" /></div>
                            <div className="layout11_content-wrapper">
                              <div className="margin-bottom margin-small">
                                <h3 className="heading-small">Optimized Crew Selection and Deployment</h3>
                              </div>
                              <p className="paragraph-11">Identify the right person for the job with powerful search filters and a centralized database of crew qualifications and experience.</p>
                            </div>
                          </div>
                        </div>

                        <div className="features-item-2">
                          <div className="layout11_item">
                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Stayaheadofremediationcosts-o.svg" loading="lazy" alt="" /></div>
                            <div className="layout11_content-wrapper">
                              <div className="margin-bottom margin-small">
                                <h3 className="heading-small">Reduced Administrative Time and Cost</h3>
                              </div>
                              <p className="paragraph-11">Automate tasks like crew scheduling, rotation planning, and travel management.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="features-item-3">
                          <div className="layout11_item">
                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Key trends.svg" loading="lazy" alt="" /></div>
                            <div className="layout11_content-wrapper">
                              <div className="margin-bottom margin-small">
                                <h3 className="heading-small">Proactive Crew Retention</h3>
                              </div>
                              <p className="paragraph-11">Foster a positive crew experience with features like performance appraisals, training management, and clear communication channels.</p>
                            </div>
                          </div>
                        </div>

                        <div className="features-item-4">
                          <div className="layout11_item">
                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/customerprocess-o.svg" loading="lazy" alt="" /></div>
                            <div className="layout11_content-wrapper">
                              <div className="margin-bottom margin-small">
                                <h3 className="heading-small">Improved Decision-Making</h3>
                              </div>
                              <p className="paragraph-11">Gain data-driven insights into crew performance, qualifications, and work-rest hours to inform strategic decisions.</p>
                            </div>
                          </div>
                        </div>

                        <div className="features-item-5">
                          <div className="layout11_item">
                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Datamanagement.svg" loading="lazy" alt="" /></div>
                            <div className="layout11_content-wrapper">
                              <div className="margin-bottom margin-small">
                                <h3 className="heading-small">Enhanced Compliance</h3>
                              </div>
                              <p className="paragraph-11">Ensure adherence to regulatory requirements with automated recordkeeping and document management.</p>
                            </div>
                          </div>
                        </div>

                        <div className="features-item-5">
                          <div className="layout11_item">
                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Connectthedots-o..svg" loading="lazy" alt="" /></div>
                            <div className="layout11_content-wrapper">
                              <div className="margin-bottom margin-small">
                                <h3 className="heading-small">Officers Matrix</h3>
                              </div>
                              <p className="paragraph-11">The Officers Matrix is a tool that visualises the composition and qualifications of officers on board each vessel. The matrix can be updated in real-time, providing a clear overview of the crew's qualifications and readiness.</p>
                            </div>
                          </div>
                        </div>

                        <div className="features-item-5">
                          <div className="layout11_item">
                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/db_Brainstorming.svg" loading="lazy" alt="" /></div>
                            <div className="layout11_content-wrapper">
                              <div className="margin-bottom margin-small">
                                <h3 className="heading-small">Alerts & Reminders</h3>
                              </div>
                              <p className="paragraph-11">These automated notifications help prevent oversights and ensure that all compliance and operational requirements are met timely.</p>
                            </div>
                          </div>
                        </div>

                        <div className="features-item-5">
                          <div className="layout11_item">
                            <div className="layout11_icon-wrapper"><img src="/Images/SVG/Defineyouridealcustomer-o..svg" loading="lazy" alt="" /></div>
                            <div className="layout11_content-wrapper">
                              <div className="margin-bottom margin-small">
                                <h3 className="heading-small">Reports & Documents</h3>
                              </div>
                              <p className="paragraph-11">These reports provide valuable insights and support decision-making processes, while the document management system ensures that all critical information is securely stored and easily accessible when needed.</p>
                            </div>
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  </Col>
                </Row>
              </Row>
            </Container>

          </Row>
        </Container>
        <Container fluid style={{ padding: '0' }} className=' m-t-60 text-left'>
          <Row style={{ margin: '0', padding: '0' }}>

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
          </Row>
        </Container>
      </Row>
    </>
  );
}

export default ShipCrew;