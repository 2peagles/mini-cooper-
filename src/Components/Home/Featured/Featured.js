import React from 'react';
import { Container , Row, Col } from 'react-bootstrap';
import featuredphone from '../../../Images/featuredphone.webp';
import eletricparking from '../../../Images/eletricparking.webp';
import miniflip from '../../../Images/miniflip.webp'
import './Featured.css';

export const Featured = () => {
  return (
    <section className='featured'>
 <Container fluid='xs' className='featured-container' >
    <Row className='featuredheadingrow'>
          <Col className='featuredheadingcol'><h1>- Featured -</h1></Col>
    </Row>
      <Row xs={1} md={3}>
          <Col sm className='featured-container'>
            <Col className='featuredcontentcontainer'>
             <Row>  <img src={featuredphone} alt='Mini App for androids and ios' className='featured-img' /></Row> 
            <p className='featuredsubtitle'>MINI MOBILE APPS</p>
            <hr></hr>
            <h2 className='featuredtitle'>  THE NEW MINI APP. </h2>
            <p>The new MINI App is the mobile enhancement that connects your smartphone and your MINI with numerous functions. If your MINI is equipped with MINI Connected and you have an iPhone® or Android® device, the MINI App is a must have. You’ll be connected to your MINI like never before.</p>
            <div className='btngroup'>
                <button className=' btn-black'><a href='/'>download ios</a></button>
                <button className=' btn-red'><a href='/'>download android </a></button>
            </div>
      </Col>
      </Col>
          <Col classname='featured-container'>
            <Col className='featuredcontentcontainer'>
              <Row><img src={eletricparking} alt='Mini App for androids and ios' className='featured-img' /></Row> 
            <p className='featuredsubtitle'>MINI ELECTRIC</p>
            <hr></hr>
            <h2 className='featuredtitle'>  THE MINI DRIVE, ELECTRIFIED.</h2>
              <p className=''>We’ve combined our iconic design and legendary MINI handling with electric power to create an energetic drive you’ll have to feel to believe. Check out our all-electric MINI Cooper SE 2 Door Hardtop, or the MINI Countryman Plug-In Hybrid.</p>
            <div className='btngroup'>
              <button className=' btn-black'><a href='/'>learn more</a></button>
            </div>
          </Col>
        </Col>
          <Col sm className='featured-container'>
            <Col className='featuredcontentcontainer'>
               <Row>  <img src={miniflip} alt='Mini App for androids and ios' className='featured-img' /></Row> 
            <p className='featuredsubtitle'>MINI FINANCIAL SERVICES</p>
            <hr></hr>
            <h2 className='featuredtitle'>  FLIPPED FINANCING.™ </h2>
              <p>Our unique, streamlined financing process is designed to make your experience stress-free. With benefits like One Rate, Zero Pressure, and No Nonsense—turns out, buying a MINI can be as enjoyable as driving one.</p>
            <div className='btngroup'>
              <button className=' btn-black'><a href='/'>learn more</a></button>
            </div>
          </Col>
        </Col>
  </Row>
 </Container>
    </section>
  )
}
