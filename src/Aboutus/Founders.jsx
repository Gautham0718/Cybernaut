import './Aboutus.css'
export default function Founders(){

const founders=[
    {
        "name":"JAYASURYA G",
        "pos":"Cheif Executive Officer",
        "des":"Founder | CEO of the Company | Trained 2000+ students | Specializes in UI/UX design ",
        "aa":require('../HomeComponents/images/Jeyasurya.png')
    },
    {
        "name":"MANISH KUMAR B",
        "pos":"President",
        "des":"Co-Founder | President of the Company| Trained 1000+ students | Specializes in Designing and CyberSecurity",
        "aa":require('./images/Professional pic 4.jpg')
    },{
        "name":"KEERTHANA R",
        "pos":"Vice-President",
        "des":"Co-Founder | Vice President of the Company| Trained 1000+ students | Specializes in Python and Data Science",
        "aa":require('./images/Picsart_23-02-07_19-51-42-781.jpg')

    }

]
var a = require('./images/Picsart_23-02-07_19-51-42-781.jpg')

    return(
  
        <div className="container founder-parent">
            <div id="d1">The Founders <div><span></span></div></div>
            <div className='row'>
                {founders.map( (i,index) => (
                <div className='messing col-9 col-lg-4 col-md-6 my-3' key={index}>
                {/* <div className="dp"></div> */}
                <img src={i.aa} alt="" className='dp' />
                    <div className="details">
                        <div className="name">
                            <h1>{i.name}</h1>
                            <p>{i.pos}</p>
                            <span></span>
                        </div>
                        <div className="discription">{i.des}</div>
                        <div id="social">
                            <span className="insta"></span>
                            <span className="linkedin"></span>
                            <span className="fb"></span>
                        </div>
                    </div>
                </div>
))}
            </div>

        </div>

    )
}