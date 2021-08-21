import React from 'react'
import{ 
    InfoContainer,
    PetitionerInformation,
    ReceiverInformation,
    MessengerInformation,
    Title,
    P, 
    Info,
    } from "../styles/components/MoreInformation.styles"
const MoreInformation = ({delivery, petitioner,receiver,messenger}) => {
    return (
        <>
        <InfoContainer>
            <PetitionerInformation>
                <Info>

                <Title>Información del solicitante</Title>
                <P><strong>Nombre: </strong>{petitioner.name}</P>
                <P><strong>Número de contacto: </strong>{petitioner.numberCell}</P>

                <P><strong>Dirección: </strong>{petitioner.address}</P>
                <P><strong>Hora de recogida: </strong>{delivery.pickUpTime}</P>
                <P><strong>Observación: </strong>{delivery.description}</P>


                <MessengerInformation>
                <Title>Información del mensajero</Title>
                <P><strong>Nombre: </strong>{messenger.name}</P>
                <P><strong>Número de contacto: </strong>{messenger.numberCell}</P>
                </MessengerInformation>
                </Info>
 

            </PetitionerInformation>
            <ReceiverInformation>
                <Info>
                <Title>Información del destinatario</Title>
                <P><strong>Nombre: </strong>{receiver.name}</P>
                <P><strong>Número de contacto: </strong>{receiver.numberCell}</P>

                <P><strong>Dirección: </strong>{receiver.address}</P>
                <P><strong>Hora de entrega: </strong>{delivery.deliveryTime}</P>
                </Info>
            
            </ReceiverInformation>

        </InfoContainer>
     
       </>
    )
}

export default MoreInformation
