import React from 'react'
import { ModalContainer ,ModalContent,
    CloseIcon} from '../styles/components/Modal.styles'

const Modal = ({children,reference,closeFunction}) => {
    return (
        <ModalContainer ref={reference}>
            <ModalContent>
                <CloseIcon onClick={closeFunction} className="fas fa-times">

                </CloseIcon>
                {children}
            </ModalContent>
        </ModalContainer>
    )
}

export default Modal
