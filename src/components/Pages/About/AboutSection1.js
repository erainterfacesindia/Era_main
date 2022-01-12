import React from 'react'
import styled from 'styled-components'
import '../../Style/global.css'
import Wrapper from '../../UI/Wrapper'
import * as Styles from '../Home/AboutCompany/Section4.module.css'
<<<<<<< HEAD
=======
import { Badge } from 'react-bootstrap'
import "./about.css"
>>>>>>> ee763c7 (first commit)



const AboutSection1 = () => {
    return (
<<<<<<< HEAD
        <div class="p-3s bg-black text-white">
        <Wrapper>
            <div className={Styles.container + " row"}>
                <div className="col-lg-6 col-sm-12">
                    <TitleContainer>About Our Company</TitleContainer>
=======
        
        <div class=" bg-black text-white">
        <div class="container-fluid flex-wrap flex-md-nowrap py-5" style={{padding:"0 5%"}}>
            
        <div class="row">
        <h2 class="py-5">
  <Badge bg="danger">ABOUT US</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
                <div className="col-lg-7 col-sm-12">
>>>>>>> ee763c7 (first commit)
                        <SubTitle>Reliable & Cost Efficient Company</SubTitle>
                            <p>ERA Interfaces wants to provide smart and proactive digital solutions to 
                                ensure its customers stay relevant in these progressive and dynamic market conditions.</p>
                    </div>
<<<<<<< HEAD
                <div className="col-lg-6 col-sm-12">
                <img className="about" src="/eragif.gif" alt="home_about image" />
                </div>
            </div>
        </Wrapper>
=======
                <div className="col-lg-5 col-sm-12 text-end">
                <img className="about" src="/aboutus.png" alt="home_about image" />
                </div>
            </div>
       
        </div>
>>>>>>> ee763c7 (first commit)
        </div>
)
        }
        export default AboutSection1 
    
    
const SubTitle=styled.div`
text-align:start;
<<<<<<< HEAD
padding-left:0 1rem;
padding-bottom:2rem;
font-size:2rem;
`
const TitleContainer=styled.div`
font-size:3rem;
padding-left:0 1rem;
padding-bottom:1rem;
=======
/* padding-left:0 1rem;
padding-bottom:2rem; */
font-size:2rem;
`
const TitleContainer=styled.div`
padding-top: 20px; 
font-size:3rem;
/* padding-left:0 1rem;*/
padding-bottom:1rem; 
color:#f26a2e;
>>>>>>> ee763c7 (first commit)

p {
font-size: 1.3rem;
}
`


