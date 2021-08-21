import React, { useContext } from 'react'
import FormSignUp from '../layout/FormSignUp'
import { AppContext } from '../context/appContext'
import { Redirect } from 'react-router-dom'
const SignUp = () => {
    const {state} = useContext(AppContext)

    return (
        <>
            {!state.authorized ?            
                <FormSignUp />
                : 
                <Redirect to={"/deliveries"}/>
            }
        </>
    )
}

export default SignUp
