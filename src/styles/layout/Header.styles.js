import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../constants";

const HeaderElement = styled.header`
    width: 100%;
    height: 6rem;
    display:flex;
    justify-content: space-around;
    box-shadow:0 0px 5px 0px black;

`;

const LogoContainer = styled.div`
    display: flex;
    align-items: center;

`;
const Logo = styled.img`
    width:4.5rem;
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
    align-items: center;
    justify-content: center;
    flex-direction: column;
    display: none;
    position: absolute;
    bottom:-15.5rem;
    right:-6rem;
    background-color: #f9f9f9;
    padding:2rem 3rem;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    border-radius:.4rem;
    z-index: 1;
    ${Profile}:hover & {
        display: flex;
    }
`;


export { HeaderElement, LogoContainer, Logo, MainTitle, Navigation, Link, Profile, ProfileInfo };
