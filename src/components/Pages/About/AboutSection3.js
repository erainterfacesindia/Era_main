import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD

const AboutSection3 = () => {
    return (
        <AboutElements>
        <div class="col text-center bg-black text-white">
            <h1 class="text-center">Our Process</h1>
            <h5>Discover the steps we follow  to ensure that every project we deliver is a success</h5>
               <h4 > Understanding Your Business</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <h4 > Understanding Your Business</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <h4 > Understanding Your Business</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <h4 > Understanding Your Business</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <h4 > Understanding Your Business</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        </AboutElements>
=======
import { AiOutlineArrowDown} from "react-icons/ai";
import Wrapper from '../../UI/Wrapper';

const AboutSection3 = () => {
    return (
      
       <AboutElements>
        <div class="col text-center bg-black text-white pad-bottom-md">
          <div class="container-fluid flex-wrap flex-md-nowrap" style={{padding:"0 5%"}}>
            <h1 class="text-center">Our Process</h1>
            <h5>Discover the steps we follow  to ensure that every project we deliver is a success</h5>
               <h4 class="py-5" > Understanding Your Business</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <AiOutlineArrowDown size={50}/>
                <h4 > Understanding Your Business</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <AiOutlineArrowDown size={50}/>
                <h4 > Understanding Your Business</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <AiOutlineArrowDown size={50}/>
                <h4 > Understanding Your Business</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                <AiOutlineArrowDown size={50}/>
                <h4 > Understanding Your Business</h4>
               <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                </div>
        </div>
        </AboutElements>
     
>>>>>>> ee763c7 (first commit)
    )
}

export default AboutSection3

const AboutElements=styled.div`
    height:100%;
    width: 100%;
    background-color:#141414;
    justify-content:center;
    align-items:center;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
<<<<<<< HEAD
    padding-bottom: 20px; 
=======
    padding-bottom: 20px;  
>>>>>>> ee763c7 (first commit)

    h1{
      color: #f26a2e;
      text-transform: uppercase;
      font-size:2.5rem;
      padding-bottom:0.5rem ;
<<<<<<< HEAD
      padding-top:20px;
=======
      padding-top:20px; 
>>>>>>> ee763c7 (first commit)
      text-align:center;
    }
    p {
      color: white;
      font-weight: 250;
      align-items: center;
      justify-content: center;

      
    }
    h4{
    text-align:center;
    color:#f26a2e;
      padding-top: 10px;
      
      padding-bottom :20px ; 

    }
    
    `