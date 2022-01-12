import React from 'react'
<<<<<<< HEAD
import * as Styles from "../Home/AboutCompany/Section4.module.css"
import ContactInfoItem from './ContactInfoItem';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import Wrapper from '../../UI/Wrapper';
=======
import ContactInfoItem from './ContactInfoItem';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import Wrapper from '../../UI/Wrapper';
import { Badge } from 'react-bootstrap'
import './contact.css'
>>>>>>> ee763c7 (first commit)


const ContactSection = () => {
    return (
<<<<<<< HEAD
      <div class="p-2s bg-black text-white">
      <Wrapper>
        <div className={Styles.container + " row bg-black"}>
        <div className="col-lg-6 col-sm-12">
            
            <h2>Get In Touch</h2>
            <p>Smarter Business Solutions.Better Customer Relations</p>
            <h4>Contact Details</h4>
=======
    
      <div class="bg-black text-white">
      <div class="container-fluid flex-wrap flex-md-nowrap py-5 contactpad">
      <h2 class="py-4">
  <Badge bg="danger">Contact US</Badge>
                {/* <span class="underline"></span>  */}
              </h2> 
        <div class="row">
        {/* <h2 class="py-3">
  <Badge bg="danger">Get In Touch</Badge>
                <span class="underline"></span> 
              </h2> */}
        <div className="col-lg-6 col-sm-12 py-5">
          <h2> Get In Touch</h2>
          <p>Smarter Business Solutions, Better Customer  Relations</p>
            <h4 class="py-3">Contact Details</h4>
>>>>>>> ee763c7 (first commit)
        <ContactInfoItem icon={<MdLocalPhone />} text="9490258654" />
            <ContactInfoItem icon={<MdEmail />} text="connect@erainterfaces.com" />
            <ContactInfoItem text="#6, Daddys Southberg, Kammasandra, Electronic City, Bengaluru, Karnataka 560100" />
            </div>
       
<<<<<<< HEAD
      <div className="col-lg-6 col-sm-12 pad-top-md">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "350px"}}
            padding-left="20px"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.231179942674!2d77.68881431482045!3d12.828332490950027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d43e0fb306b%3A0x66f8ca8261f5e49b!2sERAINTERFACES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1631800736369!5m2!1sen!2sin"
=======
      <div className="col-lg-6 col-sm-12 py-5">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "370px"}}
            // padding-left="20px"
          >
            <iframe
              src="/Capture.webp"
>>>>>>> ee763c7 (first commit)
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 ,borderRadius:"10px"}}
            />
          </div>
          <br />
          </div>
          </div>
<<<<<<< HEAD
          </Wrapper>
          </div>
        
       
=======
          </div>
          </div>
           
>>>>>>> ee763c7 (first commit)
    )
}

export default ContactSection
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.231179942674!2d77.68881431482045!3d12.828332490950027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d43e0fb306b%3A0x66f8ca8261f5e49b!2sERAINTERFACES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1631800736369!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>