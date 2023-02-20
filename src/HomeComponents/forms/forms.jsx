import React from 'react'
import './forms.css'
export default function forms() {
  return (
    <div className="form-page">
        <div class="say">
            <div id="saytext">SAY HELLO TO OUR TEAM</div>
        </div>
        <div class="formbox">
        <div class="form">
            <form action="">
                <textarea id="formname" placeholder="Name*"></textarea>
                <textarea id="formname" placeholder="Phone*"></textarea>
                <textarea id="formname" placeholder="E mail*"></textarea>
                <textarea placeholder="Message"></textarea>
                <div><button id="send">Send <span><img src="./Assets/images/Vector 35.png" alt="" id="arr"/></span></button></div>
            </form>
        </div>
        <div class="formtext">
            <div id="cname">CYBERNAUT</div>
            <div id="cnametext">Lorem ipsum dolor sit amet,consectetur adipiscing elit.<br/> In dui,
                donec tristique egestas lacus,viverra odio.<br /> <br /><span>
                     +91 63820-55035 / +91 87786-45672
                <br/>admin@cybernautofficial.com
                    </span>
            </div>
            <div id="cname">CYBERNAUT JUNIOR SPACE</div>
            <div id="cnametext">Lorem ipsum dolor sit amet,consectetur adipiscing elit.<br/> In dui,
                donec tristique egestas lacus,viverra odio.<br/><br/> <span>
                     +91 63820-55035 / +91 87786-45672
                <br/>admin@cybernautofficial.com
                    </span>
            </div>
            <div class="icons">
                <a href=""><img src="./Assets/images/ins.png" alt="" id="iconpos"/></a>
                <a href=""><img src="./Assets/images/y.png" alt="" id="iconpos"/></a>
                <a href=""><img src="./Assets/images/in.png" alt="" id="iconpos"/></a>
                <a href=""><img src="./Assets/images/fb.png" alt="" id="iconpos"/></a>
            </div>
            
        </div>

    </div>
    </div>
  )
}
