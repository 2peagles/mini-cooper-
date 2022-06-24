import React from 'react';
import {  Carousel } from 'react-bootstrap'
import  convertible  from '../../Images/convertible.jpeg'
import johnworks from '../../Images/johnworks.jpeg'
import minieletric from '../../Images/minieletric.png'
import fourdoor from '../../Images/fourdoor.jpg'
import './Hero.css'

export const Hero = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 h-30 img"
          src={minieletric}
          alt="First slide"
        />

        <Carousel.Caption>
          <h2>MIni takes the states july 9 -july 17</h2>
          <p>We're back on track and we're ready to rally - togther with our MINI community! The 8th edition of MINI TAKES THE STATES will happen starting Saturaday, July 9th and ending sunday July 17th from Burlington Vernmont to Greenville Spartanburg South Carolina.</p>
          <button>Learn More </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={convertible}
          alt="Second slide"
        />
  
        <Carousel.Caption>
          <h2>Untamed. untold.  resolute. </h2>
          <p>We've pushed the boundaries of style. We've taken fun futher. We've elevated what makes MINI unique.Discover our new Special Editions and choose the one that speaks to you</p>
          <button>Learn More </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={johnworks}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>mini eletric goes eletric</h2>
          <p>We've combined our iconic design and legendary MINI handling with electric power to create an energetic drive you'll have to feel to believe.Explore how an electric MINI can fit into your lifestyle.</p>
          <button>Learn More </button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img"
          src={fourdoor}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>mini shop @home</h2>
          <p>We want to make your MINI online  experience as easy as possible .Here, you'll find all of your MINI questions answered before you contact your dealer.</p>
          <button>Learn More </button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}
