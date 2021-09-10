import React from 'react'
import {Button} from './Button'
import Wrapper from '../components/UI/Wrapper'
import * as Styles from '../components/Pages/Home/HeroSection/Section1.module.css'
import '../components/Style/global.css'

const Callus = () => {
    return (
      <div class="p-3 mb-2 bg-danger bg-gradient text-white">
      <Wrapper>
        <div className={Styles.container + " row"}>
            <div className="col-lg-6 col-sm-12">
              <h1>Next ERA Of Your Business, Start Here.  </h1>
            </div> 
          <div className="col-lg-6 col-sm-12" css={` padding:20px; `}>
            <Button as="button" type="submit" primary="true" round="true" big="true"css={`
           font-size:25px;
           background-color:white;
           color:#f26a2e;
            `}>Callus Now</Button>  
        </div>      
      </div>
      </Wrapper>
      </div>
    )
}

export default Callus

// const CallusContainer = styled.div `
// width: 100%;
// background: black;
// color:#fff;
// padding: 5rem clac((100vw - 1300px)/2);
// height:50%;
// position:relative;

// `


// // const HeroContent= styled.div`
// // z-index: 3;
// //  height: calc(100vh -80px);
// //  max-height: 100%;
// // padding: 0rem calc((100vw - 1300px)/2);`

// const callusContent=styled.div`
// display:grid;
// grid-template-columns:1fr 1fr;
// padding:0 2rem;

// @media screen and (max-width:768px)
// {
//     grid-template-columns:1fr;
// }`

// const ColumnOne=styled.div`
// display:grid;
// grid-template-rows:1fr 1fr;
// `
// const ColumnTwo=styled.div`
// display:grid;
// grid-template-columns:1fr 1fr;
// grid-gap:10px;

// @media screen and (max-width: 768px)
// {
//     display:grid;
//     flex-direction: column;
//     padding: 0 1 rem;
// }
// `

// const HeroH1 = styled.h1`
// font-size: 3rem;
// `

// const CallusContainer =styled.div`
// background: #e85555;
// justify-content:center;
// display:grid;
// grid-template-columns:repeat(2,1fr);
// grid-gap:20rem;
// align-items:center;
// height: 23vh;
// padding:0 1rem;
// position: relative;
// margin-top: -80px;
// color:#fff;

// h1 {
//     margin-left:100px;
//    margin-top:5px;
//     font-size: 2.3rem;
    
// }
// @media screen and (max-width: 1200px)
// {
//   grid-template-columns: 1fr 1fr;
// }

// @media screen and (max-width: 868px)
// {
//   grid-template-columns: 1fr;
// }
// }
// `

    
// // const callusContent = styled.div`
// // display: flex;
// // flex-direction: column;
// // algn-items: center;
// // padding: 0 2rem;


// // h1 {
// //     text-align: center;
// //     margin-bottom:1 rem;
// //     font-size: 1 rem;
// //     padding: 0 1 rem;
// // }
// // @media screen and (max-width: 768px)
// //  {
// //      display:flex;
// //      flex-direction: column;
// //      padding: 0 1 rem;
// //  }

// // `
 