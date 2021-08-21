import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AppContext } from '../context/appContext'
import FormMessengers from '../layout/FormMessengers'

const CreateMessenger = (props) => {
    const {state} = useContext(AppContext)

    return (
        <>
            {
               state.authorized  ? <FormMessengers id={props.match.params.id }/> :<Redirect to={"/"}/>
            }
        </>
    )
}

export default CreateMessenger
