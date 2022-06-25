import React from 'react';
import {Row, Col} from 'react-bootstrap';
import './Break.css';

export const BreakTwo = () => {
  return (
    <>
    <div className='breaktwo'></div>
    <div className='breaksection'>
      <Row>
        <Col><h1 className='breaktwotext'>over 6 years of motoring</h1></Col>
          <button className='breakbtn'> <a href='/'>the mini hertiage</a> </button>
      </Row>
    </div>
    </>
  )
}
