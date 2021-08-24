 import * as React from "react"
 import { GatsbyImage } from "gatsby-plugin-image"
 import { graphql } from "gatsby"
 import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap"
import styled from "styled-components"
import {Button} from './Button'
import { useStaticQuery } from 'gatsby'
import { push } from "object-path";
//import { Carousel } from "bootstrap";
 
export default function Ourservices({heading}) {
  const data= useStaticQuery(
    graphql`
query{
 allFile(
    filter: {relativeDirectory: {eq: "ourservices"}}
    sort: {fields: base, order: ASC}
  ) {
    edges {
      node {
        id
        base
        relativePath
        childImageSharp {
           gatsbyImageData(
            height: 480
            width: 480
            placeholder: BLURRED
            quality: 70
            blurredOptions: {width: 100}
          )
        }
      }
    }
  }
}
`)


function Section2(data) {
  const ourservicesArray = []
    data.allFile.edges.map(({node , index}) => { 
      ourservicesArray.push(
        <ProductCard key={index}>
   
    <GatsbyImage image={node.childImageSharp.gatsbyImageData} alt={node.base} css={`
       height:100%;
       max-width:100%;
       position:absolute;
       border-radius:10px;
       filter:brightness(70%);
       tranisition: 0.4s cubic-bazier(0.075,0.82,0.165, 1);
       
       &:hover {
         filter: brightness(100%)
       }
        
    `}/>
    
      <ProductInfo>     
         <ProductTitle>
            Blogs
        </ProductTitle>
           <Button to="/" primary="true" round="true" css={`
           position:"absolute";
           top :420px;
           font-size:14px;
           `}>Show More</Button> 
       </ProductInfo>
       </ProductCard>
      )
 }) 
       return ourservicesArray
    }

    console.log(data)
    return (
      <ProductsContainer>
      <ProductsHeading>{heading}</ProductsHeading>
   <ProductWrapper> {Section2(data)} </ProductWrapper >    {/*style={{display: "flex", flexDirection: "row"}}     */}
      </ProductsContainer>
    )
}
    const ProductsContainer = styled.div`
min-height:100vh;
padding: 5rem calc((100vw - 1300px)/2);
background: white;
color:#fff;
background-color: black;
`

const ProductsHeading = styled.div`
font-size: clamp(1.2rem,5vw,3rem);
text-align: center;
margin-bottom: 5rem;
color: #fff;
`
const ProductWrapper = styled.div`
display: grid;
grid-template-columns:repeat(3,1fr);
grid-gap:20px;
justify-items:center;
padding:0 3rem;

@media screen and (max-width: 1200px)
{
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 868px)
{
  grid-template-columns: 1fr;
}`

const ProductCard = styled.div`
line-height: 2;
width: 100%;
height: 500px;
position: relative;
border-radius: 10px;
filter: brightness(70%);
tranisition: 0.4s cubic-bazier(0.075,0.82,0.165, 1);

&:hover {
  filter: brightness(100%);
}

@media screen and (max-width: 280px)
{
  padding:0 1rem;
}`

const ProductInfo = styled.div`
display: flex;
flex-direction: column;
algn-items: flex-start;
padding: 0 2rem;

@media screen and (max-width: 280px)
{
  padding:0 1rem;
}`

const TextWrap = styled.div`
display: flex;
align-items: center;
position: absolute;
top: 375px;`

const ProductTitle = styled.div`
font-weight: 400;
font-size: 1rem;
margin-left: 1 rem;
margin-left:0.5rem;
`
// const ProductImage=styled(GatsbyImage)`
// height:100%;
// max-width:100%;
// position:absolute;
// border-radius:10px;
// filter:brightness(70%);
// tranisition: 0.4s cubic-bazier(0.075,0.82,0.165, 1);

// &:hover {
//   filter: brightness(100%)
// }`
