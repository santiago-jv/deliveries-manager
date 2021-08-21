import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom'
import { AppContext } from '../context/appContext'
import FormDeliveries from '../layout/FormDeliveries'

const CreateDelivery = (props) => {
    const {state} = useContext(AppContext)

    return (
        <>
            {
               state.authorized  ? <FormDeliveries id={props.match.params.id }/> :<Redirect to={"/"}/>
            }
        </>
    )
}

export default CreateDelivery
