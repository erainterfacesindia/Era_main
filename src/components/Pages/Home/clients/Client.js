import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Client.css'
import Wrapper from '../../../UI/Wrapper'
import { Badge } from 'react-bootstrap'

const Client = () => {
    return (
      <div class="p-3s bg-black text-white">
     <div class="container-fluid flex-wrap flex-md-nowrap" style={{padding:"0 5%"}}> 
      <h2 class="py-5">
  <Badge bg="danger">OUR Clients</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
              </div>
        <div class="row">
  <div class="col-lg-12 col-sm-12 text-center pad-bottom-md">
        <div class="clientprofile">
          <div class="slider">
            <div class="slide-track">
              <div class="slide">
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="slide">
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="slide">
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="slide">
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="slide">
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="slide">
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="slide">
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            <div class="slide">
            <img src="/img3.jpg" class="clientprofile-img"/>
            </div>
            
            </div>
            </div>
         </div>
      </div>
      </div>  
      </div>
    )
}

export default Client

const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4
    }