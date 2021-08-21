
const startSession = (state,user)=> {
    return {
        ...state,
        authorized:true,user
    }
}
const closeSession = (state) => {
    sessionStorage.removeItem('user')
    return {
        ...state,
        authorized:false, user:null
    }
}

export {
    startSession,
    closeSession
}