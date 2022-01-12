import styled from "styled-components"
import { Link } from "gatsby"


export const Button = styled(Link)`
<<<<<<< HEAD
 background : ${({ primary}) => (primary ? "#f26a2e" : "white")};
 white-space: nowrap;
 padding: ${({ big}) => (big ? "16px 30px" : "10px 22px")};
=======
 background : ${({ primary}) => (primary ? "linear-gradient(90deg, rgba(213,48,44,1) 50%, rgba(210,51,91,1) 100%)": "white")};
 white-space: nowrap;
 padding: ${({ big}) => (big ? "5px 5px" : "10px 10px")};
>>>>>>> ee763c7 (first commit)
 color:#fff;
 font-size:${({ big}) => (big ? "10px" : "13px")};
 outline: none;
 border: none;
<<<<<<< HEAD
 min-width: 35px;
=======
 min-width: 25px;
>>>>>>> ee763c7 (first commit)
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