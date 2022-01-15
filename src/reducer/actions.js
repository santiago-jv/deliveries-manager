
const startSession = (state,user)=> {
    return {
        ...state,
        authorized:true,user
    }
}
const closeSession = (state) => {
    localStorage.removeItem('token')
    return {
        ...state,
        authorized:false, user:null
    }
}

export {
    startSession,
    closeSession
}