import React, { useReducer } from 'react'
import { initialState } from '../constants';
import { reducer } from '../reducer/reducer';

export const AppContext = React.createContext();

export default function ContextProvider ({children})  {
    const [state, dispatch] = useReducer(reducer, initialState)

    const contextValues = {
        state,dispatch
    }
    return (
        <AppContext.Provider value={contextValues} >
            {children}
        </AppContext.Provider>
    )
}
