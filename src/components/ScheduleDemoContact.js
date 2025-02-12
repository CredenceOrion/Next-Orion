import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from "react-bootstrap";
import React, { useState } from 'react';

const ContactForm = () => {

  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Contact, setContact] = useState('');
  const [Organisation, setOrganization] = useState('');
  const [Message1, setMessage] = useState('');
  const [selectAllProducts, setSelectAllProducts] = useState(false); // State for "Select All Products" checkbox
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isSending, setIsSending] = useState(false);
  const [sentSuccessfully, setSentSuccessfully] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    switch (name) {
      case 'Name':
        setName(value);
        break;
      case 'Email':
        setEmail(value);
        break;
      case 'Contact':
        setContact(value);
        break;
      case 'Organisation':
        setOrganization(value);
        break;
      case 'Message1':
        setMessage(value);
        break;
      case 'product':
        if (checked) {
          setSelectedProducts([...selectedProducts, value]);
        } else {
          setSelectedProducts(selectedProducts.filter(product => product !== value));
          setSelectAllProducts(false); // Uncheck "Select All Products" if any product is unchecked
        }
        break;
      case 'selectAllProducts':
        setSelectAllProducts(checked);
        if (checked) {
          setSelectedProducts([
            'Fleet Performance System',
            'E-Document Management System',
            'HSSEQ',
            'Planned Maintenance System',
            'Inventory & Requisition',
            'Crew Management System',
            'Vessel Certificates',
            'Defects Reporting',
            'Risk Assessment'
          ]);
        } else {
          setSelectedProducts([]);
        }
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateInputs();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setError('');
      setSentSuccessfully(false);
      return;
    }
    // Check if at least one checkbox is selected
    if (selectedProducts.length === 0) {
      setError('Please select at least one product');
      return;
    }
    setIsSending(true);

    try {
      const requestData = {
        Name,
        Email,
        Contact,
        Organisation,
        Message1,
        selectedProducts,
      };
      //console.log('Data sent to server:', requestData);

      const response = await fetch('https://orionwebapi.orionmarineconcepts.com/api/Schedule_Demo/Post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        // const data = await response.json();
        // console.log('Response from server:', data);
        setSentSuccessfully(true);
        setError('');
        // Clear input values and checkboxes after successful submission
        setName('');
        setEmail('');
        setContact('');
        setOrganization('');
        setMessage('');
        setSelectedProducts([]);
        setSelectAllProducts(false);
      } else {

        const data = await response.json();
        //console.error('Error from server:', data);
        setError(data && data.message1 ? data.message1 : 'Unknown error occurred.');
      }
    } catch (error) {
      setError('An error occurred while sending the email. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  const validateInputs = () => {
    const errors = {};
    if (!Name.trim()) {
      errors.Name = 'Name is required';
    }
    if (!Email.trim()) {
      errors.Email = 'Email is required';
    } else if (!isValidEmail(Email)) {
      errors.Email = 'Invalid email format';
    }
    if (!Contact.trim()) {
      errors.Contact = 'Contact number is required';
    } else if (!isValidContact(Contact)) {
      errors.Contact = 'Invalid contact number';
    }
    if (!Organisation.trim()) {
      errors.Organisation = 'Organization is required';
    }else if(Organisation.trim().length > 50) {
        errors.Organisation = 'Organization must be 50 characters or fewer';
    }
    if (Message1.trim().length === 0) {
      errors.Message1 = 'Message is required';
    } else if (Message1.trim().length > 250) {
      errors.Message1 = 'Message must be 250 characters or fewer';
    }
    // Add more validation rules as needed

    return errors;
  };

  const isValidEmail = (Email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(Email);
  };

  const isValidContact = (contact) => {
    const contactRegex = /^\d{10}$/;
    return contactRegex.test(contact);
  };
  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (validationErrors[name]) {
      // Clear validation error if the input is correct onBlur
      const errors = { ...validationErrors };
      const validators = {
        Name: () => value.trim() !== '',
        Email: () => isValidEmail(value),
        Contact: () => isValidContact(value),
        Organisation: () => value.trim().length <= 50,
        Message1: () => value.trim().length <= 250,
        // Add more validation rules as needed
      };
      if (validators[name]() && validationErrors[name]) {
        delete errors[name];
        setValidationErrors(errors);
      }
    }
  };
  return (
    <>
      <Row>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label className='font-bold'>Full Name</Form.Label>
              <Form.Control name="Name" value={Name} onChange={handleChange} onBlur={handleBlur} />
              {validationErrors.Name && <div style={{ color: 'red' }}>{validationErrors.Name}</div>}
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label className='font-bold'>Email</Form.Label>
              <Form.Control name="Email" value={Email} onChange={handleChange} onBlur={handleBlur} />
              {validationErrors.Email && <div style={{ color: 'red' }}>{validationErrors.Email}</div>}

            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6">
              <Form.Label className='font-bold'>Contact no.</Form.Label>
              <Form.Control name="Contact" value={Contact} onChange={handleChange} onBlur={handleBlur} />
              {validationErrors.Contact && <div style={{ color: 'red' }}>{validationErrors.Contact}</div>}
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label className='font-bold'>Organisation</Form.Label>
              <Form.Control type="text" name="Organisation" value={Organisation} onChange={handleChange} onBlur={handleBlur} />
              {validationErrors.Organisation && <div style={{ color: 'red' }}>{validationErrors.Organisation}</div>}
            </Form.Group>


          </Row>
          <Row className='mb-3'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className='font-bold'>Your Message</Form.Label>
              <Form.Control as="textarea" rows={3} name="Message1" value={Message1} onChange={handleChange} onBlur={handleBlur} maxLength={250} />
              {validationErrors.Message1 && <div style={{ color: 'red' }}>{validationErrors.Message1}</div>}
            </Form.Group>
          </Row>
          <Row className='mb-3'>
            <h2 className='fs-18 font-bold mb-3'>
              Please select the modules you require
            </h2>
            <Col md={6} xs={12} className='mb-3'>
              <Form.Check inline label="Fleet Performance System" id="fleetPerformance" name="product" value="Fleet Performance System" checked={selectedProducts.includes("Fleet Performance System")} onChange={handleChange} />
            </Col>
            <Col md={6} xs={12} className='mb-3'>
              <Form.Check inline label="E - Document Management System" id="documentManagement" name="product" value="E-Document Management System" checked={selectedProducts.includes("E-Document Management System")} onChange={handleChange} />
            </Col>
            <Col md={6} xs={12} className='mb-3'>
              <Form.Check inline label="HSSEQ" id="HSSEQ" name="product" value="HSSEQ" checked={selectedProducts.includes("HSSEQ")} onChange={handleChange} />
            </Col>
            <Col md={6} xs={12} className='mb-3'>
              <Form.Check inline label="Planned Maintenance System" id="PlannedMaintenanceSystem" name="product" value="Planned Maintenance System" checked={selectedProducts.includes("Planned Maintenance System")} onChange={handleChange} />
            </Col>
            <Col md={6} xs={12} className='mb-3'>
              <Form.Check inline label="Inventory & Requisition" id="InventoryRequisition" name="product" value="Inventory & Requisition" checked={selectedProducts.includes("Inventory & Requisition")} onChange={handleChange} />
            </Col>
            <Col md={6} xs={12} className='mb-3'>
              <Form.Check inline label="Crew Management System" id="CrewManagementSystem" name="product" value="Crew Management System" checked={selectedProducts.includes("Crew Management System")} onChange={handleChange} />
            </Col>
            <Col md={6} xs={12} className='mb-3'>
              <Form.Check inline label="Vessel Certificates" id="VesselCertificates" name="product" value="Vessel Certificates" checked={selectedProducts.includes("Vessel Certificates")} onChange={handleChange} />
            </Col>
            <Col md={6} xs={12} className='mb-3'>
              <Form.Check inline label="Defects Reporting" id="DefectsReporting" name="product" value="Defects Reporting" checked={selectedProducts.includes("Defects Reporting")} onChange={handleChange} />
            </Col>
            <Col md={6} xs={12} className='mb-3'>
              <Form.Check inline label="Risk Assessment" id="RiskAssessment" name="product" value="Risk Assessment" checked={selectedProducts.includes("Risk Assessment")} onChange={handleChange} />
            </Col>
            <Col md={6} xs={12} className='mb-3'>
              <Form.Check inline label="Select All Products" id="selectAllProducts" name="selectAllProducts" value="Risk Assessment" checked={selectAllProducts} onChange={handleChange} />
            </Col>

          </Row>
          <Button type="submit" className='float-right'>{isSending ? 'Sending...' : 'Contact Us'}</Button>
        </Form>
      </Row>
      <Row>
        <Col xs={12} className='mt-3'>
          {error && !sentSuccessfully && <div style={{ color: 'red' }}>{error}</div>}
          {sentSuccessfully && !error && <div style={{ backgroundColor: 'green', color: "white", textAlign: "center" }}>We are grateful for your communication, and our executive will get back to you soon. </div>}
        </Col>
      </Row>
    </>
  );
};


export default ContactForm;

