import styled from "styled-components";
import { theme } from "../constants";
const Container = styled.div`
    overflow-x:auto;
    width:100%;
`;
const Table = styled.table`
    width:90%;
    margin:auto;
    border-collapse:collapse;
    border-style:none;
 
   `;
const Thead = styled.thead`
    background-color:${theme.primaryTextColor};
    color:#fff ;
    
`;
const Row = styled.tr`
   border:.05rem solid ${theme.primaryTextColor};

`;
const Column = styled.td`
    text-align:center;
    font-weight:bold;   
    padding:.7rem;
    border-bottom:.05rem solid ${theme.primaryTextColor};

`;
const Tbody = styled.tbody`
    color:${theme.primaryTextColor};
`;
const Image = styled.img `
    width:${props=>props.width};
    height:${props=>props.height};
`
const Message = styled.h3`
    color:${theme.primaryTextColor};
    text-align:center;
`
export { Table, Thead, Row, Column, Tbody,Image,Message ,Container};
