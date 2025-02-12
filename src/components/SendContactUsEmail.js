"use client";
import React, { useState, useEffect  } from 'react';
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh} from '@fortawesome/free-solid-svg-icons';

const EmailForm = () => {


    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Contact, setContact] = useState('');
    const [Organisation, setOrganization] = useState('');
    const [Message1, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [sentSuccessfully, setSentSuccessfully] = useState(false);
    const [error, setError] = useState('');
    const [validationErrors, setValidationErrors] = useState({});
    const [captchaValue, setCaptchaValue] = useState('');
    const [captchaInput, setCaptchaInput] = useState('');

    useEffect(() => {
        generateCaptcha();
      }, []);

    const generateCaptcha = () => {
        const captchaChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += captchaChars.charAt(Math.floor(Math.random() * captchaChars.length));
        }
        setCaptchaValue(captcha);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
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
            case 'captchaInput':
                setCaptchaInput(value);
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
        if (!captchaInput) {
            setError('Please enter the CAPTCHA value.');
            return;
        }

        // Validate CAPTCHA
        if (captchaInput.toLowerCase() !== captchaValue.toLowerCase()) {
            setError('CAPTCHA verification failed. Please try again.');
            return;
        }
        setIsSending(true);

        try {
            const requestData = {
                Name,
                Email,
                Contact,
                Organisation,
                Message1
            };
            //console.log('Data sent to server:', requestData);

            const response = await fetch('https://orionwebapi.orionmarineconcepts.com/Api/sending_email/POST', {
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
                setCaptchaValue('');
                setCaptchaInput('');

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
        } else if (Organisation.trim().length > 50) {
            errors.Organisation = 'Organization must be 50 characters or fewer';
        }
        if (Message1.trim().length === 0) {
            errors.Message1 = 'Message is required';
        } else if (Message1.trim().length > 250) {
            errors.Message1 = 'Message must be 250 characters or fewer';
        }
        if (!captchaInput.trim()) {
            errors.captchaInput = 'Captcha is required';
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
                    <Row>
                        <Col xs={12} sm={6} className='mb-3'>

                            <button type="button"  className='btn btn-xs btn-primary float-left captchaRefresh' onClick={generateCaptcha}>
                            <FontAwesomeIcon icon={faRefresh}/> 
                            </button>
                            <input type="text" className='CaptchaInput form-control float-left m-l-10' name="captchaInput" value={captchaInput} onChange={handleChange} placeholder="Enter CAPTCHA" />
                            <div className='font-bold float-left mt-1 m-l-10' style={{backgroundColor:"yellow", padding:"4px 5px",userSelect:"none"}} >
                                {captchaValue}</div>
                                {validationErrors.captchaInput && <div className='float-left' style={{ color: 'red' }}>{validationErrors.captchaInput}</div>}
                        </Col>
                        <Col xs={12} sm={6}>
                            <Button type="submit" className='float-right'>{isSending ? 'Sending...' : 'Contact Us'}</Button>
                        </Col>
                    </Row>

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


export default EmailForm;

