"use client";
import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Link from 'next/link';
//scroll change effect
function HeaderComponent() {
  const [isMounted, setIsMounted] = useState(false);
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <Navbar
        expanded={expanded}
        expand="lg"
        className="fixed-top small-navbar"
        bg="light"
        variant="light"
        collapseOnSelect
      >
        <Container fluid>
          <Navbar.Brand onClick={() => setExpanded(false)} href="/" as={Link} prefetch={true}>
            
              <img
                src="/Images/OrionLogo.svg"
                alt="Orion Marine Concepts Logo"
              />
           
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => setExpanded(!expanded)} />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <NavDropdown
                title="Our Concepts"
                id="navbarScrollingDropdown"
                className="nav-link"
              >
                <NavDropdown.Item onClick={() => setExpanded(false)} href="/NauServer" prefetch={true} as={Link} className="nav-link">
                  
                    <img
                      src="/Images/Nau/NauLogo.png"
                      alt="NAU 2.1"
                      className="HeaderIcons"
                    />
                    <span className="HeaderText">NAU 2.1</span>
                 
                </NavDropdown.Item>
               

                <NavDropdown
                  title={
                    <span>
                      <img
                         src="/Images/CommonImages/NauApp.png"
                        alt="Fleet Performance App"
                        className="HeaderIcons"
                        style={{ marginRight: "4px" }}
                      />
                      <span className="HeaderText"> Orion Apps </span>
                    </span>
                  }
                  id="navbarScrollingDropdown"
                  className="nav-link OrionAppPlatform"
                >
                  <NavDropdown.Item
                    onClick={() => setExpanded(false)}
                    className="nav-link"
                    href="/Inspect-Nau-App" as={Link} prefetch={true}
                  >
                    <img
                       src="/Images/inspect-nau-180.png"
                      alt="Inspect Nau App"
                      className="HeaderIcons"
                    />{" "}
                    <span className="HeaderText"> Inspect Nau App</span>
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    onClick={() => setExpanded(false)}
                    className="nav-link"
                    href="/products/Fleet-Performance-Mobile-App" as={Link} prefetch={true}
                  >
                    <img
                       src="/Images/CommonImages/FleetPerformanceApp_Icon.png"
                      alt="Fleet Performance App"
                      className="HeaderIcons"
                    />{" "}
                    <span className="HeaderText"> Fleet Performance App </span>
                  </NavDropdown.Item>
                </NavDropdown>

              </NavDropdown>



              <NavDropdown
                title="Our Services"
                id="navbarScrollingDropdown"
                className="nav-link"
              >
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/products/fleet-management" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/FleetManagementIcon.png"
                    alt="Fleet Management"
                    className="HeaderIcons"
                  />{" "}
                  <span className="HeaderText">Fleet Management</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/products/Crew-Management-System" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/CrewIcon.png"
                    alt="Crew Management"
                    className="HeaderIcons"
                  />{" "}
                  <span className="HeaderText"> Crew Management </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/products/QHSSE" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/QhsseIcon.png"
                    alt="QHSSE"
                    className="HeaderIcons"
                  />{" "}
                  <span className="HeaderText"> QHSSE </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/products/Planned-Maintenance-System" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/PlannedMaintenance.png"
                    alt="Planned Maintenance"
                    className="HeaderIcons"
                  />{" "}
                  <span className="HeaderText"> Planned Maintenance</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/products/Vessel-Certificate-Management-System" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/Vcms.png"
                    alt="Certificate Management System"
                    className="HeaderIcons"
                  />{" "}
                  <span className="HeaderText">
                    {" "}
                    Certificate Management System{" "}
                  </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/products/supply-Chain" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/invn.png"
                    alt="Supply Chain Management"
                    className="HeaderIcons"
                  />{" "}
                  <span className="HeaderText"> Supply Chain Management</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/products/Electronic-Document-Management-System" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/DmsIcon.png"
                    alt="Safety Management System"
                    className="HeaderIcons"
                  />{" "}
                  <span className="HeaderText"> Safety Management System</span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/products/ECloud" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/eCloudIcon.png"
                    alt="E Cloud"
                    className="HeaderIcons"
                  />{" "}
                  <span className="HeaderText">E Cloud</span>
                </NavDropdown.Item>

                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/products/Orion-Bi" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/OrionBiIcon.png"
                    alt="Orion Business Intelligence"
                    className="HeaderIcons"
                  />{" "}
                  <span className="HeaderText">
                    {" "}
                    Orion Business Intelligence{" "}
                  </span>
                </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown
                title="Our Company"
                id="navbarScrollingDropdown"
                className="nav-link"
              >
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/OurTeam" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/OurPeople.png"
                    alt="Our People"
                    className="HeaderIcons"
                  />{" "}
                  <span className="HeaderText"> Our People </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/about" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/AboutUs.png"
                    alt="About Us"
                    className="HeaderIcons"
                  />
                  <span className="HeaderText"> About Us </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/type-approved" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/TypeApproved.png"
                    alt="Type Approved"
                    className="HeaderIcons"
                  />
                  <span className="HeaderText"> Type Approved </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="http://policy.orionmarineconcepts.com" as={Link}
                >
                  <img
                     src="/Images/CommonImages/CompanyPolicy.png"
                    alt="Company Policies"
                    className="HeaderIcons"
                  />
                  <span className="HeaderText"> Company Policies </span>
                </NavDropdown.Item>
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/privacy-policy" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/PrivacyPolicyLogo.png"
                    alt="Privacy Policy"
                    className="HeaderIcons"
                  />
                  <span className="HeaderText"> Privacy Policy </span>
                </NavDropdown.Item>
              </NavDropdown>


              <NavDropdown
                title="Media"
                id="navbarScrollingDropdown"
                className="nav-link"
              >
                <NavDropdown.Item
                  onClick={() => setExpanded(false)}
                  className="nav-link"
                  href="/news" as={Link} prefetch={true}
                >
                  <img
                     src="/Images/CommonImages/BlogIcon.png"
                    alt="Blog / News"
                    className="HeaderIcons"
                  />{" "}
                  <span className="HeaderText">Blog / News </span>
                </NavDropdown.Item>
              </NavDropdown>


              <Nav.Link
                onClick={() => setExpanded(false)}
                className="nav-link ButtonStl float-right"
                href="/ScheduleDemo" as={Link} prefetch={true}
              >
                Schedule a Demo
              </Nav.Link>


              <Nav.Link
                onClick={() => setExpanded(false)}
                className="nav-link float-right m-t-10"
                href="/contact" as={Link} prefetch={true}
              >
                Contact Us
              </Nav.Link>
              

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderComponent;
