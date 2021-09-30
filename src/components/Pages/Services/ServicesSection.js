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
    <div class="container bootstrap snippets bootdey">
    <div class="row">
    <div class="row">
  <h2 class="headline py-3">
                EDUCATION
                <span class="underline"></span>
              </h2>
      </div>
    <div class="col-md-4">
        <a href="/services/Itlf" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/recruitment2.jpg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h4>ITLF</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>

            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/services/digipedagogy" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h4>DIGIPEDAGOGY</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>

            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/services/internships" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h4>PROJECTS & INTERNSHIP</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
            </div>
        </a>
    </div>
    <div class="row">
  <h2 class="headline py-3">
                RECRUITMENT
                <span class="underline"></span>
              </h2>
      </div>
    <div class="col-md-4">
        <a href="/services/recruitment" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/recruitment2.jpg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h4>RECRUITMENT</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>

            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/services/assessment" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h4>ASSESSMENT</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>

            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/services/development" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h4>SOFTWARE DEVELOPMENT</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
            </div>
        </a>
    </div>
    <div class="row">
  <h2 class="headline py-3">
                APPLICATION
                <span class="underline"></span>
              </h2>
      </div>
    <div class="col-md-4">
        <a href="/services/attendance" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/recruitment2.jpg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h4>ATTENDANCE</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>

            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/services/digitalmarketing" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h4>DIGITAL MARKETING</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>

            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/services/examportal" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h4>EXAM PORTAL </h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
            </div>
        </a>
    </div>
  </div>
</div>
  </div>
  
    )
}

export default ServicesSection

