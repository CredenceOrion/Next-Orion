
import { Row, Container, Col } from "react-bootstrap";
export default function TypeApproved() {
    const TypeAppr = [{
        id: 1,
        TI: "/Images/TypeApp/DNV-certificate-NAU-1-scaled.jpg"
    },
    {
        id: 2,
        TI: "/Images/TypeApp/DNV-certificate-NAU-2-scaled.jpg"
    },
    {
        id: 3,
        TI: "/Images/TypeApp/SFA-A1182688-THKN-1-scaled.jpg"
    },
    {
        id: 4,
        TI: "/Images/TypeApp/SFA-A1182688-THKN-2-scaled.jpg"
    },
    {
        id: 5,
        TI: "/Images/TypeApp/SFA-A1182688-THKN-3-scaled.jpg"
    },
    {
        id: 6,
        TI: "/Images/TypeApp/SFA-A1182688-THKN-4-scaled.jpg"
    },
    {
        id: 7,
        TI: "/Images/TypeApp/SFA-A1182688-THKN-5-scaled.jpg"
    },
    {
        id: 8,
        TI: "/Images/TypeApp/SFA-A1182688-THKN-6-scaled.jpg"
    },
    {
        id: 9,
        TI: "/Images/TypeApp/SFA-A1182688-THKN-7-scaled.jpg"
    },
    {
        id: 10,
        TI: "/Images/TypeApp/SFA-A1182688-THKN-8-1-scaled.jpg"
    },
    {
        id: 11,
        TI: "/Images/TypeApp/SFA-A1182688-THKN-9-scaled.jpg"
    },
    {
        id: 12,
        TI: "/Images/TypeApp/Approval-DNV-GL-Orion-1.jpg"
    }, {
        id: 13,
        TI: "/Images/TypeApp/Approval-DNV-GL-Orion-2.jpg"
    }]
    return (
        <>


            <Row className="m-r-0 m-l-0">
                <Container className="m-t-100">
                    <Row>
                        <Col>
                            <h1>
                                Certifications
                            </h1>
                        </Col>
                    </Row>
                    <Row className="m-t-50">
                        {
                            TypeAppr.map(data => (
                                <Col key={data.id} xs={12} md={6} className="p-l-5 p-r-5 TypeApproved">
                                    <img alt="" src={data.TI} className="img-fluid m-b-40" />
                                </Col>
                            ))
                        }
                    </Row>
                </Container>
            </Row>
        </>
    )
}