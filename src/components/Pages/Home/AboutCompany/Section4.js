import React from 'react'
import styled from 'styled-components'
import '../../../Style/global.css'
import * as Styles from './Section4.module.css'
import Wrapper from '../../../UI/Wrapper'
<<<<<<< HEAD

const Section4 = () => {
    return (
    <div class="p-3 bg-black text-white">
        <div class="container bootstrap snippets bootdey">
        <div class="row">
                <div className="col-lg-6 col-sm-12">
                    <TitleContainer>About Our Company</TitleContainer>
=======
import { Badge } from 'react-bootstrap'
import './section4.css'


const Section4 = () => {
    return (
        
        
    <div class="p-3 bg-black text-white">
       <div class="container-fluid flex-wrap flex-md-nowrap" style={{padding:"0 5%"}}>
       <h2 class="py-5">
  <Badge bg="danger">About Us</Badge>
              </h2> 
        <div class="row">
                <div className="col-lg-7 col-sm-12">
                    {/* <TitleContainer>About Our Company</TitleContainer> */}
>>>>>>> ee763c7 (first commit)
                        <SubTitle>Reliable & Cost Efficient Company</SubTitle>
                            <p>ERA Interfaces wants to provide smart and proactive digital solutions to 
                                ensure its customers stay relevant in these progressive and dynamic market conditions.</p>
                        <ul class="checkmark">
                        <li>Understand Your Needs</li>
                        <li>Find the Perfect Solution</li>
                        </ul>
                    </div>
<<<<<<< HEAD
                <div className="col-lg-6 col-sm-12">
                <img className="about" src="/eragif.gif" alt="home_about image" />
                </div>
            </div>
            </div>
            
        </div>
=======
                <div className="col-lg-5 col-sm-12 text-end">
                <img className="about" src="/aboutus.png" alt="home_about image" />
                </div>
            </div>
            </div>
        </div>
      
       
>>>>>>> ee763c7 (first commit)
)
        }
        export default Section4 
    
    
const SubTitle=styled.div`
text-align:start;
padding-left:0 1rem;
margin-bottom:2rem;
font-size:2rem;
font-weight:bold;
`
const TitleContainer=styled.div`
<<<<<<< HEAD
color:#f26a2e;
=======
color:#CA0B00;
>>>>>>> ee763c7 (first commit)
font-size:3rem;
padding-left:0 1rem;
margin-bottom: 1rem;

p {
font-size: 1.3rem;
}
`
<<<<<<< HEAD

=======
const AboutElements=styled.div`
    height:100%;
    width: 100%;
    background-color:#141414;
    justify-content:center;
    align-items:center;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px; `
>>>>>>> ee763c7 (first commit)

