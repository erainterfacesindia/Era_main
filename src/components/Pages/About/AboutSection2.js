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
import './about.css'



const AboutSection2 = () => {

  // Style 

 
   
  


    
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
  
    <div class="border  bg-black">
  <div className={Styles.container + " row"}>
    <div class="col-lg-6 col-sm-12 text-center pad-top-md">
      <h3 className="abouth3">OUR MISSION</h3>
      <GiCompass size={70} color="#f26a2e"/>
      <p className="aboutp">Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    </div>
    <div class="col-lg-6 col-sm-12 text-center">
    <h3 className="abouth3">OUR VISSION</h3>
    <GiDiamondHard size={70} color="#f26a2e"/>
    <p className="aboutp">Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    </div>
  </div>
  </div>


)
}
export default AboutSection2;

