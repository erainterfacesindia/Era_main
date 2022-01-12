import * as React from "react"
import {Button} from "../../../Button"
<<<<<<< HEAD
import Wrapper from '../../../UI/Wrapper'
import * as heroStyles from './Section1.module.css';
import styled from 'styled-components'
=======
import styled from 'styled-components'
import Wrapper from "../../../UI/Wrapper"
import Carousel from 'react-bootstrap/Carousel'
import './Section.css'

>>>>>>> ee763c7 (first commit)


const Section1 = (props) => {
    return (
<<<<<<< HEAD
        <div class="p-3s bg-black text-white">
        <Wrapper>
            <div className={heroStyles.container + " row"}>
            <div className="col-lg-5 col-sm-12">               
                    <HeroH1  className="pad-bottom-md">Our Technology Enabled Solutions!</HeroH1>
                    <HeroP className="pad-bottom-md">Are tailored to meet the demands of individuals & organisations...</HeroP>
                    <Button primary="true" round="true" big="true" to="/about" className="pad-bottom-md"> Explore More</Button>
                </div>  
            <div className="col-lg-7 col-sm-12">
                    <img className="about" src="/Home Page.png" alt="home_about image" />
                </div>          
            </div>
        </Wrapper>
        </div>
=======
       
        <div class="p-3s bg-black text-white">
       {/* <div class="container-xxl flex-wrap flex-md-nowrap" >  */}
      
       <Carousel controls={false}>
  <Carousel.Item>
  <Wrapper>
  <div class="row">
            <div className="col-lg-5 col-sm-12 py-5">               
                    <HeroH1  className="pad-bottom-md">Our Technology Enabled Solutions!</HeroH1>
                    <HeroP className="pad-bottom-md">Are tailored to meet the demands of individuals & organisations...</HeroP>
                    <Button primary="true" to="/about" > Explore More</Button>
                </div>  
            <div className="col-lg-7 col-sm-12 py-5 text-end">
                    <img className="about" src="/home.png" alt="home_about image" /> 
                    {/* <iframe width="420" height="345" src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0">
</iframe> */}
                </div>          
            </div>
            </Wrapper>
  </Carousel.Item>
  <Carousel.Item>
  <Wrapper>
  <div class="row">
            <div className="col-lg-5 col-sm-12 py-5">               
                    <HeroH1  className="pad-bottom-md">Our Technology Enabled Solutions!</HeroH1>
                    <HeroP className="pad-bottom-md">Are tailored to meet the demands of individuals & organisations...</HeroP>
                    <Button primary="true" to="/about" > Explore More</Button>
                </div>  
            <div className="col-lg-7 col-sm-12 py-5 text-end">
                    <img className="about" src="/home.png" alt="home_about image" />
                </div>          
            </div>
            </Wrapper>
  </Carousel.Item>
  <Carousel.Item>
  <Wrapper>
  <div class="row">
            <div className="col-lg-5 col-sm-12 py-5">               
                    <HeroH1  className="pad-bottom-md">Our Technology Enabled Solutions!</HeroH1>
                    <HeroP className="pad-bottom-md">Are tailored to meet the demands of individuals & organisations...</HeroP>
                    <Button primary="true" to="/about"> Explore More</Button>
                </div>  
            <div className="col-lg-7 col-sm-12 py-5 text-end">
                    <img className="about" src="/home.png" alt="home_about image" />
                </div>          
            </div>
            </Wrapper>
  </Carousel.Item>
</Carousel>
        </div>
        // </div>
        
       
>>>>>>> ee763c7 (first commit)
    )
}

export default Section1
    

const HeroH1=styled.div`
text-align:start;
padding-left:0 1rem;
font-size:2rem;
font-weight:bold;
padding-top:5rem;
`
const HeroP=styled.div`
text-align:start;
<<<<<<< HEAD
font-size:1.8rem;`
=======
font-size:1.8rem;`





>>>>>>> ee763c7 (first commit)
