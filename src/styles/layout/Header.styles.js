import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../constants";

const HeaderElement = styled.header`
    width: 100%;
    height: 5rem;
    display:flex;
    justify-content: space-around;
    box-shadow:0 0px 13px 0px rgba(0,0,0,.3);

`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;

`;
const Logo = styled.img`
    width:4rem;
`;
const MainTitle = styled.h1`
    margin-left:1rem;
    font-size:1.9rem;
    color:${theme.primaryTextColor};
    font-style:italic;

`;
const Navigation = styled.nav`
    display:flex;
    align-items: center;

`;

const Link = styled(NavLink)`
  text-decoration: none;
  color:${theme.primaryTextColor};
  font-size:1.1rem;
  margin-left:2rem;
  transition:color .4s ease;
  font-weight:bold;
  &:hover{
    color:${theme.secondaryColor};
  }
`;
const Profile = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left:4rem;
   
`;
const ProfileInfo = styled.div`
    display:none;
    flex-direction:column;
    align-items:center;
    position: absolute;
    bottom:-15.5rem;
    right:-6rem;
    background-color: #f9f9f9;
    padding:2rem 3rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,.3);
    border-radius:.4rem;
    width:100vw;
    max-width:400px;
    z-index: 1;
    ${Profile}:hover & {
        display: flex;
    }
`;


export { HeaderElement, LogoContainer, Logo, MainTitle, Navigation, Link, Profile, ProfileInfo };
