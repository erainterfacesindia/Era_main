import React from 'react'
import Wrapper from '../../UI/Wrapper';
import * as Styles from './FeatureSection.module.css'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import {
    GiGraduateCap,
    GiShoppingCart,
    GiHospital,
    GiHeartBeats,
  } from "react-icons/gi"
  import { FaUsers } from "react-icons/fa";
  import "./feature.css"



 const FeatureSection = () => {
    return (
     
<div class="bg-black">
     <Card className="bg-dark text-white">
  <Card.Img style={{ width: '100%',height:'50vh' , objectFit:"cover",mixBlendMode: "lighten"}}src="/industries-cover.jpeg" alt="Card image" fade />
  <Card.ImgOverlay>
      <h1 class=" py-lg-5">
    <Badge bg="danger">Industries We Serve</Badge>
  </h1>
    <Card.Text>
    Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...</Card.Text>
    <Card.Text> Our technology-enabled solutions are tailored to meet the demands of individuals & organisations
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
      <Wrapper>
  <div className={Styles.container + " row"}>
    <div class="col-lg-6 col-sm-12 text-center pad-top-md">
      <FaUsers size={70} color="#f26a2e"/>
      <h4 class="text-white">RECRUITMENT</h4>
      <p className="aboutp">Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    </div>
    <div class="col-lg-6 col-sm-12 text-center">
    <GiGraduateCap size={70} color="#f26a2e"/>
    <h4 class="text-white">EDUCATION</h4>
    <p className="aboutp">Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    </div>
     <div class="col-lg-6 col-sm-12 text-center pad-top-md">
      <GiShoppingCart size={70} color="#f26a2e"/>
      <h4 class="text-white">E-COMMERCE</h4>
      <p className="aboutp">Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    </div>
    <div class="col-lg-6 col-sm-12 text-center py-3">
    <GiHeartBeats size={70} color="#f26a2e"/>
    <h4 class="text-white">HEALTH CARE</h4>
    <p className="aboutp center-block ">Our technology-enabled solutions are tailored to meet the demands of individuals & organisations...
    Our technology-enabled solutions are tailored to meet the demands of individuals & organisations</p>
    </div> 
    </div>
  </Wrapper>
  </div>

)
}
  
export default FeatureSection

