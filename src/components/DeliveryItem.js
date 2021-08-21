import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Column, Row } from '../styles/commons.styles'
import ActionButton from './ActionButton'
import { ButtonContainer } from '../styles/components/ActionButton.styles'
import { useHistory } from 'react-router-dom'
import {  getPetitionerWithDelivery } from '../services/http-petitioners'
import {  updateDelivery } from '../services/http-deliveries'
import { getReceiverWithDelivery } from '../services/http-receivers'
import MoreInformation from './MoreInformation'
import Modal from './Modal'
import { getMessengerWithDelivery } from '../services/http-messengers'

const DeliveryItem = ({ delivery}) => {
    const history = useHistory()
    const [state, setState] = useState(delivery.state)
    const [petitioner, setPetitioner] = useState({})
    const [receiver, setReceiver] = useState({})
    const [messenger, setMessenger] = useState({})
    const [viewDetails, setViewDetails] = useState(false)
    const [mounted, setMounted] = useState(true)
    const ModalReference = useRef();

    const retrievePetitioner = useCallback(async ()=> {
        try {
            const responsePetitioner = await getPetitionerWithDelivery(delivery.id)
            setPetitioner(responsePetitioner.data)
        } catch (error) {
            console.log(error)
        }
    },[delivery])

    const retrieveReceiver = useCallback(async ()=> {
        try {
            const responseReceiver = await getReceiverWithDelivery(delivery.id)
            setReceiver(responseReceiver.data)
        } catch (error) {
            console.log(error)
        }
    },[delivery])

    const retrieveMessenger = useCallback(async ()=> {
        try {
            const responseMessenger = await getMessengerWithDelivery(delivery.id)
            setMessenger(responseMessenger.data)
        } catch (error) {
            console.log(error)
        }
    },[delivery])
    
    useEffect(() => {
        if(mounted){
            retrievePetitioner()
            retrieveReceiver()
            retrieveMessenger()
        }
        return (()=>{
            setMounted(false)
        })
    }, [retrievePetitioner,retrieveReceiver,retrieveMessenger,mounted])

    const goToEdit = ()=>{
        history.push(`/deliveries/edit/${delivery.id}`)
    }

    const closeDelivery = async ()=>{
    
        delivery = {...delivery, state:!delivery.state}
        setState(true)
        try {
            await updateDelivery(delivery.id,messenger.id, delivery)
            
        } catch (error) {
            console.log(error)
        }
        
    }

    const changeStateModal = ()=> {

        ModalReference.current.style.display = !viewDetails?"flex":"none"
        setViewDetails(!viewDetails)

    }
    return (
        <>
        <Row>    
            <Column>{delivery.id}</Column>
            <Column>{petitioner.name}</Column>
            <Column>{state ? "Cerrado":"Pendiente"}</Column>
            <Column>
                <ButtonContainer width="100%" margin=" 0" justifyContent="center">
                    <ActionButton marginRight={"1rem"}  icon={"fas fa-eye"} text={"ver detalles"} action={changeStateModal}/>
                    <ActionButton marginRight={"1rem"}  icon={"fas fa-edit"} text={"Editar"} action={goToEdit}/>
                    <ActionButton disabled={state?true:false} icon={"fas fa-times"} text={"Cerrar domicilio"} action={closeDelivery}/>
                </ButtonContainer>
        
            <Modal closeFunction={changeStateModal} reference={ModalReference}>

                <MoreInformation delivery={delivery} petitioner={petitioner} receiver={receiver} messenger={messenger}/>
            </Modal>
             
    
            </Column>
        </Row>
        
        </>
    )
}

export default DeliveryItem
