"use client";
import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import ContactForm from '../../components/ScheduleDemoContact';
import { motion } from 'framer-motion';


export default function ScheduleDemo(index) {
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


      <Row style={{ margin: "0", backgroundImage: `url(/Images/SchedulDemoBg.jpg)`, minHeight: "100vh", backgroundPosition: "0 0", backgroundSize: "cover" }}>
        <Container className='motion-container'>
          <motion.div variants={boxVariantsPop} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
            <h1 className='font-bold m-t-120 m-b-80 colorWhite un-leash-Heading-schedule'>
              Schedule a Demo
            </h1>
          </motion.div>
          <Row>
            <Col xs={12} md={5} className='p-r-20 m-b-70 motion-container'>
              <motion.div variants={boxVariantsL} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                <div className="HeroSchText">
                  <h1 className="font-bold m-b-30 colorWhite un-leash-green-subheading">MARITIME ENTERPRISE RESOURCE PLANNING SOLUTIONS: PIONEERING EXCELLENCE</h1>
                  <div className="m-b-10">
                    <span>☸️</span> <span style={{ fontSize: "1.2rem" }}>Discover NAU 2.1, our flagship product, an All-In-One suite.</span>
                  </div>
                  <div className="m-b-10">
                    <span>☸️</span>  <span style={{ fontSize: "1.2rem" }}>One suite for all your solutions.</span>
                  </div>
                  <div className="m-b-10">
                    <span>☸️</span>  <span style={{ fontSize: "1.2rem" }}>Seamless Cloud-based system, access from anywhere.</span>
                  </div>
                  <div className="m-b-10">
                    <span>☸️</span>  <span style={{ fontSize: "1.2rem" }}>Trusted by over 1600 vessels.</span>
                  </div>
                  <div className="m-b-10">
                    <span>☸️</span>  <span style={{ fontSize: "1.2rem" }}>Experience Continuous refinement and unwavering support.</span>
                  </div>
                  <div className="m-b-10">
                    <span>☸️</span>  <span style={{ fontSize: "1.2rem" }}>Elevate your maritime experience with our comprehensive digital solutions.</span>
                  </div>
                </div>
              </motion.div>
            </Col>
            <Col xs={12} md={7} className=' motion-container'>
              <motion.div variants={boxVariantsR} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0 }} >
                <Row style={{ margin: "0" }}>
                  <Col xs='12' className='text-left ScheduleDemoForm'>
                    <ContactForm />
                  </Col>
                </Row>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Row>
    </>

  );
}