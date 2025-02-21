"use client";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function OInvent(index) {
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
        <Container>

          <Row className="mt-5 text-start">
            <Col xs={12} md={7} className='motion-container'>
              <motion.div variants={boxVariantsL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }}  >
                <div className='row justify-content-start'>
                <h1 className='un-leash-Heading text-left'  style={{ color: "rgb(6 23 68)", paddingBottom: "3%", fontSize: "2rem" }}>NAU 2.1 - Inventory Management and Procurement System </h1>
                  <h1 className='un-leash-command-subheading text-left'>Streamline Procurement, Manage Inventory Efficiently with NAU's Integrated System</h1>
                  <p className='un-leash-paragraph '>
                    NAU's Inventory Management and Procurement system empowers shipping companies to gain complete control over their supply chain, from requisition to delivery.
                    This user-friendly, web-based solution offers a tightly integrated platform that streamlines workflows, optimizes inventory levels, and reduces administrative burdens.
                  </p>
                  <h1 className='un-leash-command-subheading m-t-20'>Benefits of NAU's Inventory Management and Procurement System</h1>
                 <p>Our inventory management system ensures efficient and accurate organization and tracking. With enhanced purchase control and hierarchical approval, we provide stringent oversight of purchase orders. Comprehensive vendor management includes evaluation, communication tools, and a dedicated vendor portal. Automated updates ensure precise ROB tracking and controlled spare consumption. Seamlessly integrating with existing finance and accounting modules, our system streamlines operations for optimal efficiency.</p>
                </div>
              </motion.div>
            </Col>
            <Col xs={12} md={5}>
              <img src="/Images/Mockups/inv-dashboard-mockupTop.png" alt='Products' className='img-fluid sticky-top' />
            </Col>
            <Col xs={12} className='m-t-40 text-center'>
              <h1 className='un-leash-command-heading'>
                Orion supply Chain
              </h1>
            </Col>

          </Row>
          <Row className='mt-5'>
            <Col xs={12} md={2}></Col>
            <Col xs={12} className='motion-container'>
              <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                <div className='layout11_item fs-20 font-bold'>NAU's Inventory Management and Procurement system is an essential tool for any shipping company looking to optimize its supply chain. By gaining complete control over your procurement processes and inventory management, you can reduce costs, improve efficiency, and ensure the smooth operation of your fleet.</div>
              </motion.div>
            </Col>
            <Col xs={12} md={2}></Col>

         
            <Col xs={12} className='motion-container mt-5'>
              <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                <div className="features1_component-copy text-left m-t-5 ">

                  <div className="features-item-1">
                    <div className="layout11_item">
                      <div className="layout11_icon-wrapper"><img src="/Images/SVG/TargetPeople.svg" loading="lazy" alt="" /></div>
                      <div className="layout11_content-wrapper">
                        <div className="margin-bottom margin-small">
                          <h3 className="heading-small">Enhance Visibility</h3>
                        </div>
                        <p className="paragraph-11">Gain real-time insights into your entire supply chain, from requisitions received from onboard vessels to inventory levels across your entire fleet.</p>
                      </div>
                    </div>
                  </div>

                  <div className="features-item-2">
                    <div className="layout11_item">
                      <div className="layout11_icon-wrapper"><img src="/Images/SVG/Stayaheadofremediationcosts-o.svg" loading="lazy" alt="" /></div>
                      <div className="layout11_content-wrapper">
                        <div className="margin-bottom margin-small">
                          <h3 className="heading-small">Optimize Workflows</h3>
                        </div>
                        <p className="paragraph-11">Automate requisition and procurement processes, streamlining communication between vessels, shore-based staff, and vendors.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="features-item-3">
                    <div className="layout11_item">
                      <div className="layout11_icon-wrapper"><img src="/Images/SVG/Key trends.svg" loading="lazy" alt="" /></div>
                      <div className="layout11_content-wrapper">
                        <div className="margin-bottom margin-small">
                          <h3 className="heading-small">Control Costs</h3>
                        </div>
                        <p className="paragraph-11">Benefit from an advanced budgeting engine that empowers informed purchasing decisions and optimizes vendor selection.</p>
                      </div>
                    </div>
                  </div>

                  <div className="features-item-4">
                    <div className="layout11_item">
                      <div className="layout11_icon-wrapper"><img src="/Images/SVG/Securepage.svg" loading="lazy" alt="" /></div>
                      <div className="layout11_content-wrapper">
                        <div className="margin-bottom margin-small">
                          <h3 className="heading-small">Maintain Inventory Control</h3>
                        </div>
                        <p className="paragraph-11">Manage spare parts and stores efficiently, with features like barcode scanning, location-based management, and filtering/exporting capabilities.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            </Col>
          </Row>
          <Row className='mt-5 text-left'>
            <Col xs={12} md={7} className='m-t-40 motion-container'>
              <h1 className='un-leash-command-subheading text-left'>Key Features of Our Supply Chain Management System</h1>
              {/* <h1 className='un-leash-efficient-subheading m-t-25'>"Essential Features of Inventory Management Systems":</h1> */}
              <motion.div variants={boxVariantsL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }}>
                <ul className="list-items list-items-layout2 list-unstyled text-left">
                  <li>Well-structured Stores and Inventory: Organize stores and spare inventory with ease.</li>
                  <li>Traceability and Hierarchy: Strong hierarchical structure for component traceability.</li>
                  <li> IMPA Code Integration: Option to integrate IMPA Codes for standardization.</li>
                  <li>Flexible Requisition Modes: Various modes for creating service, spares, and store requisitions.</li>
                  <li>Automated Updates: Automated ROB updates and controlled consumption via PMS.</li>
                  <li>Advanced Purchase Cycle: Includes purchase and technical approval functions.</li>
                  <li> Approval-based Control: Stringent control over purchase order values with a defined hierarchy.</li>
                  <li> Leave Management and Vessel Re-allocation: Efficient management of leave and vessel re-allocation.</li>
                  <li> RFQ and Quote Comparisons: Easily maintained RFQs and quote comparisons for multiple vendors.</li>
                  <li> Multiple Currency Management: Handles transactions in multiple currencies.</li>
                  <li> Generate POs Without RFQ: For pre-agreed services like 3rd party inspections and audits.</li>
                  <li> Budget Control:  Budgets are maintained and controlled through the system.</li>
                  <li> Vendor Communication:  Various emailers and soft forms for vendor communications.</li>
                  <li> Vendor Management: Manage and evaluate vendors through the system.</li>
                  <li>  Vendor Portal:  Manage RFQs, POs, delivery orders, and invoices.</li>
                  <li>  Integration with Finance and Accounting: Seamless integration with finance and accounting modules.</li>
                </ul>
              </motion.div>
            </Col>
            <Col xs={12} md={5} className='m-t-40 '>
              <img src="/Images/LC/inventoryKifeCycle.png" alt='Products' className='img-fluid sticky-top' style={{ boxShadow: "#6b6b6b 1px 1px 4px", borderRadius: "4px" }} />
            </Col>
          </Row>
          <Row className='mt-5 text-left'>
            <Col xs={12} md={7}>
              <img src="/Images/Mockups/inv-dashboard-mockupBottom.png" alt='Products' className='img-fluid sticky-top' />
            </Col>
            <Col xs={12} md={5} className='motion-container'>
              <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }}>
              
              <h1 className='un-leash-command-subheading text-left' style={{ paddingTop: "3%" }}>The Challenges of Traditional Procurement</h1>
                
                  <h1 className='un-leash-efficient-subheading'>Managing a complex maritime supply chain can be challenging. Traditional methods often involve:</h1>
                  <ul>
                    <li className='un-leash-paragraph mb-3'>
                      <label className='un-leash-paragraph font-bold'>Limited visibility: </label> Difficulties in tracking requisitions, purchase orders, and inventory levels across various vessels and locations.
                    </li>
                    <li className='un-leash-paragraph mb-3'>
                      <label className='un-leash-paragraph font-bold'>Inefficient workflows: </label> Paper-based processes can lead to delays, errors, and communication breakdowns.
                    </li>
                    <li className='un-leash-paragraph mb-3'>
                      <label className='un-leash-paragraph font-bold'>Uncontrolled spending: </label> Without proper controls, purchasing decisions may not be optimized for cost-effectiveness.
                    </li>
                    <li className='un-leash-paragraph mb-3'>
                      <label className='un-leash-paragraph font-bold'>Inventory mismanagement: </label> Excessive stockpiling or stockouts can significantly impact operations and finances.
                    </li>
                  </ul>


                             
               
              </motion.div>
            </Col>
          </Row>

        </Container>
      </Row>
      <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
        <Container fluid style={{ padding: '0' }} className=' m-t-40 text-left'>
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

export default OInvent;