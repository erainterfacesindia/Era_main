import React from 'react'
import styled from 'styled-components'
import AboutData from '../../../data/AboutData'
import Box from '@material-ui/core/Box';
import Wrapper from '../../UI/Wrapper';
import * as Styles from '../Home/AboutCompany/Section4.module.css'
import {
  GiCompass,
  GiDiamondHard,
} from "react-icons/gi"



const AboutSection2 = () => {

  // Style 

  const AboutElements=styled.div`
    height:400px;
    max-width: 100%;
    background-color:#141414;
    justify-content:center;
    align-items:center;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;

    h3 {
      color: #f26a2e;
      text-transform: uppercase;
      font-size:2.5rem;
      padding-bottom:1rem ;
      padding-top:20px;
    }
    .icon {
      font-size: 4rem;
      color: #f26a2e;
      text-align:center;
      width:100%;
    }
    
    p {
      color: white;
      max-width: 35em;
      font-weight: 250;
      text-align:inherit;
      padding-top: 10px;
      padding-left: 40px;
      
    }`
  
  


    
//       // <div className=" row p-3 bg-dark bg-gradient">
//       //       <div className="col-lg-6 col-sm-12">
//       //         <h2>OUR MISSION</h2>
// <AboutElements>
//         {AboutData.map(({ id, icon, label, text }) => {
//           return (
           
//             <article>
//                <h4>{label}</h4>
//               <span>{icon}</span>
             
//               <p>{text}</p>
//             </article>
//           )
//         })}      
    
//       </AboutElements>
//   )
// }


return (
  <AboutElements>
    <div class="border border-5 bg-black">
  <div className={Styles.container + " row"}>
    <div class="col-6 text-center pad-top-md">
      <h3>OUR MISSION</h3>
      <GiCompass size={70} color="#f26a2e"/>
      <p>Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    </div>
    <div class="col-6 text-center">
    <h3>OUR VISSION</h3>
    <GiDiamondHard size={70} color="#f26a2e"/>
    <p>Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    </div>
  </div>
  </div>
</AboutElements>

)
}
export default AboutSection2;

