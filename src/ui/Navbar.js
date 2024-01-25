import React from 'react'
import about from "../img/about.png";
import { Row, Col } from "reactstrap";

import profile from "../img/prof.jpg";


import html from "../img/html.png";
import css from "../img/css.png";
import sass from "../img/sass.png";
import reactjs from "../img/reactjs.png";
import redhat from "../img/redhat.png";
import aws from "../img/aws.png";
import azure from "../img/azure.png";
import gcp from "../img/gcp.png";

import download1 from "../img/download1.jpeg"
import download3 from "../img/download3.jpeg"
import download2 from "../img/download2.jpeg"
import download4 from "../img/download4.jpeg"

import circle from "../img/circle.png"

import gmail from "../img/gmail.gif"
import linkedin from "../img/linkedin.gif"
export default function Navbar() {
  const NewColor={
    backgroundColor : 'rgb(249 217 235)',
  }
  const img = {
    width: "100%",
    backgroundColor: "white",

  };
  const Mycolor={
    backgroundColor: 'rgb(226 199 252)',
    boxShadow: ' 10px 7px 11px rgb(209 160 215)',
    
}
  return (
    <>
 {/*-------------------------------- navbar--------------------------------- */}    <div>
      <nav style={NewColor} class="navbar fixed-top navbar-expand-lg navbar-primary ">
      <div class="container-fluid ">
        <a class="navbar-brand  text-dark" href="#home">
          Pranita
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <form className='d-flex align-items-end' >
        <a class="navbar-brand text-dark" href="#about">About</a>
        <a class="navbar-brand text-dark" href="#skills">Skills</a>
        <a class="navbar-brand text-dark" href="#portfolio">Portfolio</a>
        <a class="navbar-brand text-dark" href="#education">Education</a>
        <a class="navbar-brand text-dark" href="#contact">Contact</a>
      </form>
        </div>
      </div>
    </nav>
    </div>

    {/*-------------------------------- home--------------------------------- */}
<div id='home'>
<div class="jumbotron p-3 bg-transparent m-0 pt-5">
  <Row>
    
    <Col md="6" style={{ color: "rgb(73 10 133)" }} className="my-4">
      <div className="m-5">
        <h1 class="display">Hey I'am</h1>
        <h1 class="display">PRANITA SAWANT</h1>
        <p class="lead">
        {/* Seeking a Cloud Computing Engineer position with MNC Company
         where skills in network security, and cloud-based development 
         can be utilized for career advancement. */}
         "As a recent graduate with a strong foundation in cloud computing and networking,
         I am actively seeking an entry-level position to apply my skills and contribute to innovative projects. 
         Eager to bring fresh insights, a passion for technology, 
         and a commitment to learning in a dynamic professional environment."
        </p>
        {/* <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
      <div class="btn-group" role="group" aria-label="First group">
        <button type="button" class="btn btn-transparent p-0">
          <img src={insta} style={{ width: "70%" }} alt="insta" />
        </button>
        <button type="button" class="btn btn-transparent p-0">
          <img src={whatsapp} style={{ width: "70%" }} alt="whatsapp" />
        </button>
        <button type="button" class="btn btn-transparent p-0">
          <img src={linkedin} style={{ width: "70%" }} alt="linkedin" />
        </button>
      </div>
    </div> */}
      </div>
    </Col>
    <Col md="6"  className="pt-5">
      <div>
        <img src={profile} style={img} alt="profile" />
      </div>
    </Col>
  </Row>
  
</div>
</div>
 {/*-------------------------------- about--------------------------------- */}
 <div id='about' className='pt-5'>
 <div  className="container-fulid text-dark mb-5 pt-5 ">
        <div><h1 className="text-center" >About</h1></div>  
      <Row className='mx-5 row aboutRow '>
        <div className="row justify-content-center p-0"  >
          <Col md="6" className="d-flex justify-content-center p-0 aboutCol" style={{backgroundColor: "#f2e5fe"}}>
            <div className="aboutDiv p-5">
              <p className=" aboutP" style={{fontWeight:"bold"}}>
              {/* Recent graduate with a degree in Computer Science and a focus on network security, 
              seeking a Network Engineer role to leverage my knowledge of network protocols,
              firewalls, and intrusion detection systems to ensure the reliability
              and security of critical network infrastructure in a fast-paced environment.


              Recent graduate with a degree in Computer Science and a focus on networking,and have
              strong knowledge of 3 big cloud providers AWS , Azure and Google Cloud  */}
              "As a recent graduate in BSc Information Technology and having completed an cloud computing course,
              I am eager to embark on a career in Cloud Computing and Networking. 
              Seeking a challenging position where I can leverage my academic foundation, 
              practical knowledge, and passion for emerging technologies. 
              Committed to staying current with industry best practices and trends.
             Ready to bring a fresh perspective, strong problem-solving abilities,
            and a dedication to continuous learning to contribute to the success of a dynamic team and organization."
              </p>
            </div>
          </Col>
          <Col md="6" className="d-flex justify-content-center p-0 aboutCol" style={{backgroundColor: "rgb(88 109 155)"}}>
            <img
              className="aboutImg"
              src={about}
              style={{ width: "60%" }}
              alt="icon"
            />
          </Col>
        </div>
        
      </Row>
        </div></div>
  {/*-------------------------------- skills--------------------------------- */}
  <div id='skills' className="skills p-0 pt-5" style={{backgroundColor:'#e2c7fc75'}} >
        <div>
            <h1 className=" pt-5 text-center text-dark rotate-90">What I do</h1>
            <p className="text-center font-weight-bold SkillsP">i am from dombivli. I am doing Bachelor's in Information Technology and i will graudate in the year 2023.</p>
        </div>
      <div className="container">
        <Row  className="row row-cols-6 justify-content-center skills">
            <Col style={Mycolor} className="col p-2  m-3 skillsCol">
                <img src={html}alt="icon" style={{width:'100%'}} />
                <h5 className="text-center skillsH">HTML5</h5>
            </Col>
            <Col style={Mycolor} className="col p-2  m-3 skillsCol">
                <img src={css} alt="icon" style={{width:'100%'}}/>
                <h5 className="text-center skillsH">CSS3</h5>
            </Col>
            <Col style={Mycolor} className="col p-2  m-3 skillsCol">
                <img src={sass} alt="icon" style={{width:'100%'}}/>
                <h5 className="text-center skillsH">SAAS</h5>
            </Col>
            <Col style={Mycolor} className="col p-2  m-3 skillsCol">
                <img src={reactjs} alt="icon" style={{width:'100%'}}/>  
                <h5 className="text-center skillsH">ReactJS</h5>
            </Col>
            <Col style={Mycolor} className="col p-2  m-3 skillsCol">
                <img src={redhat} alt="icon" style={{width:'100%'}}/>
                <h5 className="text-center skillsH">RedHat Linux</h5>
            </Col>
            <Col style={Mycolor} className="col p-2  m-3 skillsCol">
               <img src={aws} alt="icon" style={{width:'100%'}}/>
               <h5 className="text-center skillsH">AWS</h5>
            </Col>
            <Col style={Mycolor} className="col p-2  m-3 skillsCol">
               <img src={azure} alt="icon" style={{width:'100%'}}/>
               <h5 className="text-center skillsH">Azure</h5>
            </Col>
            <Col style={Mycolor} className="col p-2  m-3 skillsCol">
                <img src={gcp} alt="icon" style={{width:'100%'}}/>
                <h5 className="text-center skillsH">GCP</h5>
            </Col>
        </Row>
      </div>
    </div>
   {/*-------------------------------- Portfolio--------------------------------- */}
 <div  id='portfolio' className='pt-5'>
  <div className='container-fluid pt-5'>
      <h1 className='display text-center text-dark'>My Art Work</h1>
  <Row className='portfolio  justify-content-center' >
    <Col className='col-6 p-0' >
    <img src={download4} style={{width:'50%'}} alt='sktech1'/>
    <img src={download2} style={{width:'50%'}} alt='sktech1'/>
    <img src={download3} style={{width:'100%'}} alt='sktech1'/>
    </Col>
    <Col className='col-3 p-0' >
    <img src={download1} style={{width:'100%', height: '57.5%'}} alt='sktech1'/>
    <img src={download4} style={{width:'100%'}} alt='sktech1'/>
    </Col>
    </Row>
    
</div></div>  
 {/*-------------------------------- education--------------------------------- */}

 <div id='education' className="education pt-5">
      <div
        className="education container-fluid py-5"
        style={{ backgroundColor: "rgb(242 229 254)" }}
      >
        <h1 className="text-center pb-5">Education</h1>


        <Row className="container-fluid d-flex justify-content-center flex-column p-0">
         <Col className=" d-flex justify-content-center ">
         <Col className="col-5 font-weight-bold text-capitalize pb-3">
             <p className="ed_p1 text-dark text-right">2020-2023</p>
             <p className="ed_p text-dark  h5 text-right mb-0 ">
              Bachelor of Science <br /> in Information Technology
            </p>
          </Col>
          <div  className="d-flex p-0 justify-content-center" style={{ width:"5px", backgroundColor: "#9ba9c5" }} >
            <img  style={{width:"15px", height:"15px"}} src={circle} alt="circle"/>
          </div>
          <Col className="col-5 text-capitalize ">
             <p style={{fontWeight: "500"}} className="ed_p1 text-dark text-left mb-0 ">
              Keraleeya Samajam Model <br /> College Autonoums Dombivli(E)
            </p>
          </Col>
         </Col>
         <Col className="d-flex justify-content-center">
         <Col className="col-5 font-weight-bold text-capitalize pb-3">
             <p className="ed_p1 text-dark text-right">2019-2020</p>
             <p className="ed_p text-dark  h5 text-right mb-0 ">
             Higher <br /> Secondary Certificate
            </p>
          </Col>
          <div  class="d-flex p-0 justify-content-center"style={{ width:"5px", backgroundColor: "#9ba9c5" }} >
            <img style={{width:"15px", height:"15px"}} src={circle} alt="circle"/>
          </div>
          <Col className="col-5 text-capitalize ">
             <p style={{fontWeight: "500"}} className="ed_p1 text-dark text-left ">
             Pragati College of Arts <br /> and Commerce Dombivli(E)
            </p>
          </Col>
          </Col>
          <Col className="d-flex justify-content-center">
         <Col className="col-5 font-weight-bold text-capitalize pd-3">
             <p className="ed_p1 text-dark text-right">2017-2018</p>
             <p className="ed_p text-dark  h5 text-right ">
             Secondary <br /> School Certificate
            </p>
          </Col>
          <div  class="d-flex p-0 justify-content-center"style={{ width:"5px", backgroundColor: "#9ba9c5" }} >
            <img style={{width:"15px", height:"15px"}} src={circle} alt="circle"/>
          </div>
          <Col className="col-5 text-capitalize ">
             <p style={{fontWeight: "500"}} className="ed_p1  text-dark text-left mb-0 ">
             IES Chandrakant Patkar <br /> Vidyalaya Dombivli(E)
            </p>
          </Col>
          </Col>
         
        </Row>

      </div>
    </div>
  {/*-------------------------------- contact--------------------------------- */}
  <div id='contact' className='d-flex justify-content-center pt-5'>
      
      <Row className='m-5'>
        <Col md="6" className='p-5'>
          <div>
           <h1 className=''>Contact Me</h1>
           <p className='font-weight-bold '>
           "Thank you for exploring my portfolio.
          If you find my skills and experiences align with your organization's needs,
           I would be delighted to discuss potential opportunities further. 
           Please feel free to reach out to me via email or connect with me on LinkedIn.
            I look forward to the possibility of contributing to your team and bringing my
             passion for cloud computing and networking to your organization."
           </p>
          </div>
        </Col>
        <Col md="6" className='p-5' style={{backgroundColor:"#f2e5fecf"}}>
        <div class="input-group mb-3 border rounded border-1 border-dark ">
            <input type="text" class="form-control" placeholder="Your Name" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div class="input-group mb-3  border rounded border-1 border-dark">
            <input type="text" class="form-control" placeholder="Your Email" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div class="input-group mb-3  border rounded border-1 border-dark">
            <input type="text" class="form-control" placeholder="Your Number" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div class="mb-3  border rounded border-1 border-dark">
        <textarea  placeholder="Your Message"  class="form-control" id="exampleFormControlTextarea1" rows="4"></textarea>
        </div>
        <div className='d-flex justify-content-center pt-2'>
        <a style={{width: "100%", backgroundColor:"rgb(195 145 241)"}} class="btn text-light font-weight-bold" href="/" role="button">submit form</a>
        </div>
        </Col>
        

        <Row>
          <Col className=' d-flex align-items-center flex-column font-weight-bold pt-4 '>
            <img style={{width:"30px", height: "30px"}} src={linkedin} alt='whatsapp' />
            <a href='https://www.linkedin.com/in/pranita-sawant-3a400b208/' >
            www.linkedin.com/in/pranita-sawant-3a400b208
            </a>
          </Col>
          {/* <Col className=' d-flex align-items-center flex-column font-weight-bold'>
            <img style={{width:"30px", height: "30px"}} src={location} alt='location' />
            <p className='text-center'>605, New Ayre Gaon Dombivli(E), 421201, MAHARASHTRA
            </p>
          </Col> */}
          <Col className=' d-flex align-items-center flex-column font-weight-bold pt-4'>
           <img style={{width:"30px", height: "30px"}} src={gmail} alt='gmail' />
           <p className='text-center m-0'>pranitasawant080@gmail.com</p>
          </Col>
        </Row>
      </Row>
    </div>
</>



  )
}
