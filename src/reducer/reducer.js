import { closeSession, startSession } from "./actions"

const reducer = (state,action)=>{
    switch (action.type){
        case "START_SESSION":
            return startSession(state,action.value)
        case "CLOSE_SESSION":
            return closeSession(state)
        default:
            return state
    }
}

export {
    reducer
}