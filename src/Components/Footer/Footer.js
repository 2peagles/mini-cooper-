import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export const Footer = () => {
  return (
    <Container fluid>
      <Row md={4}>
        <Col classname='footer-container'>
        <ul className='footer'>
            <h1 className='footertitle'>Models</h1>
            <li><a href='/'>electric models | mini usa</a></li>
            <li> <a href='/'>mini countryman</a></li>
            <li><a href='/'>mini hardtop 2 door</a></li>
              <li> <a href='/'>mini electric</a></li>
            <li> <a href='/'>mini convertible</a></li>
            <li><a href='/'>mini hardtop 4 door</a></li>
            <li><a href='/'>mini countryman hybrid</a></li>
           <li> <a href='/'>mini clubman</a></li>
          <li> <a href='/'>mini john cooper works</a></li>
        <li> <a href='/'>all models</a></li>
        </ul>
        </Col>
        <Col classname='footer-container'>
          <ul className='footer'>
            <h1 className='footertitle'> Why Mini</h1>
            <li><a href='/'>premium quality & value</a></li>
            <li><a href='/'>covered maintenance</a></li>
            <li><a href='/'> for the drive</a></li>
            <li> <a href='/'>surprising size</a></li>
            <li><a href='/'>iconic design</a></li>
            <li><a href='/'> driver technology</a></li>
            <li><a href='/'>exceptional safety</a></li>
            <li><a href='/'>mini yours</a></li>
            <li><a href='/'>mini family</a></li>
            <li><a href='/'>mini driving experience</a></li>
          <li><a href='/'>60 years of motoring</a></li>
          </ul>
        </Col>
        <Col classname='footer-container'>
          <ul>
            <h1 className='footertitle'>shopping</h1>
            <li><a href='/'>build a new mini</a></li>
            <li><a href='/'>certified pre-owned</a></li>
            <li><a href='/'>u.s diplomatice sale program</a></li>
           <li><a href='/'> mini mobility program</a></li>
            <li><a href='/'>special offers</a></li>
            <li><a href='/'>find a dealer</a></li>
            <li><a href='/'>achedule a test drive</a></li>
          <li><a href='/'>mini pre-owned vehicles</a> </li>
            <li><a href='/'>military programs</a></li>
            <li> <a href='/'>estimate a payment</a></li>
          </ul>
        </Col>
        <Col classname='footer-container'>
          <ul>
            <h1 className='footertitle'>legal</h1>
            <li><a href='/'>safety and emission recalls</a> </li>
            <li><a href='/'> contact us</a></li>
            <li><a href='/'>mini accessibility statement</a></li>
            <li><a href='/'>faq</a></li>
            <li><a href='/'> privacy & legal</a></li>
            <li><a href='/'>do not sell my personal information</a></li>
          </ul>
          <ul>
            <h1 className='footertitle'>careers</h1>
            <li><a href='/'>mini careers</a></li>
            <li><a href='/'>mini dealer careers</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
  )
}
