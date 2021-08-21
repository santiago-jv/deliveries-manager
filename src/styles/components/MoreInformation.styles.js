import styled from "styled-components";
import { theme } from "../../constants";


const InfoContainer = styled.section`
    display:flex;
    width:100%;
    padding:2rem;
    justify-content:space-around;
    margin-top:2rem;
`

const PetitionerInformation = styled.article`
    display:flex;
    width:50%;
`

const ReceiverInformation = styled.article`
    display:flex;
    width:50%;

`

const MessengerInformation = styled.article`
    margin-top:4rem;
`
const Title= styled.h3`
    margin:0;
    font-size:1.4rem;
    text-align:left;
`
const P = styled.p`
    font-size:1.1.rem;
    color:${theme.primaryTextColor};
    text-align:left;
`
const Info = styled.div`
 margin:0 2rem;
`
const Map = styled.img`
    width:12rem;
    height:15rem;
`
export {
    InfoContainer,
    PetitionerInformation,
    ReceiverInformation,
    MessengerInformation,
    Title,
    P,
    Info,
    Map
}