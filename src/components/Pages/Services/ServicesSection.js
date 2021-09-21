import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
 import { graphql } from "gatsby"
import { useStaticQuery } from 'gatsby'
import * as Styles from './Services.module.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './services.css'
import styled from 'styled-components'





const ServicesSection = () => {
    return (
        <div class="p-3s bg-black text-white">
        <div className={Styles.container}>
            <Container class="border">
            <Row className="pad-bottom-md">
            <Col xs={4}><h2 className="header">Education</h2></Col>
            <Col xs={4}><h2 className="header">Recruitment</h2></Col>
            <Col xs={4}><h2 className="header">Application</h2></Col>
        </Row>
        <Row>
            <Col xs={4} class="text-center">
                <img className="about"  src="/photo.jpg" alt="image" to="/itlf"/> 
                <h4 css={`text-align:center;`}>ITLF</h4>
                </Col>
            <Col xs={4}><img className="about" src="/recruitment1.jpg" alt="image"/>
            <h4 css={`text-align:center;`}>Assessment Portal(AI)</h4>
                </Col>
            <Col xs={4}><img className="about" src="/photo.jpg" alt="image"/>
            <h4 css={`text-align:center;`}>Attendance(AI)</h4>
                </Col>
                
        </Row>
        <Row>
            <Col xs={4}>
                <img className="about"  src="/photo.jpg" alt="image"/> 
                <h4 css={`text-align:center;`}>Digipedagogy</h4>
                </Col>
            <Col xs={4}><img className="about" src="/recruitment2.jpg"alt="image"/>
            <h4 css={`text-align:center;`}>Recruitment</h4>
                </Col>
            <Col xs={4}><img className="about" src="/photo.jpg" alt="image"/>
            <h4 css={`text-align:center;`}>Digital Marketing</h4>
                </Col>
        </Row>
        <Row>
            <Col xs={4} class="text-center">
                <img className="about"  src="/photo.jpg" alt="image"/>
                    <h4 css={`text-align:center;`}>Projects & Internship</h4>
                </Col>
            <Col xs={4}><img className="about" src="/recruitment3.jpg" alt="image"/>
            <h4 css={`text-align:center;`}>Software Development</h4>
                </Col>
            <Col xs={4}><img className="about" src="/photo.jpg" alt="image"/>
            <h4 css={`text-align:center;`}>Projects & Internship</h4>
                </Col>
        </Row>
        </Container>
        </div>
</div>


    )
}

export default ServicesSection

const ProductTitle = styled.div`
position:absolute;
font-weight:400;
font-size:1rem;
top: 320px;
text-align: center;
justify-content: center;
`
const ProductInfo = styled.div`
                      display:flex;
                      flex-direction:column;
                      align-items:center;
                      padding: 0 2rem;

                      @media screen and (max-width: 400px)
                      {
                        padding:0 1rem;
                      }`
