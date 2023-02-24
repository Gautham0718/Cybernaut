import React from 'react'
import founders from '../images/Rectangle 40.png'
import './foundere.css'
import rect from '../images/Rectangle 40.png'
import Carousel from 'react-bootstrap/Carousel';

export default function founder() {
  return (
    <div className="founder">
        <div className="lll">
        <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rect}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rect}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={rect}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        <div className="rrr">
            <h1>THE FOUNDERS</h1>
            <p>A reason is not needed to help or make a difference. The willingness to create an impact set in mind is enough. With an aim to equalize education for all, a group of students in accord with this aim set out and then came to be Cybernaut.</p>
            <h1>OUR ENVIRONMENT</h1>
            <p>The company's environment is surrounded by like-minded and welcoming people. New ideas being shared are appreciated and valued for which efforts are taken to implement. A lot of positive changes can be seen in terms of the way you work, the way you communicate, and the knowledge you gain. With a place to upskill yourself in all aspects, it is the perfect workplace and environment.</p>
        </div>
    </div>
  )
}
