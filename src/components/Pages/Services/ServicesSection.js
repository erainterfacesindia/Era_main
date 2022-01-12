import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image"
 import { graphql } from "gatsby"
<<<<<<< HEAD
import { useStaticQuery } from 'gatsby'
import * as Styles from './Services.module.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import './services.css'
import styled from 'styled-components'
=======
import './services.css'
import Badge from 'react-bootstrap/Badge'
import '../../Style/global.css'
>>>>>>> ee763c7 (first commit)





const ServicesSection = () => {
    return (
        <div class="p-3s bg-black text-white">
<<<<<<< HEAD
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
=======
    <div class="container-fluid flex-wrap flex-md-nowrap py-5" style={{padding:"0 5%"}}>
    <div class="row">
        <h2 class="py-4">
  <Badge bg="danger">Services</Badge>
              </h2>
        <div class="row">
  <h2 class="headlines">
                EDUCATION
              </h2>
    <div class="col-md-3">
        <a href="/services/Itlf" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/img_new/COE/coe.webp" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
                <h4>COE</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
    <div class="col-md-3">
        <a href="/services/Itlf" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/img_new/itlf/itlf.webp" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
>>>>>>> ee763c7 (first commit)
                <h4>ITLF</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
<<<<<<< HEAD

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
=======
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
    <div class="col-md-3">
        <a href="/services/digipedagogy" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
>>>>>>> ee763c7 (first commit)
                <h4>DIGIPEDAGOGY</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
<<<<<<< HEAD

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
=======
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
            </div>
        </a>
    </div>
    <div class="col-md-3">
        <a href="/services/internships" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
>>>>>>> ee763c7 (first commit)
                <h4>PROJECTS & INTERNSHIP</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
<<<<<<< HEAD
=======
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
>>>>>>> ee763c7 (first commit)
            </div>
        </a>
    </div>
    <div class="row">
<<<<<<< HEAD
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
=======
  <h2 class="headlines">
                RECRUITMENT
                
              </h2>
              
      </div>
    <div class="col-md-4">
        <a href="/services/recruitment" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/recruitment2.jpg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
>>>>>>> ee763c7 (first commit)
                <h4>RECRUITMENT</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
<<<<<<< HEAD

=======
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
>>>>>>> ee763c7 (first commit)
            </div>
        </a>
    </div>
    <div class="col-md-4">
<<<<<<< HEAD
        <a href="/services/assessment" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widget-image-info">
=======
        <a href="/services/assessment" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
>>>>>>> ee763c7 (first commit)
                <h4>ASSESSMENT</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
<<<<<<< HEAD

=======
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
>>>>>>> ee763c7 (first commit)
            </div>
        </a>
    </div>
    <div class="col-md-4">
<<<<<<< HEAD
        <a href="/services/development" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widget-image-info">
=======
        <a href="/services/development" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
>>>>>>> ee763c7 (first commit)
                <h4>SOFTWARE DEVELOPMENT</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
<<<<<<< HEAD
=======
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
>>>>>>> ee763c7 (first commit)
            </div>
        </a>
    </div>
    <div class="row">
<<<<<<< HEAD
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
=======
  <h2 class="headlines">
                APPLICATION
              </h2>
      </div>
    <div class="col-md-4">
        <a href="/services/attendance" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/recruitment2.jpg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
>>>>>>> ee763c7 (first commit)
                <h4>ATTENDANCE</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
<<<<<<< HEAD

=======
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
>>>>>>> ee763c7 (first commit)
            </div>
        </a>
    </div>
    <div class="col-md-4">
<<<<<<< HEAD
        <a href="/services/digitalmarketing" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widget-image-info">
=======
        <a href="/services/digitalmarketing" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
>>>>>>> ee763c7 (first commit)
                <h4>DIGITAL MARKETING</h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
<<<<<<< HEAD

=======
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
>>>>>>> ee763c7 (first commit)
            </div>
        </a>
    </div>
    <div class="col-md-4">
<<<<<<< HEAD
        <a href="/services/examportal" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widget-image-info">
=======
        <a href="/services/examportal" class="widgetcontainer widgetcontainer-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widgetcontainer-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widgetcontainer-image-info">
>>>>>>> ee763c7 (first commit)
                <h4>EXAM PORTAL </h4>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
<<<<<<< HEAD
=======
                <h5 style={{width:"fit-content",fontSize:"13px"}}>Read More..</h5>
>>>>>>> ee763c7 (first commit)
            </div>
        </a>
    </div>
  </div>
</div>
<<<<<<< HEAD
=======
</div>
>>>>>>> ee763c7 (first commit)
  </div>
  
    )
}

export default ServicesSection

