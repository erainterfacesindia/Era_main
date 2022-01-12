import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
=======
import './Style/global.css'
import { FaFacebookSquare, FaLinkedin,FaInstagram  } from "react-icons/fa";
import { AiFillHeart } from "react-icons/ai";
>>>>>>> ee763c7 (first commit)

const Footer = () => {
    return (
        <div class="p-3s bg-black text-white">
<<<<<<< HEAD
        <div class="container bootstrap snippets bootdey">
=======
        {/* <div class="container bootstrap snippets bootdey"> */}
       <div class="container-fluid flex-wrap flex-md-nowrap py-5" style={{padding:"0 5%"}}>
>>>>>>> ee763c7 (first commit)
        <div class="row">
            <FooterLinksWrapper>
                <FooterDesc>  
                    <img src="/era_logo.png" alt="era-logo"/> 
                    <p>f-22,3rd Cross,Nash-Square,Electronic City Phase 1,Bengaluru, Karnataka 5600100 </p>
<<<<<<< HEAD
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>IMPORTANT LINKS</FooterLinkTitle>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/about">About</FooterLink>
                    <FooterLink to="/industries">Industry</FooterLink>
                    <FooterLink to="/contact">Contact</FooterLink>
                    <FooterLink to="/services">Serivces</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>PRIVACY</FooterLinkTitle>
                    <FooterLink to="/privacypolicy">Privacy Policy</FooterLink>
                    <FooterLink to="/terms">Terms & Condition</FooterLink>
                    <FooterLink to="/blog">Blog</FooterLink>
                    <FooterLink to="/sitemap">Site Map</FooterLink>
                     
                </FooterLinkItems>
            </FooterLinksWrapper>
        </div>
        </div>
=======
                    <SocialIcons>
                        <FacebookLink
                        to="https://www.facebook.com/"
                        target="_blank"
                        aria-label="facebook">
                           <FaFacebookSquare/>
                           </FacebookLink>
                        <LinkedinLink
                        to="/"
                        target="_blank"
                        aria-label="linkedin">
                           <FaLinkedin/>
                           </LinkedinLink>
                        <InstagramLink
                        to="/"
                        target="_blank"
                        aria-label="instagram">
                           <FaInstagram/>
                        </InstagramLink>
                    </SocialIcons>
                </FooterDesc>
                <FooterLinkItems>
                    <FooterLinkTitle>
                <h5 class="headerline">
                      IMPORTANT LINKS
                        <span class="line"></span>
                           </h5>   
                           </FooterLinkTitle>
                    <FooterLink to="/">Home</FooterLink>
                    <FooterLink to="/about">About</FooterLink>
                    <FooterLink to="/industries">Industry</FooterLink>
                    <FooterLink to="/contact">Contact us</FooterLink>
                    <FooterLink to="/services">Serices</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>
                    <h5 class="headerline">PRIVACY<span class="line"></span>
                           </h5> </FooterLinkTitle>
                    <FooterLink to="/privacypolicy">Privacy Policy</FooterLink>
                    <FooterLink to="/terms">Terms & Condition</FooterLink>
                    <FooterLink to="/blog">Blog</FooterLink>
                    <FooterLink to="/sitemap">Site Map</FooterLink> 
                </FooterLinkItems>
                <div class="text-start">
                    <h5>Proud to be part of</h5>
                    <img src="/start-up-India.png"/>
                    </div>
            </FooterLinksWrapper>
        </div>
        </div>
        <div class="text-center bottom-0 bg-light text-dark">
                    &copy; 2021 ERA INTERFACES Pvt ltd. All Rights Reserved. Built with <AiFillHeart size={22}color="red" /> in JAMstack 
                </div>
>>>>>>> ee763c7 (first commit)
        </div>
    )
}

export default Footer

<<<<<<< HEAD
const FooterContainer =styled.div`
padding: 5rem; /* clac((100vw - 1300px)/2); */
display:grid;
grid-template-columns:repat(3, 1fr);
color:#fff;
background:black;
`
=======
// const FooterContainer =styled.div`
// padding: 5rem; /* clac((100vw - 1300px)/2); */
// display:grid;
// grid-template-columns:repat(3, 1fr);
// color:#fff;
// background:black;
// `
>>>>>>> ee763c7 (first commit)
const FooterDesc = styled.div`
/* padding: 0 2rem; */

img{
<<<<<<< HEAD
    margin-bottom:2rem;
=======
    margin-bottom:1rem;
>>>>>>> ee763c7 (first commit)
    width:250px;
}

@media only screen and (max-width: 991px)
{
    /* padding:1rem; */
}
`
<<<<<<< HEAD
=======
const SocialIcons=styled.div`
 display :flex;
 color:white;
 justify-self: start;
 font-size: 24px;
`
>>>>>>> ee763c7 (first commit)
const FooterLinksWrapper = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
grid-gap:10px;

@media screen and (max-width :920px)
{
    grid-template-columns: 1fr;
}
`

const FooterLinkItems = styled.div`
display: flex;
grid-template-columns:1fr 1fr;
flex-direction:column;
align-items:start;
<<<<<<< HEAD
padding: 1rem 2rem;
=======
padding: 1rem 1rem;
>>>>>>> ee763c7 (first commit)

@media screen and (max-width: 400px)
{
    padding: 1rem;
}`

const FooterLinkTitle =styled.h2`
font-size:14px;
margin-bottom:0.5rem;
`

const FooterLink =styled(Link)`
text-decoration:none;
margin-bottom:0.5rem;
<<<<<<< HEAD
font-size:14px;
=======
font-size:16px;
>>>>>>> ee763c7 (first commit)
color:#B6B6B4;

&:hover {
    color:#f26a2e;
    transition: 0.3s ease-out;

<<<<<<< HEAD
=======
}`

const FooterBottom = styled.div`
color:white;
height:50px;
width:100%;
text-align:center;
position:absolute;
bottom:10px;
left:0px;
padding-top: 20px;
`
const FacebookLink=styled(Link)`
color:white;
padding: 0 10px;

&:hover {
    color:#FFCD01;
    transition: 0.3s ease-out;
}
`
const LinkedinLink=styled(Link)`
color:white;
padding: 0 10px;

&:hover {
    color:#1261A0;
    transition: 0.3s ease-out;
}
`
const InstagramLink=styled(Link)`
color:white;
padding: 0 10px;

&:hover {
    color:#D5302C;
    transition: 0.3s ease-out;
>>>>>>> ee763c7 (first commit)
}`