import React from 'react'
import { Card,Button } from 'react-bootstrap'
import './cardpage.css'
import img from '../images/Rectangle 30.png'
export default function cardpage() {
  return (
    <div className="cp">
        <h1>Title</h1>
        <div className="cards">
      
         <Card className='card tech-card'>
         <Card.Img variant="top" className='card-img' src={img} />
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Button variant="primary" style={{borderRadius:'15px'}}>Fuck</Button>
         </Card.Body>
       </Card>
         <Card className='card tech-card inverted'>
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Button variant="primary" style={{borderRadius:'15px'}}>Fuck</Button>
         </Card.Body>
         <Card.Img variant="top" className='card-img' src={img} />
       </Card>
         <Card className='card tech-card'>
         <Card.Img variant="top" className='card-img' src={img} />
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Button variant="primary" style={{borderRadius:'15px'}}>Fuck</Button>
         </Card.Body>
       </Card>
         <Card className='card tech-card inverted'>
         <Card.Body>
           <Card.Title>Card Title</Card.Title>
           <Button variant="primary" style={{borderRadius:'15px'}}>Fuck</Button>
         </Card.Body>
         <Card.Img variant="top" className='card-img' src={img} />
       </Card>
      
        </div>
        <br />
        <div className="ch">
        <h4>Prepare yourself for the reality <br /> #fundlebundle</h4>
        </div>
    </div>
  )
}
