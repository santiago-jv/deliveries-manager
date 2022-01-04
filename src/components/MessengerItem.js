import React from 'react'
import { Column, Row,Image } from '../styles/commons.styles'
import ActionButton from './ActionButton'
import men from "../assets/images/men.svg"
import women from "../assets/images/women.svg"
import { ButtonContainer } from '../styles/components/ActionButton.styles'
import { useHistory } from 'react-router-dom'

const MessengerItem = ({messenger}) => {
    const history = useHistory()

    const goToEdit = ()=>{
        history.push(`/messengers/edit/${messenger.id}`)
    }
    return (
        <Row>
                        
            <Column>{messenger.id}</Column>
            <Column>
                <Image width={"3.5rem"} height={"3rem"} src={messenger.gender==="M"?men:women}/>
            </Column>
            <Column>{messenger.name}</Column>
            <Column>{messenger.identificationCard}</Column>
            <Column>{messenger.numberCell}</Column>
            <Column>{messenger.motorcyclePlate}</Column>
            <Column>{messenger.address}</Column>
            <Column>
                <ButtonContainer width="100%" margin=" 0" justifyContent="center">
                    <ActionButton icon={"fas fa-edit"} text={"Editar"} action={goToEdit}/>
                </ButtonContainer>
            </Column>
            
        </Row>
    )
}

export default MessengerItem
