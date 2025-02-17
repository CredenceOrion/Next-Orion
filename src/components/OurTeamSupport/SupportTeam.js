import productsData from './SupportTeamData'
import {Col } from 'react-bootstrap'


export default function Products() {

  const products = productsData.map((product, index) => (
    <Col xs={12} md={2} key={product.id || index}>
                                <div className="wpr-member-media">
                                    <img src={product.img} alt={product.Sname} className="img-fluid" />
                                </div>
                                <div className="wpr-member-content">
                                    <h3 className="wpr-member-name">{product.Sname}</h3>
                                    <div className="wpr-member-job">{product.Sdesignation}</div>
                                    <div className="wpr-member-divider"></div>
                                   
                                </div>
                            </Col>
));

  return <>{products}</> ;
};


