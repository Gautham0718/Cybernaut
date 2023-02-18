import React from 'react';
import { Carousel } from 'react-bootstrap';
import Circle from '../circle/circle';
import './slide.css'
export default function slide() {
  return (
    <div>
        <Carousel>
        <Carousel.Item className='slider'>
          <div className="left">
              <Circle></Circle>
          </div>

          <div className="right">
            <div className="contents">
              <h1>TECH COURSES</h1>
              <p>Expanding our knowledge on the technical side with its fast advancement. Beginning it with the knowledge of basic programming languages helps make it easier to gain knowledge and understand. We offer a variety of technical courses.</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className='slider'>
          <div className="left">
            <div className="contents">
              <h1>NON-TECH COURSES</h1>
              <p>Upskilling ourselves with non-technical skills compliments the technical knowledge we have. It can be a medium of expressing creativity or the way we communicate. There are a lot of non-technical courses to upskill ourselves.</p>
            </div>
            </div>

          <div className="right">
              <Circle></Circle>
          </div>
        </Carousel.Item>
    </Carousel>
    </div>
  )
}
