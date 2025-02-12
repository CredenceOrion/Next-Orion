
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";


function FooterComponent() {
  return (
    <>
      <footer className="text-center p-t-10 text-lg-start bg-dark text-white">
        <section className="">
          <div className="container text-center text-md-start pt-1">
            <div className="row mt-3">
              <Col xs={12} md={4} lg={4} className="mb-3">
                <h6 className="text-uppercase mb-4"> Contact Us </h6>
                Orion Marine Concepts
                <p>
                  {" "}
                  Unit no 116, First Floor, Suncity Business Tower, Sector-54,{" "}
                  <br />
                  Golf Course Road, Gurugram, Haryana, India – 122002
                  <br />
                  Email :
                  <a
                    href="mailto:contact@orionmarineconcepts.com"
                    style={{ color: " white" }}
                  >
                    {" "}
                    contact@orionmarineconcepts.com
                  </a>
                  <br />
                  Tel 01 : +91 124-403 6622
                  <br />
                  Tel 02 : +91 124-420 9280
                  <br />
                </p>
                <p>
                  <a
                    href="https://x.com/OrionMarineIn"
                    target="_blank"
                    style={{ color: "white" }}
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faXTwitter} width={25} />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/orionmarineconcepts"
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "white" }}
                    className=" m-l-30"
                  >
                    <FontAwesomeIcon icon={faLinkedin} width={25} />
                  </a>
                </p>
              </Col>

              <Col xs={12} md={3} lg={3} className="mb-3">
                <h6 className="text-uppercase mb-4">Quick Links</h6>
                <p className="m-b-7">
                  <Link className="nav-link text-white" href="/">
                    Home
                  </Link>
                </p>
                <p className="m-b-7">
                  <Link className="nav-link text-white" href="/about">
                    About Us
                  </Link>
                </p>
                <p className="m-b-7">
                  <Link className="nav-link text-white" href="/contact">
                    Contact Us
                  </Link>
                </p>
                <p className="m-b-7">
                  <Link
                    className="nav-link text-white"
                    href="http://policy.orionmarineconcepts.com"
                  >
                    Company Policies
                  </Link>
                </p>
                <p className="m-b-7">
                  <Link className="nav-link text-white" href="/privacy-policy">
                    Privacy Policy
                  </Link>
                </p>
                <p>
                  <Link href="/ScheduleDemo" className="nav-link text-white">
                    Schedule a Demo
                  </Link>
                </p>
              </Col>

              <Col xs={12} md={5} lg={5} className="mb-3">
                <h4 className="text-uppercase mb-4">
                  {" "}
                  Where smooth seas meet smart operations{" "}
                </h4>
                <Row>
                  <Col xs={12}>
                    <img
                      src="/Images/ccl-logo.png"
                      className="img-fluid footerCertificate"
                      alt="ccl"
                    />
                    <img
                      src="/Images/jas-iso-logo.png"
                      className="img-fluid footerCertificate"
                      alt="Jas Certification"
                    />
                    <img
                      src="/Images/IAF-logo.png"
                      className="img-fluid footerCertificate IAFCeritifation"
                      style={{ width: "85px" }}
                      alt="IAF Ceritifation"
                    />
                    <img
                      src="/Images/ccl-iso-27001.png"
                      className="img-fluid footerCertificate IAFCeritifation"
                      style={{ width: "120px" }}
                      alt="ccl iso certified"
                    />
                    <img
                      src="/Images/DNV-Logo.png"
                      className="img-fluid footerCertificate IAFCeritifation"
                      style={{ width: "100px" }}
                      alt="ccl iso certified"
                    />
                  </Col>
                </Row>
              </Col>
            </div>
          </div>
        </section>
        <div className="text-center p-3 DarkBg">© Copyright Orion Group</div>
      </footer>
    </>
  );
}

export default FooterComponent;
