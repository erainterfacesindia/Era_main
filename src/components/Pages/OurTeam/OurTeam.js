import React from 'react'
import './OurTeam.css'
import { Badge } from 'react-bootstrap'
import Wrapper from '../../UI/Wrapper'
import { BsLinkedin } from "react-icons/bs"
import '../../Style/global.css'




const OurTeam = () => {
    return (
       
        <div class=" bg-black text-white">
        <div class="container-fluid flex-wrap flex-md-nowrap py-5 uipad" style={{padding:"0 5%"}}>
        <h2 class="py-5">
  <Badge bg="danger">OUR SQUAD</Badge>
                {/* <span class="underline"></span>  */}
              </h2>    
              <div class="row">
              <div class="col-md-4 col-sm-12 text-center">
              <div class="teamprofile"> 
            <img src="/img1.jpg" class="teamprofile-img"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Akash Vellore</h2>
            <h5>Director</h5>
            </div>
        </div>
        <div class="col-md-4 col-sm-12 text-center">
        <div class="teamprofile"> 
            <img src="/img1.jpg" class="teamprofile-img"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Indrajith Singh</h2>
            <h5>Application developer</h5>
            </div>
            </div>  
            <div class="col-md-4 col-sm-12 text-center"> 
            <div class="teamprofile"> 
            <img src="/img1.jpg" class="teamprofile-img"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Mrityunjay Gupta</h2>
            <h5>Back-End Developer</h5>
            </div>
           </div>
       
            <div class="col-md-4 col-sm-12 text-center"> 
            <div class="teamprofile"> 
            <img src="/uday.jpeg" class="teamprofile-img"/>
            <a href="/"><i class="BsLinkedin"></i></a>
            <h2 class="user-name">Uday S</h2>
            <h5>Front-End Developer</h5>
            </div>
            </div>

            <div class="col-md-4 col-sm-12 text-center"> 
            <div class="teamprofile"> 
            <img src="/img1.jpg" class="teamprofile-img"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Sainath Naik</h2>
            <h5>IOT</h5>
            </div>
            </div>
            
            <div class="col-md-4 col-sm-12 text-center"> 
            <div class="teamprofile"> 
            <img src="/img2.jpg" class="teamprofile-img"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Sai Lakshmi</h2>
            <h5>IOT</h5>
            </div>
            </div>
       
            <div class="col-md-4 col-sm-12 text-center">
            <div class="teamprofile">
            <img src="/img1.jpg" class="teamprofile-img"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Nikhil Palde</h2>
            <h5>Devops</h5>
            </div>
    </div>
    
    <div class="col-md-4 col-sm-12 text-center">
        <div class="teamprofile">
            <img src="/img3.jpg" class="teamprofile-img"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Adwithi</h2>
            <h5>UI/UX Designer</h5>
            </div>
            </div>

            <div class="col-md-4 col-sm-12 text-center">
        <div class="teamprofile">
            <img src="/img3.jpg" class="teamprofile-img"/>
            {/* <a href="/"><i class="BsLinkedin"></i></a> */}
            <h2 class="user-name">Harshitha Dadi</h2>
            <h5>Intern</h5>
            </div>
            </div>
        </div>
        
                </div>  
                </div>
               
                
                
    )
}

export default OurTeam
