import React from "react";
import productsData from "../../components/BlogComponents/productsData";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

const Products = () => {
  const products = productsData.map((product) => (
    <Col xs={12} md={4} key={product.id}>
      <Col className="p-r-5 p-l-5">
        <Row className="text-start row mt-3 mb-3 card p-b-15 p-t-15">
          <Col xs={12} className="m-b-20">
            <img src={product.blogImg} alt={product.img} className="img-fluid BlogIm" />
          </Col>
          <Col xs={12}>
            <h5 className="font-bold">
              {product.dataHead.length > 37
                ? `${product.dataHead.substring(0, 35)}...`
                : product.dataHead}
            </h5>
            <p style={{ color: "#9d9d9d" }}>Posted at {product.dataDate}</p>
            <p>
              {product.data.length > 150
                ? `${product.data.substring(0, 150)}...`
                : product.data}
            </p>
            <Link
              className="btn-sm btn btn-success"
              href={`/news/${product.dataHead.replace(/\s/g, "-").toLowerCase()}`}
            >
              Read More
            </Link>
          </Col>
        </Row>
      </Col>
    </Col>
  ));

  return (
    <>
   
         <Row className='m-l-0 m-r-0 p-l-0 p-r-0'>
                <Container fluid className="p-l-0 p-r-0 backgroundTtachment" style={{ backgroundImage: `url(/Images/Blog.jpg)` }}>
                    <Row className='m-l-0 m-r-0 text-center motion-container'>
                        <Col xs={12}>
                                <h1 style={{ color: "#055160", fontSize: "4rem", fontWeight: "600", padding: "15% 1% 1% 1%" }}>BLOG / NEWS</h1>
                                <h4 style={{ color: "#055160", fontSize: "2rem", fontWeight: "500", padding: "1% 1% 2% 1%" }}>Stay Informed with the Latest Updates</h4>
                        </Col>
                    </Row>
                </Container>

        </Row>
         <Container className="mt-5 mb-5">
      <Row gap={4}>{products}</Row>
    </Container>
    </>
  );
};

export default Products;
