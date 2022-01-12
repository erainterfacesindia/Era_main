import React from 'react'
import { Badge } from 'react-bootstrap'
import './OurAdvisors.css'
import '../../Style/global.css'



const OurAdvisors = () => {
    return (
        <div class=" bg-black text-white">
        <div class="container-fluid flex-wrap flex-md-nowrap py-5 uipad" style={{padding:"0 5%"}}>
        <h2 class="py-5">
  <Badge bg="danger">OUR Advisors</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
              
              <div class="advisors">
              <img src="/img1.jpg"/>
              <p><h2>Lorem ipsum</h2><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum est quis rhoncus dapibus. Sed lacinia ligula in tincidunt vestibulum. Quisque faucibus egestas porttitor. Maecenas mi turpis, 
                  tempor a velit at, consequat hendrerit lectus. Quisque vehicula sit amet lacus eget rhoncus.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum est quis rhoncus dapibus. Sed lacinia ligula in tincidunt vestibulum. Quisque faucibus egestas porttitor. Maecenas mi turpis, 
                  tempor a velit at, consequat hendrerit lectus. Quisque vehicula sit amet lacus eget rhoncus.
                  
                  </p>
                  
             
              <img src="/img2.jpg" />
              <p><h2>Lorem ipsum</h2><br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum est quis rhoncus dapibus. Sed lacinia ligula in tincidunt vestibulum. Quisque faucibus egestas porttitor. Maecenas mi turpis, 
                  tempor a velit at, consequat hendrerit lectus. Quisque vehicula sit amet lacus eget rhoncus.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum est quis rhoncus dapibus. Sed lacinia ligula in tincidunt vestibulum. Quisque faucibus egestas porttitor. Maecenas mi turpis, 
                  tempor a velit at, consequat hendrerit lectus. Quisque vehicula sit amet lacus eget rhoncus.
                  
                  </p>
                  
                  
                  </div>
              </div>
              </div>
             
    )
}

export default OurAdvisors
