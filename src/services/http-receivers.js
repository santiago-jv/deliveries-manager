import authHeader from "./auth-header";
import http from "./http-commons";

const getReceiver =  (id) =>  http.get(`receivers/${id}`,{headers: authHeader()});

const getReceiverWithDelivery=  (id) =>  http.get(`receivers/delivery/${id}`,{headers: authHeader()});

const createReceiver =  (receiver) =>  http.post(`receivers`, receiver,{headers: authHeader()});

const updateReceiver = (id,receiver) => http.put(`receivers/${id}`,receiver,{headers: authHeader()})

const deleteReceiver = (id) => http.delete(`receivers/${id}`,{headers: authHeader()})
export  {
    getReceiver,
    getReceiverWithDelivery,
    createReceiver,
    updateReceiver,
    deleteReceiver
}