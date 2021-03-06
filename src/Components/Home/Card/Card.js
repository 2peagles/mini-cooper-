import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import readyrally from '../../../Images/readyrally.webp';
import certified from '../../../Images/certified.webp';
import miniacc from '../../../Images/miniacc.webp';
import './Card.css';

export const Card = () => {
  return (
    <section className='cardsection'>
    <Container fluid='xs'>
        <Row xs={1} md={3}>
        <Col sm classname='card-container'>
          <Col className='cardcontentcontainer'>
        <Row><img src={readyrally} alt='/'/></Row>
          <Row><p className='subheadingcard'> READY. SET. RALLY.</p></Row>
          <hr></hr>
            <Row><h2 className='cardtitle'>COMPLIMENTARY MINI MULTI-POINT INSPECTION.</h2></Row>
            <Row><p lassName='cardp'>Before you hit the streets for MINI TAKES THE STATES this summer make sure your MINI is ready to rally. Now through July 9, 2022 receive a complimentary multi-point inspection at participating MINI Dealers. MINI Trained Technicians will check everything from under the car to under the hood to your MINI’s exterior—and even perform a road test.</p></Row>
          <button className=' btn-black'>learn more </button>
            </Col>
          </Col>
        <Col className='card-container' >
            <Col className='cardcontentcontainer'>
          <Row><img src={certified} alt='/' /></Row>
            <Row><p className='subheadingcard'> MINI CERTIFIED PRE-OWNED</p></Row>
            <hr></hr>
            <Row><h2 className='cardtitle'>DRIVE TO YOUR HEART'S CONTENT.</h2></Row>
            <Row><p className='cardp'>With the confidence of a comprehensive CPO Protection Plan, 24/7 Roadside Assistance, and all the distinctive design and legendary fun of a new MINI, the road is yours for the taking.</p></Row>
              <button className=' btn-black'>learn more </button>  
              <button className=' btn-red'>learn more </button>
            </Col>
        </Col>
        <Col className='card-container'>
            <Col className='cardcontentcontainer'>
          <Row><img src={miniacc} alt='/' /></Row>
            <Row><p className='subheadingcard'> MINI ACCESSORIES</p></Row>
            <hr></hr>
            <Row><h2 className='cardtitle'>MINI TECHNOLOGY</h2></Row>
            <Row><p className='cardp'>Taking connectivity to the next level - featuring USB chargers, adapters, and the best-selling MINI LED Door Projectors.</p></Row>
            <button className=' btn-black'>learn more </button>
            </Col>
        </Col>
      </Row>
    </Container>
    </section>
  )
}
