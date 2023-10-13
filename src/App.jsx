import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { AiTwotoneHome } from 'react-icons/ai';
import { HiInformationCircle } from 'react-icons/hi';
import {  BiSolidPhoneCall } from 'react-icons/bi';


const Home = ()=>
    <div className="i">
            <div className="e"><center>FINTEKPOINT</center></div>
            <hr />
        <div className="t">
            <h2> Courses offered: </h2>          
            <p> FullStack Web Development<br />
            <br />
            Software Testing <br />
            <br />
            Python Programming
            </p>
        </div>
    </div>

const About = ()=>
    
    <div className="about">
        <div className="a">About us</div>
        <hr />
        <div className="n">
       
<br />
<ul></ul>We will train you to work on live projects within a team to simluate real-time work environment.
<br />

<br />
We will help you prepare for interviews, provide 1-1 feedback and walk along until you land a job.
<br />
<br />

Get on-the-job coaching for 12 months, so you are set up for greater success.
<br />
<br />
What you get
<br />
<br />
Develop in-demand technical and professional skills to get ready for your new career through in-person, live online classes, mentorship and capstone projects.
</div>

    </div>

const Contact = ()=>
    <div className="contact" >
        <div className="f">FINTEKPOINT</div> 
        <hr />
        <br />
        <div className="s">
        Location: <br />
        218, Nethaji Rd, Manjakuppam, Cuddalore, <br />
        Tamil Nadu - 607001 <br />

        <br />
        Contact: <br />
        9942444717 <br />
        6374322717
        </div>
    </div>


const Navigation =()=>(
    <nav>
        
        <ul>
        <div className="head">FINTEKPOINT</div>
            <li><Link to ='/Contact' className="link"><BiSolidPhoneCall/>Contact</Link> </li>
            <li><Link to ='/About' className="link"><HiInformationCircle/>About</Link> </li>
            <li><Link to ='/Home' className="link"><AiTwotoneHome/> Home</Link> </li>
            
            
        </ul>
    </nav>
)

const App =()=>{
    return <BrowserRouter>
    <div>
        <Navigation/>
        <Routes>
            <Route path='/Home' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </div>

    </BrowserRouter>
}

export default App