import React, { Component, useState } from 'react'
import './circle2.css'
const Circle2 = (props) => {
    
  const [text, setText] = useState('C++');
  const [texts, setText1] = useState('C++ is a general-purpose language used to create high-performance applications. It is an extension of C programming language.');
  function sqlh(){
    setText('SQL');
  }
  function sqlp(){
    setText1('MySQL is the world\'s most popular open-source database.It is used by many database-driven web applications');
  }

  function javah(){
    setText('Java')
  } 

  function javap(){
    setText1('Java is a programming language and computing platform. This programming language is easy for beginners as many processes run automatically.')
  }

  function pythonh(){
    setText('Python')
  } 

  function pythonp(){
    setText1('Python is an interpreted, interactive, object-oriented programming language. It is an easier programming language to learn compared to others.')
  }

  function cpph(){
    setText('C++');
  }
  function cppp(){
    setText1('C++ is a general-purpose language used to create high-performance applications. It is an extension of C programming language.')
  }
  function apph(){
    setText('App development')
  }
  function appp(){
    setText1('App development refers to the process of designing, creating, and testing mobile applications for smartphones, tablets, and other mobile devices.')
  }

  function webh(){
    setText('Web development')
  }
  function webp(){
    setText1('Web development is the process of creating and maintaining websites, involving tasks such as web design, content creation,scripting, and network security configuration.')
  }

    return(
        <>
        <>
            <div className="tech-content">
              <h1 id="hh">{text}</h1>
              <p id="pp">{texts}</p>
              {/* C++ is a general-purpose <br/> language used to create high-performance applications. It is an extension of C programming language. */}
            </div> 
            <div className="circle deg-45 sql" onClick={() => {sqlh(); sqlp()}}>
              <span className="sql"></span>
            </div>
            <div className="circle deg-90 java" onClick={() => {javah(); javap();}}>
              {/* <span className="java"></span> */}
            </div> 
            <div className="circle deg-135 file" onClick={() => {webh(); webp();}}>
              {/* <span className="file"></span> */}
            </div>
            <div className="circle deg-225 appDev" onClick={() => {apph(); appp();}}>
              {/* <span className="figma"></span> */}
            </div> 
            <div className="circle deg-270 cpp" onClick={() => {cpph(); cppp();}}>
              {/* <span className="cpp"></span>  */}
            </div> 
            <div className="circle deg-315 python" onClick={() => {pythonh(); pythonp();}}>
              {/* <span className="python"></span> */}
            </div> 
           </>
        </>
    );
}
export default Circle2;