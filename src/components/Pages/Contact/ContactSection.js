import React from 'react'
import * as Styles from "../Home/AboutCompany/Section4.module.css"
import ContactInfoItem from './ContactInfoItem';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import Wrapper from '../../UI/Wrapper';


const ContactSection = () => {
    return (
        <div className={Styles.container + " row bg-black"}>
        <div className="col-lg-6 col-sm-12">
            <Wrapper>
            <h2>Get In Touch</h2>
            <p>Smarter Business Solutions.Better Customer Relations</p>
            <h4>Contact Details</h4>
            </Wrapper>
        <ContactInfoItem icon={<MdLocalPhone />} text="9490258654" />
            <ContactInfoItem icon={<MdEmail />} text="connect@erainterfaces.com" />
            <ContactInfoItem text="#6, Daddys Southberg, Kammasandra, Electronic City, Bengaluru, Karnataka 560100" />
            </div>
       
      <div className="col-lg-6 col-sm-12 pad-top-md">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px"}}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.231179942674!2d77.68881431482045!3d12.828332490950027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d43e0fb306b%3A0x66f8ca8261f5e49b!2sERAINTERFACES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1631800736369!5m2!1sen!2sin"
              title="This is a unique title"
              width="70%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 ,borderRadius:"10px"}}
            />
          </div>
          <br />
          </div>
          </div>
        
       
    )
}

export default ContactSection
//<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.231179942674!2d77.68881431482045!3d12.828332490950027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d43e0fb306b%3A0x66f8ca8261f5e49b!2sERAINTERFACES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1631800736369!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>