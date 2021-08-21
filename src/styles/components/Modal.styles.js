import styled, { keyframes } from "styled-components";
import { theme } from "../../constants";

const fadeIn = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }

`
const slideIn = keyframes`
    0%{
        top:-100%;
    }
    100%{
        top:0%;
    }

`

const ModalContainer = styled.div`
    width:100%;
    height:100vh;
    background-color:rgba(0,0,0,0.7);
    top:0;
    left:0;
    position:fixed;
    display:none;
    justify-content:center;
    align-items:center;
    animation: ${fadeIn} .4s ;
    z-index:100;
`
const ModalContent = styled.div`
    width:1000px;
    background-color:#fff;
    position:relative;
    padding:1rem;
    border-radius:.5rem;
    animation: ${slideIn} .8s ;
`
const CloseIcon = styled.i`
    position:absolute; 
    right:1.5rem;
    top:1rem;
    cursor: pointer;
    font-size:1.5rem;
    color:${theme.secondaryColor};
    transition:opacity  0.5s ease ;
    &:hover {
        opacity:0.8;
    }
`

export {
    ModalContainer,
    ModalContent,
    CloseIcon
}