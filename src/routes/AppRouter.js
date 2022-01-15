import React, { useCallback, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { AppContext } from '../context/appContext'
import { refreshToken } from '../services/http-authentication'
import CreateDelivery from '../views/CreateDelivery'
import CreateMessenger from '../views/CreateMessenger'
import Deliveries from '../views/Deliveries'
import LogIn from '../views/LogIn'
import Messengers from '../views/Messengers'
import SignUp from '../views/SignUp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Loader from '../layout/Loader'

const AppRouter = () => {
    const {dispatch} = useContext(AppContext)
    const [checking, setChecking] = useState(true)
    const history = useHistory()
    const retrieveUser = useCallback(async(token) => {
       try {
            const response = await refreshToken(token)
            localStorage.setItem('token', response.data.token)
            dispatch({type:'START_SESSION', value:response.data.admin})
            history.push('/deliveries')
        } catch (error) {
        }
        setChecking(false)
    },
    [dispatch,history])
    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            retrieveUser(token)
        }
        else  setChecking(false)
    }, [retrieveUser])
    return (
       <>
        {checking? <Loader/>: 
        <Router>
            <Switch>
                <Route exact sensitive path="/deliveries" component={Deliveries} />
                <Route exact sensitive path="/deliveries/create" component={CreateDelivery} />
                <Route exact sensitive path="/deliveries/edit/:id" component={CreateDelivery} />
                <Route exact sensitive path="/messengers" component={Messengers} />
                <Route exact sensitive path="/messengers/create" component={CreateMessenger} />
                <Route exact sensitive path="/messengers/edit/:id" component={CreateMessenger} />
                <Route exact sensitive path="/register" component={SignUp} /> 
                <Route exact sensitive path="/" component={LogIn} />
            </Switch>
        </Router>}
       </>
    )
}

export default AppRouter
