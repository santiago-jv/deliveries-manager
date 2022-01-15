import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Column, Row } from '../styles/commons.styles'
import ActionButton from './ActionButton'
import { ButtonContainer } from '../styles/components/ActionButton.styles'
import { useHistory } from 'react-router-dom'
import {  changeIsCompleteOfDelivery } from '../services/http-deliveries'
import MoreInformation from './MoreInformation'
import Modal from './Modal'
import { getMessenger } from '../services/http-messengers'

const DeliveryItem = ({ delivery}) => {
    const history = useHistory()
    const [isComplete, setIsComplete] = useState(delivery.isComplete)
    const petitioner = delivery.petitioner
    const receiver= delivery.receiver
    const [messenger, setMessenger] = useState({})
    const [viewDetails, setViewDetails] = useState(false)
    const [mounted, setMounted] = useState(true)
    const ModalReference = useRef();

   const retrieveMessenger = useCallback(async()=>{
    
        const response = await getMessenger(delivery.messenger)
        setMessenger(response.data)
   },[delivery.messenger])
    
    useEffect(() => {
        if(mounted){
            retrieveMessenger()
        }
        return (()=>{
            setMounted(false)
        })
    }, [mounted,retrieveMessenger])

    const goToEdit = ()=>{
        history.push(`/deliveries/edit/${delivery.id}`)
    }

    const closeDelivery = async ()=>{
    

        setIsComplete(true)
        try {
            await changeIsCompleteOfDelivery(delivery.id, {isComplete:!delivery.isComplete})
            
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
            <Column>{isComplete ? "Cerrado":"Pendiente"}</Column>
            <Column>
                <ButtonContainer width="100%" margin=" 0" justifyContent="center">
                    <ActionButton marginRight={"1rem"}  icon={"fas fa-eye"} text={"ver detalles"} action={changeStateModal}/>
                    <ActionButton marginRight={"1rem"}  icon={"fas fa-edit"} text={"Editar"} action={goToEdit}/>
                    <ActionButton disabled={isComplete?true:false} icon={"fas fa-times"} text={isComplete?"Domicilio cerrado":"Cerrar domicilio"} action={closeDelivery}/>
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
