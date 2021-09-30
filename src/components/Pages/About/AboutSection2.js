import React from 'react'
import Wrapper from '../../UI/Wrapper';
import * as Styles from '../Home/AboutCompany/Section4.module.css'
import {
  GiCompass,
  GiDiamondHard,


} from "react-icons/gi"
import './about.css'



const AboutSection2 = () => {

return (
  
  <div class="  bg-black">
  <Wrapper>
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
</Wrapper>
</div>
)
}
export default AboutSection2;

