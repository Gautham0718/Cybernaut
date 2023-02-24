import Header from "../header/header"
import Banner from "./Banner/Banner"
import Courses from "./Courses/course.jsx"  
import Navbar from "./Navbar/navbar"
import {Link } from 'react-router-dom';
import Footer from '../HomeComponents/footer/footer'
export default function Services(){
    return (
        <div>
        {/* <Link to={"/Services"} style={ {textDecoration: 'none'}}> */}
            <Banner/>
            <Navbar/>
            <Footer/>
        {/* </Link> */}
        </div>
    )
}