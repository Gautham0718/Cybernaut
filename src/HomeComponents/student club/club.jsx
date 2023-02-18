import React from 'react'
// import './club.css'
// import l2 from '../images/DEV LOGO 2.png'
import l3 from '../images/DEV LOGO 3.png'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import l1 from '../images/DEV LOGO 1.png'
export default function club() {
  return (
    <>
        <div className="w-3/5 mx-auto" >
      <div className='flex flex-col'>
  
          <div className="flex h-16 gap-4 items-center">
              <img src={l3} className="" alt="" />    
            <div className="flex flex-col gap-2  items-start">
              <h1 className='font-bold text-2xl text-nowrap'>Cybernaut Developers</h1>
              <h3 className='font-semibold text-xl'>Students Club</h3>
            </div>
          </div>

      <p className='mt-10 text-center text-md'>Cybernaut developers Club connects all the developers in one place. This community is for undergraduate students who are willing to develop technologies and for students with a curiosity to grow as a developer.</p>

   
    <p className='mt-10 bg-gradient-to-r from-sky-500 to-cyan-300 p-2 text-white'>This club motivates the phrase "Create leaders and not employees."</p>

    <p className='mt-10 text-center text-md'>Our motive is not only to improve a student's hard skills but also the soft skills needed for his life. By joining this, students can upgrade their skills and initiate solutions for their universities.</p>

      </div>
    </div>
    </>
  )
}

/* <div className="scp">
<div className="l">
  <img src={l1} alt="" />
</div>

  <div className="sc-card">
      <div className="hh">
          <div className="ll">
            <img src={l3} alt="" />
          </div>
          <div className="rr">
            <h1>Cybernaut Developers</h1>
            <h4>Student Club</h4>
          </div>
      </div>
      <div className="cen">
        <p>Cybernaut developers Club connects all the developers in one place. This community is for undergraduate students who are willing to develop technologies and for students with a curiosity to grow as a developer.</p>

      </div>
      <div className="blue-box">
        <p>This club motivates the phrase <br /> "Create leaders and not employees."</p>
      </div>
      <div className="cen">
        <p>Cybernaut developers Club connects all the developers in one place. This community is for undergraduate students who are willing to develop technologies and for students with a curiosity to grow as a developer.</p>
      </div>
      <div className="grey-button">
        <a href="http://">learn more</a>
      </div>
  </div>
  <div className="r">
  <img src={l2} alt="" />
</div>
</div> */