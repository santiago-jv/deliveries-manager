import http from "./http-commons";

const signUp = (credentials) => http.post('/auth/register',credentials)

const login = (credentials) => http.post('/auth/login', credentials)

const refreshToken = (token) => http.post('/auth/refresh-token',{token})

export  {
    signUp,
    login,
    refreshToken
}