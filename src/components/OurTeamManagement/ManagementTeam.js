import products from './ManagementTeamData';
import { Col } from 'react-bootstrap';
export default function Products() {
 // console.log(products); // Log the products data to ensure it's correct
  const productsList = products.map((product, index) => (
    <Col xs={12} md={2} key={product.id || index}> {/* Use product.id or index */}
      <div className="wpr-member-media">
        <img src={product.img} alt={product.Mname} className="img-fluid" />
      </div>
      <div className="wpr-member-content">
        <h3 className="wpr-member-name">{product.Mname}</h3>
        <div className="wpr-member-job">{product.designation}</div>
        <div className="wpr-member-divider"></div>
      </div>
    </Col>
  ));

  return <>{productsList}</>; // Return the list of items
}
