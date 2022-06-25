import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import fourdoor from '../../../Images/fourdoor.jpg';
import johnworks from '../../../Images/johnworks.jpeg';
import convertible from '../../../Images/convertible.jpeg';
import './Models.css';

export const Models = () => {
  return (
    <div className='modelcontainer'>
      <Container className='container'>
      <Row>
        <Col >
         <h1 > - Models - </h1> 
         </Col>
         </Row>
      <Row>
        <Col>
            <a href='/'>  <img src={fourdoor} alt='Grey Two Door Mini Cooper' className='home-model-img' /> </a>
        <h3>Hardtop 2 door</h3>
        </Col>
        <Col>
          <a href='/'>  <img src={fourdoor} alt='Grey Two Door Mini Cooper' className='home-model-img' /></a>
          <h3>Hardtop 4 door</h3>
        </Col>
        <Col>
          <a href='/'><img src={fourdoor} alt='Grey Two Door Mini Cooper' className='home-model-img'/></a>
          <h3>countryman</h3>
          </Col>
      </Row>
      <Row>
        <Col>
          <a href='/'>  <img src={fourdoor} alt='Grey Two Door Mini Cooper' className='home-model-img'/></a>
          <h3>clubman</h3>
        </Col>
        <Col>
          <a href='/'>   <img src={convertible} alt='Grey Two Door Mini Cooper' className='home-model-img' /></a>
          <h3>convertible</h3>
        </Col>
        <Col>
         <a href='/'> <img src={johnworks} alt='Grey Two Door Mini Cooper' className='home-model-img' /></a>
          <h3> mini john cooper works</h3>
        </Col>
      </Row>
    </Container>
    </div>
  )
}
