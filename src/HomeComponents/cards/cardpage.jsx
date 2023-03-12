import React from 'react'
import { Card,Button } from 'react-bootstrap'
import './cardpage.css'
// import img from '../images/Rectangle 30.png'
import tech from '../images/Tech-Pack.png'
import softskill from '../images/Soft-skill-pack.png'
import design from '../images/Designing-pack.png'
import junior from '../images/Junior-pack.png'
export default function cardpage() {
  return (
    <div className="cp">
        <h1>What we offer</h1>
        <div className="cards">
      
         <Card className='card tech-card'>
         <Card.Img variant="top" className='card-img' src={tech} />
         <Card.Body>
           <Card.Title>Tech Pack</Card.Title>
           <Button variant="primary" style={{borderRadius:'15px'}}>View Courses</Button>
         </Card.Body>
       </Card>
         <Card className='card softskill-card inverted'>
         <Card.Body>
           <Card.Title>Soft Skill Pack</Card.Title>
           <Button variant="primary" style={{borderRadius:'15px'}} to="/Services">View Courses</Button>
         </Card.Body>
         <Card.Img variant="top" className='card-img' src={softskill} />
       </Card>
         <Card className='card junior-card'>
         <Card.Img variant="top" className='card-img' src={junior} />
         <Card.Body>
           <Card.Title>Junior pack</Card.Title>
           <Button variant="primary" style={{borderRadius:'15px'}} to="/Services">View Courses</Button>
         </Card.Body>
       </Card>
         <Card className='card designer-card inverted'>
         <Card.Body>
           <Card.Title>Designing Pack</Card.Title>
           <Button variant="primary" style={{borderRadius:'15px'}} to="/Services">View Courses</Button>
         </Card.Body>
         <Card.Img variant="top" className='card-img' src={design} />
       </Card>
      
        </div>
        <br />
        <div className="ch">
        <h4>Prepare yourself for the reality</h4>
        <h4>#fundlebundle</h4>
        </div>
    </div>
  )
}
