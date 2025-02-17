import React from "react";
import productsData from './DevsTeamData'
import { Col } from 'react-bootstrap'


const Products = () => {

  const products = productsData.map((product, index) => (
<Col xs={12} md={2} key={product.id || index}>
                                <div className="wpr-member-media">
                                    <img src={product.img} alt={product.Dname} className="img-fluid" />
                                </div>
                                <div className="wpr-member-content">
                                    <h3 className="wpr-member-name">{product.Dname}</h3>
                                    <div className="wpr-member-job">{product.Ddesignation}</div>
                                    <div className="wpr-member-divider"></div>
                                  
                                </div>
                            </Col>

));

  return <>{products}</>;
};

export default Products;
