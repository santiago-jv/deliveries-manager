import authHeader from "./auth-header";
import http from "./http-commons";


const getMessengers =  () => http.get('messengers',{headers: authHeader()})

const getMessenger=  (id) =>  http.get(`messengers/${id}`,{headers: authHeader()});

const paginateMessengers = (page)=> http.get(`messengers/query?page=${page}&limit=5`,{headers: authHeader()})

const getMessengerWithDelivery=  (id) =>  http.get(`messengers/delivery/${id}`,{headers: authHeader()});

const createMessenger =  (messenger) =>  http.post(`messengers`, messenger,{headers: authHeader()});

const updateMessenger = (id,messenger) => http.put(`messengers/${id}`,messenger,{headers: authHeader()})

const deleteMessenger = (id) => http.delete(`messengers/${id}`,{headers: authHeader()})
export  {
    getMessengers,
    getMessenger,
    createMessenger,
    updateMessenger,
    deleteMessenger,
    getMessengerWithDelivery,
    paginateMessengers
}