import React, { useContext } from 'react'
import {  Redirect, useHistory } from 'react-router-dom'
import ActionButton from '../components/ActionButton'
import { AppContext } from '../context/appContext'
import DeliveriesTable from '../layout/DeliveriesTable'
import Header from '../layout/Header'
import { getMessengers } from '../services/http-messengers'
import { ButtonContainer } from '../styles/components/ActionButton.styles'
import {toast} from "react-toastify"
const Deliveries = () => {
    const history = useHistory()
    const {state} = useContext(AppContext)
    const toCreateDelivery = async () => {
        const response = await getMessengers()
        if(response.data.length > 0) {

            history.push('/deliveries/create');
        }
        else{
            toast.warn("Debes crear un mensajero antes")
            history.push('/messengers/create');

        }
    }

    return (
        <>
            {state.authorized  ? 
            <>
            <Header/>
            <ButtonContainer width="90%" margin="1rem auto" justifyContent="flex-end">
                <ActionButton icon={"fas fa-plus-circle"} action={toCreateDelivery} text={"Añadir domicilio"}></ActionButton>
            </ButtonContainer>
            <DeliveriesTable/>
            </>
             :
            <Redirect to={"/"}/>
            }
        </>
    )
}

export default Deliveries
