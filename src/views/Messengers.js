import React, { useContext } from 'react'
import {  Redirect, useHistory } from 'react-router-dom'
import ActionButton from '../components/ActionButton';
import { AppContext } from '../context/appContext';
import Header from '../layout/Header'
import MessengersTable from '../layout/MessengersTable'
import {
    ButtonContainer,
  } from "../styles/components/ActionButton.styles";
const Messengers = () => {
    const history = useHistory()
    const {state} = useContext(AppContext)
    const toCreateMessenger = ()=> history.push('messengers/create')
    return (
  
        <>
        {state.authorized  ?
            <>
                <Header/>
                <ButtonContainer width="90%" margin="1rem auto" justifyContent="flex-end">
                    <ActionButton icon={"fas fa-plus-circle"} action={toCreateMessenger} text={"Añadir mensajero"}></ActionButton>
                </ButtonContainer>
                <MessengersTable/>
            </>
            :
            <Redirect to={"/"}/>
        }
        </>

  
    )
}

export default Messengers
