import React, { useContext } from 'react'
import FormLogIn from '../layout/FormLogIn'
import { AppContext } from '../context/appContext'
import { Redirect } from 'react-router-dom'
const LogIn = () => {
    const {state} = useContext(AppContext)

    return (
        <>
         {!state.authorized ?            
                <FormLogIn />
                : 
                <Redirect to={"/deliveries"}/>
            }
        </>
    )
}

export default LogIn
