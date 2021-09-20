import React from 'react'
import styled from 'styled-components'

const AboutSection3 = () => {
    return (
        <AboutElements>
        <div class="col text-center bg-black text-white">
            <h1 class="text-left">Our Process</h1>
            <h4>Discover the steps we follow  to ensure that every project we deliver is a success</h4>
               <h3 > Understanding Your Business</h3>
               {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> */}
                <h3 > Understanding Your Business</h3>
               {/* <p className="para">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> */}
                <h3 > Understanding Your Business</h3>
               {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> */}
                <h3> Understanding Your Business</h3>
               {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> */}
                <h3 > Understanding Your Business</h3>
               {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p> */}
        </div>
        </AboutElements>
    )
}

export default AboutSection3

const AboutElements=styled.div`
    height:100%;
    max-width: 100%;
    background-color:#141414;
    justify-content:center;
    align-items:center;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;

    h1{
      color: #f26a2e;
      text-transform: uppercase;
      font-size:2.5rem;
      padding-bottom:0.5rem ;
      padding-top:20px;
      text-align:center;
    }
    p {
      color: white;
      max-width: 35em;
      font-weight: 250;
      text-align:inherit;
      padding-top: 10px;
      padding-left: 40px;
      
    }
    h4,h3{
    text-align:center;
      padding-top: 10px;
      padding-left: 40px; 
      padding-bottom :20px ;

    }
    
    `