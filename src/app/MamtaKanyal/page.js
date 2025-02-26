"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/fontawesome-free-solid";
import { faArrowAltCircleRight } from "@fortawesome/fontawesome-free-regular";
import {
  faLinkedin
  
} from "@fortawesome/free-brands-svg-icons";



function MMKL() {
  const [isMobile, setIsMobile] = useState(true);
  const [isPortrait, setIsPortrait] = useState(true);

  // Save the visiting card
  const handleDownloadVCard = () => {
    const name = "MAMTA KANYAL";
    const phoneNumber = "+91 9953759337";
    const officeNumber1 = "+911244209280";
    const officeNumber2 = "+911244036622";
    const email = "mamta@orionmarineconcepts.com";
    const website = "https://www.orionmarineconcepts.com"; 

    const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:${name}
TEL;TYPE=CELL:${phoneNumber}
TEL;TYPE=WORK,VOICE:${officeNumber1}
TEL;TYPE=WORK,VOICE:${officeNumber2}
EMAIL;TYPE=WORK:${email}
URL:${website}
END:VCARD
    `.trim();

    // Create a blob and object URL
    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);

    // Create a temporary <a> element to trigger the download
    const a = document.createElement("a");
    a.href = url;
    a.download = "Mamta_Kanyal.vcf"; // Set the filename
    document.body.appendChild(a);
    a.click();  // Simulate click to download
    document.body.removeChild(a); // Clean up

    // Revoke the URL after some time
    setTimeout(() => {
        window.URL.revokeObjectURL(url);
    }, 3000);
};


  
  



  useEffect(() => {
    const checkDevice = () => {
      const isMobileDevice = window.matchMedia("(max-width: 768px)").matches;
      const isPortraitMode = window.matchMedia("(orientation: portrait)").matches;

      setIsMobile(isMobileDevice);
      setIsPortrait(isPortraitMode);
    };

    // Initial check
    checkDevice();

    // Listen for changes
    window.addEventListener("resize", checkDevice);
    window.addEventListener("orientationchange", checkDevice);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("orientationchange", checkDevice);
    };
  }, []);

  if (!isMobile || !isPortrait) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f8f9fa",
          textAlign: "center",
        }}
      >
        <div>
          <h2 style={{ color: "#dc3545" }}>Unsupported Device</h2>
          <p>Please use a mobile device in portrait mode to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <Container fluid className="p-l-0 p-r-0" style={{minHeight:"100vh"}}>
      <div className="page-content" style={{minHeight:"100vh"}}>
    

        <header
          id="site_header"
          className="header mobile-menu-hide"
          style={{ position: "relative",height:"160px" }}
        >
          <div className="header-content">
            <div className="header-photo">
            <img src="/Images/Ourteam/team/6.jpg" alt="Director Operations and Technical" />
            </div>
            <div className="header-titles">
              <h2>MAMTA KANYAL</h2>
              <h4>Senior Manager Projects & Operations</h4>
             

              <div style={{ lineHeight: "1" }}>
                <a
                  style={{
                    margin: "0px !important",
                    color: "white",
                    fontSize: "0.8rem",
                  }}
                  href="mailto:mamta@orionmarineconcepts"
                >
                  mamta@orionmarineconcepts.com
                </a>
              </div>
              <div>
                <a
                  style={{
                    margin: "0px !important",
                    color: "white",
                    fontSize: "0.8rem",
                  }}
                  className="mb-2"
                  href="https://www.orionmarineconcepts.com" target="_blank" rel="noreferrer"
                >
                  www.orionmarineconcepts.com
                </a>
              </div>
              <div className="social-links">
                <ul className="mb-1">
                 
                  <li>
                    <a href="https://www.linkedin.com/in/mamta-kanyal-949706113" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                  <li>
                    <a href="mailto:mamta@orionmarineconcepts" target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                  </li>
                 
                </ul>
              </div>

              <div className="social-links">
                <button
                  className="btn btn-info float-end mt-1 mb-2"
                  style={{
                    padding: "0 10px",
                    borderRadius: "50px",
                    color: "#030d27",
                    backgroundColor: "white",
                    borderColor: "white",
                    fontSize: "12px",
                  }}
                  onClick={handleDownloadVCard}
                >
                  Save Visiting Card
                </button>
              </div>
              <span style={{ position: "absolute", right: "20px", top: "15px" }}>
                <img
                  src="/Images/OrionLogo.svg"
                  alt="logo"
                  className="site_headerLogo mt-2"
                  style={{ width: "50px" }}
                />
              </span>
            </div>
          </div>
        </header>
        <div className="content-area" style={{minHeight:"calc(100vh - 160px)",backgroundImage:`url(/Images/Bi/WiredGlobe.jpg)`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
          <div className="animated-sections" style={{height:"100%",position:"relative",backgroundColor:"transparent"}}>
            <section
              data-id="about-me"
              className="animated-section ps ps--theme_default ps--active-y section-active"
              data-ps-id="776c5061-ec44-ace8-2a44-be5e2ab2ac25"
              style={{
                
                height:"calc(100% - 70px)",
                backgroundColor:"transparent"
                //backgroundImage: `url(${BGShips1})`,
                // backgroundPosition: "-340px 0",
              }}
            >
              <div className="section-content">
                <div
                  className="col-xs-12 text-start"
                  style={{ borderRadius: "20px" }}
                >
                  <div
                    className="col-7 float-start"
                    style={{ lineHeight: "1.2" }}
                  >
                    <h5 className="SaasHead">Orion SAAS Portfolio</h5>
                    <div className="R_Box">
                      <ul>
                        <li>
                          <Link
                            href="/products/QHSSE"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                            QHSSE Guardian
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                              className="float-end"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/Planned-Maintenance-System"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                            Planned Maintenance System
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                              className="float-end"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/supply-Chain"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                            Purchase and Procurement
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                              className="float-end"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/Crew-Management-System"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                            Crew Management
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                              className="float-end"
                            />
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link
                            href="/products/Electronic-Document-Management-System"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                            Electronic SMS{" "}
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                              className="float-end"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/fleet-management"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                            Fleet Performance Monitoring{" "}
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                              className="float-end"
                            />
                          </Link>
                        </li>

                        <li>
                          <Link
                            href="/products/fleet-management"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                            MRV and IMO DCS Services
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                              className="float-end"
                            />
                          </Link>
                        </li>

                        <li>
                        <Link
                            href="/products/fleet-management"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                          GHG and CII Monitoring{" "}
                          <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="float-end"
                          />
                          </Link>
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <Link
                            href="/products/ECloud"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                            E-Cloud DocVault
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                              className="float-end"
                            />
                          </Link>
                        </li>

                        <li>
                        <Link
                            href="/products/fleet-management"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                          E-Logs Marpol Annex
                          <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="float-end"
                          />{" "}
                          </Link>
                        </li>
                        <li>
                        <Link
                            href="/products/fleet-management"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                          E-MARPOL Seal Log
                          <FontAwesomeIcon
                            icon={faArrowAltCircleRight}
                            className="float-end"
                          />{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/Orion-Bi"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                            Microsoft BI Enabled
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                              className="float-end"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <h5 className="SaasHead">Mobile Applications</h5>
                    <div className="R_Box">
                      <ul>
                        <li>
                          <Link
                            href="/Inspect-Nau-App"
                            style={{ fontSize: "11px", color: "#000000" }}
                          >
                            InspectNAU - SIRE 2.0, RISQ 3.1...
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                              className="float-end"
                            />
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="/products/Fleet-Performance-Mobile-App"
                            style={{ fontSize: "12px", color: "#000000" }}
                          >
                            NAU Fleet Performance
                            <FontAwesomeIcon
                              icon={faArrowAltCircleRight}
                              className="float-end"
                            />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-5 float-end">
                    <div className="col-12 p-r-0">
                      <div className="Maritime_Solutions">
                        <img
                          src="/Images/Bi/VC-Card_Mockup.png"
                          alt="Products"
                          className="img-fluid m-t-120"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Row
                  className="m-l-0 m-r-0 float-start"
                  style={{ width: "100%" }}
                >
                  <Col xs={12} className="p-l-0 p-r-0">
                    <Row className="m-l-0 m-r-0">
                      <Col xs={6} className="p-l-0 p-r-0">
                        <div
                          className="Maritime_Solutions">
                          <img
                            src="/Images/Mockups/InspectNau-Top.png"
                            alt="Orion Chart"
                            className="img-fluid"
                          />
                        </div>
                      </Col>

                      <Col
                        xs={6}
                        className="p-l-0 p-r-0" >
                        <div
                          className="Maritime_Solutions" >
                          <img
                            src="/Images/BiMockup2.png"
                            alt="Products"
                            className="img-fluid"
                            style={{filter: "drop-shadow(2px 9px 5px #000000)" }}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </section>
           
          </div>
        </div>
        <Row className="m-l-0 m-r-0" style={{minHeight:"64px",width:"100%"}}>
              <Col
                xs={12}
                className="p-l-0 p-r-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #d2e6e7 75%, #aecdd8)",
                }}
              >
                <Row className="m-l-0 m-r-0" style={{position:"relative"}}>
                  <Col xs={9} className="p-l-0 p-r-0">
                  <div style={{position:"absolute", left:"10%",width:"83%", top:"10%"}}>
                    <div className="label_Connect">Connect With Us :-</div>

                    <p className="p-t-10 p-b-5 label_address">
                      Unit no 116, First Floor, Suncity Business Tower,
                      Sector-54, Golf Course Road, Gurugram, Haryana, India –
                      122002
                    </p>
                    </div>
                  </Col>
                  <Col xs={3} className="p-l-0 p-r-0">
                    <span className="float-end">
                      <img
                        src="/Images/Bi/digital-globe.jpg"
                        alt="Orion Chart"
                        className="img-fluid"
                      />
                    </span>
                  </Col>
                </Row>
              </Col>
            </Row>
      </div>
    </Container>
  );
}

export default MMKL;
