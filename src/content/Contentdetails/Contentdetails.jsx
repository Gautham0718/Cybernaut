import './Contentdetails.css'
import Content from '../content.json'
import logo from '../Assets/cybernaut_logo.png'
export default function ContentDetails(props){
    var name = props.name;
    var certificate= require('./assets/certificate.png')
    var online_learning = require('./assets/OL.png');
    var lang = require('./assets/lang.png')
    var beginner = require('./assets/beginer.png')
    var doubt = require('./assets/doubt.png')
    var proj = require('./assets/practice.png')
    var certi = require('./assets/certi.png')
    return(
        <div id="Contentdetails">
            <div className="description">
                    <h4>Description</h4>
                    <div>
                        {Content[name].Description}
                    </div>
                    
            </div>
            <div id="teamCyber">
                <div className="row">
                    <span className="logo col-lg-1 col-sm-12 ms-5   ">
                        <img src={logo}alt=""/>
                    </span>
                    <div className="col-lg-8 col-sm-12 align-self-center">
                        <h4>Team Cybernaut</h4>
                        <div>
                        With Cybernaut, students can improve their skills and knowledge, gain valuable experience through internships, and access resources to help them achieve their goals. We believe in providing equal education opportunities for everyone and are committed to creating a more just and equitable world through education.
                        </div>
                    </div>
                </div>
            </div>
            <div id="whatWillYouAchieve" className='col-lg-8 col-sm-12 ms-5'>
            <h4>What will you achieve?</h4>
                    <ul className="row">
                        <li className="col-lg-6 col-md-12 p-2 liwarp"> <span className="pts p-1"/>Acquire new knowledge and skills in various subjects, such as technology, business, and personal development</li>
                        <li className="col-lg-6 col-md-12 p-2 liwarp"> <span className="pts p-1"/>Gain access to experienced instructors and industry professionals who can provide guidance and support throughout the course</li>
                        <li className="col-lg-6 col-md-12 p-2 liwarp"> <span className="pts p-1"/>Develop a portfolio of work and projects that can be used to showcase their skills to potential employers or clients</li>
                        <li className="col-lg-6 col-md-12 p-2 liwarp"> <span className="pts p-1"/>Improve their employability and career prospects by developing in-demand skills and knowledge that are relevant to today's job market.</li>
                    </ul>
            </div>
            <div id='whoCanTake'>
                <ul className="col-lg-8 ms-5 mt-5 p-3">
                    <h4 className="p-3">Who can take this course?</h4>
                    <li className="col-lg-10 p-3 liwarp"><span className="pts"/>Anyone who is interested in learning and improving themselves</li>
                    <li className="col-lg-10 p-3 liwarp"><span className="pts"/>Anyone looking for affordable and accessible online education options</li>
                    <li className="col-lg-10 p-3 liwarp"><span className="pts"/>Professionals who want to stay current in their field or expand their skill set</li>
                    <li className="col-lg-10 p-3 liwarp"><span className="pts"/>Individuals from diverse backgrounds and circumstances who want to access equal education opportunities.</li>
                </ul>
            </div>
            <div id='COC' className="col-lg-8 ms-5 my-5">
                <div className="row">
                    <ul className="col-10 ps-md-5">
                        <h4 className="p-3">Certificate of Completion</h4>
                        <li className="p-2 liwarp" ><span className="pts"/>Demonstrates skills and commitment to learning</li>
                        <li className="p-2 liwarp"><span className="pts"/>Can be added to resumes and portfolios</li>
                        <li className="p-2 liwarp"><span className="pts"/>Official recognition of course completion</li>
                        <li className="p-2 liwarp"><span className="pts"/>Provides a sense of accomplishment and motivation for further learning</li>
                    </ul>
                    <div className="col-2 m-auto"><img src={certificate} alt="" /></div>
                </div>
            </div>
            <div id="whyCyber">
                <h4 className="col-lg-8 text-lg-center">Why Cybernaut?</h4>
                <div className="col-lg-10 p-5">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 d-flex flex-column p-3" ><div className="cir align-self-center cent"><img src={online_learning} alt="" /></div><span className="text-center">Online learning  </span></div>
                        <div className="col-lg-4 col-md-6 d-flex flex-column p-3" ><div className="cir align-self-center cent"><img src={beginner} alt="" /></div><span className="text-center">Beginner-friendly</span></div>
                        <div className="col-lg-4 col-md-6 d-flex flex-column p-3" ><div className="cir align-self-center cent"><img src={lang} alt="" /></div><span className="text-center">Taught in English/Tamil  </span></div>
                        <div className="col-lg-4 col-md-6 d-flex flex-column p-3" ><div className="cir align-self-center cent"><img src={doubt} alt="" /></div><span className="text-center">Doubt clarification done  </span></div>
                        <div className="col-lg-4 col-md-6 d-flex flex-column p-3" ><div className="cir align-self-center cent"><img src={proj} alt="" /></div><span className="text-center">Project for practice </span></div>
                        <div className="col-lg-4 col-md-6 d-flex flex-column p-3" ><div className="cir align-self-center cent"><img src={certi} alt="" /></div><span className="text-center">Certification after training</span></div>
                    </div>
                </div>
            </div>

            <div className="col-lg-8 ms-5 pt-5">
                    <h4>FAQ</h4>
                    <div className="accordion accordion-flush p-2" id="faq_ques">
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="Q1">
                                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#A1">
                                    Live Interactive session with one and one doubt session?
                                </button>
                            </h3>
                            <div id="A1" className="accordion-collapse collapse" data-bs-parent="#faq_ques">
                                <div className="accordion-body"> 
                                    Placeholder content for this accordion, which is intended to demonstrate the accordion-flush className. This is the first item's accordion body.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="Q2">
                                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#A2">
                                    Live Interactive session with one and one doubt session?
                                </button>
                            </h3>
                            <div id="A2" className="accordion-collapse collapse" data-bs-parent="#faq_ques">
                                <div className="accordion-body"> 
                                    Placeholder content for this accordion, which is intended to demonstrate the accordion-flush className. This is the first item's accordion body.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h3 className="accordion-header" id="Q3">
                                <button type="button" className="accordion-button" data-bs-toggle="collapse" data-bs-target="#A3">
                                    Live Interactive session with one and one doubt session?
                                </button>
                            </h3>
                            <div id="A3" className="accordion-collapse collapse" data-bs-parent="#faq_ques">
                                <div className="accordion-body"> 
                                    Placeholder content for this accordion, which is intended to demonstrate the accordion-flush className. This is the first item's accordion body.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}