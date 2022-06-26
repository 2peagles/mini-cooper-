import React from 'react';
import { Container, Row, Col, Dropdown} from 'react-bootstrap';
import { BsPlus } from 'react-icons/bs'
// import { AiOutlineMinus } from 'react-icons/ai';
import './Footer.css';

export const Footer = () => {
  return (
    <>
    <Container fluid className='footer-container'>
      <Row md={4}>
        <Col >
        <ul className='footer'>
            <h1 className='footertitle'>Models</h1>
            <span><hr></hr></span>
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
            <span><hr></hr></span>
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
            <span><hr></hr></span>
            <li><a href='/'>build a new mini</a></li>
            <li><a href='/'>certified pre-owned</a></li>
            <li><a href='/'>u.s diplomatice sale program</a></li>
           <li><a href='/'> mini mobility program</a></li>
            <li><a href='/'>special offers</a></li>
            <li><a href='/'>find a dealer</a></li>
            <li><a href='/'>schedule a test drive</a></li>
          <li><a href='/'>mini pre-owned vehicles</a> </li>
            <li><a href='/'>military programs</a></li>
            <li> <a href='/'>estimate a payment</a></li>
          </ul>
        </Col>
        <Col classname='footer-container'>
          <ul>
            <h1 className='footertitle'>legal</h1>
            <span><hr></hr></span>
            <li><a href='/'>safety and emission recalls</a> </li>
            <li><a href='/'> contact us</a></li>
            <li><a href='/'>mini accessibility statement</a></li>
            <li><a href='/'>faq</a></li>
            <li><a href='/'> privacy & legal</a></li>
            <li><a href='/'>do not sell my personal information</a></li>
            <h1 className='footertitle footercareers'>careers</h1>
            <span><hr></hr></span>
            <li><a href='/'>mini careers</a></li>
            <li><a href='/'>mini dealer careers</a></li>
          </ul>
        </Col>
      </Row>
    </Container>
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" onclick="myFunction(this)"
          class="bs-plus " >
          Models <BsPlus/>
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">electric models | mini usua</Dropdown.Item>
          <Dropdown.Item href="#/action-2">mini countryman</Dropdown.Item>
          <Dropdown.Item href="#/action-3">mini hardtop 2 door</Dropdown.Item>
          <Dropdown.Item href="#/action-1">mini electric</Dropdown.Item>
          <Dropdown.Item href="#/action-2">mini convertible</Dropdown.Item>
          <Dropdown.Item href="#/action-3">mini hardtop 4 door</Dropdown.Item>
          <Dropdown.Item href="#/action-3">mini countryman hybridr</Dropdown.Item>
          <Dropdown.Item href="#/action-1">mini clubman</Dropdown.Item>
          <Dropdown.Item href="#/action-2">mini john cooper works</Dropdown.Item>
          <Dropdown.Item href="#/action-3">all models</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant='light' id="dropdown-basic" onclick="myFunction(this)"
          class="bs-plus">
          why mini <BsPlus />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">premium quality & value</Dropdown.Item>
          <Dropdown.Item href="#/action-2">covered maintenance</Dropdown.Item>
          <Dropdown.Item href="#/action-3">for the drive</Dropdown.Item>
          <Dropdown.Item href="#/action-1">surprising size</Dropdown.Item>
          <Dropdown.Item href="#/action-2">iconic design</Dropdown.Item>
          <Dropdown.Item href="#/action-3">driver technology</Dropdown.Item>
          <Dropdown.Item href="#/action-2">exceptional safety</Dropdown.Item>
          <Dropdown.Item href="#/action-3">mini yours</Dropdown.Item>
          <Dropdown.Item href="#/action-1">mini family</Dropdown.Item>
          <Dropdown.Item href="#/action-2">mini driving experience</Dropdown.Item>
          <Dropdown.Item href="#/action-3">60 years of motoring</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" onclick="myFunction(this)"
          class="bs-plus">
          shopping<BsPlus />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">build a new mini</Dropdown.Item>
          <Dropdown.Item href="#/action-2">certified pre-owned</Dropdown.Item>
          <Dropdown.Item href="#/action-3">us. diplomatice sale program</Dropdown.Item>
          <Dropdown.Item href="#/action-1">mini mobility program</Dropdown.Item>
          <Dropdown.Item href="#/action-2">special offers</Dropdown.Item>
          <Dropdown.Item href="#/action-3">find a dealer</Dropdown.Item>
          <Dropdown.Item href="#/action-3">schedule a test drive</Dropdown.Item>
          <Dropdown.Item href="#/action-1">mini pre-owned vehicles</Dropdown.Item>
          <Dropdown.Item href="#/action-2">military programs</Dropdown.Item>
          <Dropdown.Item href="#/action-3">estimate a payment</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <Dropdown.Toggle variant="light" id="dropdown-basic" onclick="myFunction(this)"
          class="bs-plus">
          legal<BsPlus />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">safety and emission recalls</Dropdown.Item>
          <Dropdown.Item href="#/action-2">contact us</Dropdown.Item>
          <Dropdown.Item href="#/action-3">mini accessibility statement</Dropdown.Item>
          <Dropdown.Item href="#/action-1">faq</Dropdown.Item>
          <Dropdown.Item href="#/action-2">privacy & legal</Dropdown.Item>
          <Dropdown.Item href="#/action-3">do not sell my personal information</Dropdown.Item>
          <Dropdown.Item href="#/action-2">mini careers</Dropdown.Item>
          <Dropdown.Item href="#/action-3">mini dealer careers</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}
