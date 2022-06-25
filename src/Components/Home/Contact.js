import React from 'react';
import { Container, Row, Col, Form} from 'react-bootstrap';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { ImInstagram, ImYoutube2 } from 'react-icons/im';
import './Contact.css';

export const Contact = () => {
  return (
    <section className='form'>
    <Container fluid >
      <Row className='formrow'>
        <Col>
        <div className='formcontent'>
        <h1 className='contactheading'>stay in the loop</h1>
        <p>Join our email list to receive MINI updates, news, offers and more. And don't worry, we won't share your information with anyone else.</p>   
      <Form>
       <Row className='formrow'>
          <Col className='form-container'>
              <Form.Group className="mb-3 " controlId="formBasicName">
              <Form.Label className='label'>First Name </Form.Label>
          <Form.Control type="name" className='input' />
        </Form.Group>
        </Col>
              <Col className='form-container'>
              <Form.Group className="mb-3  " controlId="formBasicName">
          <Form.Label className='label'>Last Name</Form.Label>
                      <Form.Control type="name" className='input' />
        </Form.Group>
        </Col>
            </Row>
                <Row className='formrow'>
              <Col className='form-container'>
              <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className='label'>Email</Form.Label>
                      <Form.Control type="email" className='input' />
        </Form.Group>
              </Col>
              <Col>
              <Form.Group className="mb-3 d-inline-block" controlId="formBasicNumber">
              <Form.Label className='label'>Zip Code</Form.Label>
                      <Form.Control type="number" className='input' />
        </Form.Group>
            </Col>
            </Row>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox"  className='label checkbox' label="By submitting this form I understand that MINI USA, a division of BMW of North America, LLC may contact me with offers or information about their products and service in accordance with the MINI Privacy Policy on https://www.miniusa.com/footer-navigation/privacy-legal.html." />
        </Form.Group>  
            <button className='btn btn-red' type='sumbit'>Sumbit</button>
      </Form>
      </div>
        </Col>
      <Col className='contact-icons'>
      <ul>
        <li> 
          <FaFacebookF  className='contact-icon'/> 
          </li>
        <li> 
          <ImInstagram className='contact-icon' />
           </li>
        <li>
           <FaTwitter className='contact-icon'/> 
           </li>
        <li> 
          <ImYoutube2 className='contact-icon' />
          </li>
      </ul>
        </Col>
      </Row>
    </Container>
</section>
  )
}
