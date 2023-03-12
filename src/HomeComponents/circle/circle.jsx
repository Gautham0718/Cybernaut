import React, { Component, useState } from 'react'
import './circle.css'
const Circle = (props) => {
    
  const [text, setText] = useState('C++');
  const [texts, setText1] = useState('C++ is a general-purpose language used to create high-performance applications. It is an extension of C programming language.');
  function spokenh(){
    setText('Spoken English');
  };
  function spokenp(){
    setText1('English is one of the most commonly spoken languages worldwide and is understood by the majority and a basic hold on it will make communicating simple and easy.');
  };

  function communicationh(){
    setText('Communication')
  } 

  function communicationp(){
    setText1('The basic means to understand others is by communicating with one another. The stronger the communication skills the easier it is to speak.')
  }

  function aptitudeh(){
    setText('Basic aptitude');
  }
  function aptitudep(){
    setText1('Having an aptitude test is a way to find one’s ability with various tests in an interview. Mastering the basic concepts helps in the testing process.')
  }
  function figmah(){
    setText('Figma')
  }
  function figmap(){
    setText1('It is an editing software used for creating innovative and wonderful videos quickly. It also includes an audio editing functionality which helps create better videos and edit them.')
  }

  function premiereh(){
    setText('Adobe premiere pro')
  }
  function premierep(){
    setText1('It is an editing software used for creating innovative and wonderful videos quickly. It also includes an audio editing functionality which helps create better videos and edit them.')
  }

  function afterh(){
    setText('Adobe after effects')
  }
  function afterp(){
    setText1('It is a software used for adding motion animation and visual effects. It has hundreds of effects that can be used to manipulate imagery and can be used to combine various layers.')
  }

    return(
        <>
        <>
            <div className="tech-content">
              <h1 id="hh">{text}</h1>
              <p id="pp">{texts}</p>
              {/* C++ is a general-purpose <br/> language used to create high-performance applications. It is an extension of C programming language. */}
            </div> 
            <div className="circle deg-45 aptitude" onClick={() => {aptitudeh(); aptitudep()}}>
              <span className="sql"></span>
            </div>
            <div className="circle deg-90 afterEffect" onClick={() => {afterh(); afterp();}}>
              {/* <span className="java"></span> */}
            </div> 
            <div className="circle deg-135 premiere" onClick={() => {premiereh(); premierep();}}>
              {/* <span className="file"></span> */}
            </div>
            <div className="circle deg-225 figma" onClick={() => {figmah(); figmap();}}>
              {/* <span className="figma"></span> */}
            </div> 
            <div className="circle deg-270 spokenEnglish" onClick={() => {spokenh(); spokenp();}}>
              {/* <span className="cpp"></span>  */}
            </div> 
            <div className="circle deg-315 communication" onClick={() => {communicationh(); communicationp();}}>
              {/* <span className="python"></span> */}
            </div> 
           </>
        </>
    );
}
export default Circle;