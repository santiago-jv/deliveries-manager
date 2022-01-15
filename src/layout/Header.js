import React, { useContext } from "react";
import logo from "../assets/images/logo.svg"

import user from "../assets/images/user.svg"
import ActionButton from "../components/ActionButton";
import { activeStyles } from "../constants";
import { AppContext } from "../context/appContext";
import { Image } from "../styles/commons.styles";
import { Text } from "../styles/layout/Form.styles";
import {
  HeaderElement,
  LogoContainer,
  Logo,
  MainTitle,
  Navigation,
  Link,
  Profile, ProfileInfo 
} from "../styles/layout/Header.styles";

const Header = () => {
  const {state,dispatch} = useContext(AppContext)
  return (
    <HeaderElement>
      <LogoContainer>
        <Logo src={logo} />
        <MainTitle>
            Domicilios Santa Marta
        </MainTitle>
      </LogoContainer>
        <Navigation >
          <Link activeStyle={activeStyles} to="/deliveries">Domicilios</Link>
          <Link activeStyle={activeStyles} to="/messengers">Mensajeros</Link>
          <Profile >
          <Image width={"3rem"} height={"3rem"} src={user}></Image>
            <ProfileInfo>
              <Image width={"4rem"} height={"4rem"} src={user}></Image>
              <Text margin={"1rem 0 .3rem  0"} weight={"bold"} size={"1.1rem"}>{state.user.name}</Text>
              <Text margin={" 0 0 2rem 0"} weight={"bold"} size={"1.1rem"} >{state.user.email}</Text>
              <ActionButton action={()=>dispatch({type:"CLOSE_SESSION"})} bg={"#ffa460"} icon={"fas fa-sign-out-alt"} text={"Cerrar sesión"}></ActionButton>
            </ProfileInfo>
          </Profile>
        </Navigation>
    </HeaderElement>
  );
};

export default Header;
