import styled,{keyframes} from "styled-components";
import { theme } from "../../constants";
const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }

`
const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`
const TheLoader = styled.div`
    border: 10px solid rgba(0, 0, 0, 0.1);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border-left-color:${theme.secondaryColor};;
    animation: ${spin} 1s linear infinite ;

`


export {
    LoaderContainer,
    TheLoader
}