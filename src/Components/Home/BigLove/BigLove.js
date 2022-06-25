import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';
import minipolarbear from '../../../Images/minipolarbear.jpeg'
import './BigLove.css';

export const BigLove = () => {
  return (
  <Container>
        <Row className='p-25'>
        <Col className='biglovetext' xs={{ order: 'last' }} md={{ order: 'first' }}>
            <div className='text'>
          <p className='biglovetitle'>Big love</p>
            <span><h3>your eco-friendly joyride</h3></span>  
              <p className='biglovebody'>Our all-electric all star packs a serious blend of aerodynamic adventure and environmental purpose. #BigLove is our big promise for sustainability as we cruise towards a future that’s more equitable for earth’s ecosystem. The Mini Cooper SE is your one-way ticket to endless fun and eco-friendly endeavors.</p>
             <div className='btngroup'>
              <button className='biglovebtn btn-rn'><a href='/'>reserve now</a></button>
            <button className='biglovebtn btn-lm'><a href='/'>learn more</a></button>
            </div>
          </div>
          </Col>
        <Col xs={{ order: 'first' }} md={{ order: 'last' }}>
            <img src={minipolarbear} alt='cute mini polar bear' className='biglovepolarbear'/>
          </Col>
        </Row>
  </Container>
  )
}
//row has 0 25px paddding
//fix image