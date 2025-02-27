import React from "react";
import productsData from "@/components/BlogComponents/productsData";
import { Container, Row, Col } from "react-bootstrap";

// ✅ Function to generate static paths at build time
export function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.dataHead.replace(/\s+/g, "-").toLowerCase(), // Ensure slug format
  }));
}

// ✅ Dynamic page component for each news article
export default function ProductDetail({ params }) {
  const { slug } = params;

  // ✅ Find the matching product
  const thisProduct = productsData.find(
    (prod) => prod.dataHead.replace(/\s+/g, "-").toLowerCase() === slug
  );

  if (!thisProduct) {
    return <h2>Product Not Found!</h2>;
  }

  return (
    <Container>
    <Row className="m-r-0 m-l-0 m-t-100">
      <h3 className="font-bold m-b-50">{thisProduct.dataHead}</h3>
      <Col xs={12} md={12} className="p-l-0 p-r-0 m-b-20">
        <img src={thisProduct.img} alt={thisProduct.dataDate} className="img-fluid BlogProd" />
      </Col>
      <Col xs={12} md={12} className="p-l-0 p-r-0 m-b-20 text-left">
        <Container>
          <strong className="text-start" style={{ color: "#009688" }}>
            Posted at {thisProduct.dataDate}
          </strong>
          <p className="text-start" style={{ whiteSpace: "pre-line" }}>
            {thisProduct.data}
          </p>
        </Container>
      </Col>
    </Row>
  </Container>
  );
}
