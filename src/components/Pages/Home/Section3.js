import React from 'react'
import Wrapper from '../../UI/Wrapper'
import './home.css'
import Badge from 'react-bootstrap/Badge'




const Section3 = () => {
  return (
    <div class="p-3s bg-black text-white">
    <div class="container bootstrap snippets bootdey">
    <div class="row">
  <h2 class="headline py-3">
  Our Blogs
                <span class="underline"></span>
              </h2>
              <div class="col-md-4">
        <a href="/blogposts/blog1" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/about_home.jpeg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h5>Consectetur adipiscing elit. </h5>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>
            </div>
        </a>
    </div>
  
    <div class="col-md-4">
        <a href="/blogposts/blog2" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/recruitment2.jpg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h5>Consectetur adipiscing elit. </h5>
                <p>
                    Curabitur ullamcorper mi ut rutrum gravida commodo tellus.
                </p>

            </div>
        </a>
    </div>
    <div class="col-md-4">
        <a href="/blogposts/blog3" class="widget widget-image">
        {/* <a href="services/Itlf/" title="read more" class="btn btn-round btn-info">Read More</a>  */}
            <div class="widget-image-cover">
                <img src="/recruitment3.jpg" alt=""/>
            </div>
            <div class="widget-image-info">
                <h5>Consectetur adipiscing elit. </h5>
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
  
export default Section3





























































































// import * as React from "react"
//  import { GatsbyImage } from "gatsby-plugin-image"
//  import { graphql } from "gatsby"
//  import 'bootstrap/dist/css/bootstrap.min.css';
// import { Carousel } from "react-bootstrap"
// import styled from "styled-components"
// import {Button} from '../../Button'
// import { useStaticQuery } from 'gatsby'
// import { push } from "object-path";
// //import { Carousel } from "bootstrap";
// import  "../../Style/global.css"
// import Wrapper from "../../UI/Wrapper";
 
// export default function Ourblogs({heading}) {
//   const data= useStaticQuery(
//     graphql`
// query{
//  allFile(
//     filter: {relativeDirectory: {eq: "ourblogs"}}
//     sort: {fields: base, order: ASC}
//   ) {
//     edges {
//       node {
//         id
//         name
//         base
//         relativePath
//         childImageSharp {
//            gatsbyImageData(
//             height: 480
//             width: 480
//             placeholder: BLURRED
//             quality: 70
//             blurredOptions: {width: 100}
//           )
//         }
//       }
//     }
//   }
// }
// `)


// function Section3(data) {
//   const ourservicesArray = []
//     data.allFile.edges.map(({node , index}) => { 
//       ourservicesArray.push(
//         <ProductCard key={index}>
//     <GatsbyImage className="blogs"
//     image={node.childImageSharp.gatsbyImageData} alt={node.base} css={`
//     height:80%;`}/>
        
//       <ProductInfo>   
      
//          <ProductTitle css={`color:white; font-size: 20px;`}>
//          {node.name}
//         </ProductTitle>
//            <Button to="/" primary="true" round="true" css={`
//            position:absolute;
//            top:300px;
//            font-size:14px;
//            `}>Show More</Button> 
             
//        </ProductInfo>
//        </ProductCard>
//       )
//  }) 
//        return ourservicesArray
//     }

//     console.log(data)
//     return (
      
//       <ProductsContainer>
//       <ProductsHeading>{heading}</ProductsHeading>
//    <ProductWrapper> {Section3(data)} </ProductWrapper >    {/*style={{display: "flex", flexDirection: "row"}}     */}
//       </ProductsContainer>
     
//     )
// }


// const ProductsContainer = styled.div`
// height:100%;
// /* padding:3rem calc((100vw - 1300px)/2); */
// background: white;
// color:#fff;
// background-color: black;
// `

// const ProductsHeading = styled.div`
// font-size: clamp(1.2rem,5vw,3rem);
// text-align: start;
// padding-left: 50px;
// padding-bottom: 2rem;
// color: #f26a2e;
// `
// const ProductWrapper = styled.div`
// display: grid;
// grid-template-columns:repeat(3,1fr);
// grid-gap:20px;
// justify-items:center;
// padding:0 3rem;
// height:50%;

// @media screen and (max-width: 1200px)
// {
// grid-template-columns: 1fr 1fr;
// }

// @media screen and (max-width: 868px)
// {
// grid-template-columns:1fr;
// }`

// const ProductCard = styled.div`
// line-height: 2;
// width: 100%;
// height: 500px;
// position: relative;
// border-radius: 10px;
// filter: brightness(70%);
// transition: 0.4s cubic-bezier(0.075,0.82,0.165, 1);

// &:hover {
// filter: brightness(100%);
// }

// @media screen and (max-width: 280px)
// {
// padding:0 1rem;
// }`

// const ProductInfo = styled.div`
// display:flex;
// flex-direction:column;
// align-items:flex-start;
// padding: 0 2rem;

// @media screen and (max-width: 400px)
// {
// padding:0 1rem;
// }`

// const TextWrap = styled.div`
// align-items: center;
// position: absolute;
// top: 375px;`

// const ProductTitle = styled.div`
// position:absolute;
// top: 220px;
// text-align: center;
// justify-content: center;
// `


