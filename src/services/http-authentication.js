import http from "./http-commons";

const signUp = (credentials) => http.post('/auth/signup',credentials)

const login = (credentials) => http.post('/auth/login', credentials)


export  {
    signUp,
    login
}