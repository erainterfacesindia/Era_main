import styled from "styled-components"
import { Link } from "gatsby"


export const Button = styled(Link)`
 background : ${({ primary}) => (primary ? "#f26a2e" : "white")};
 white-space: nowrap;
 padding: ${({ big}) => (big ? "16px 40px" : "10px 32px")};
 color:#fff;
 font-size:${({ big}) => (big ? "13.5px" : "15px")};
 outline: none;
 border: none;
 min-width: 35px;
 cursor: pointer;
 text-decoration: none;
 transition: 0.3s !important;
 border-radius:10px;
 &:hover {
     /* background: ${({ primary}) => (primary ? "#f26a2e" : "#fff")}; */
     background: #333;
     color: #fff;
     /* transform: translateY(-2px); */
 }
`
// border-radius:${({ round }) => (round ? "50px":"none")};