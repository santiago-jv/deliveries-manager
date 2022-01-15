import authHeader from "./auth-header";
import http from "./http-commons";


const getDelivery =  (id) =>  http.get(`deliveries/${id}`,{headers: authHeader()});

const createDelivery =  (idMessenger, delivery) =>  http.post(`deliveries?messenger=${idMessenger}`, delivery,{headers: authHeader()});

const getDeliveries = ()=> http.get(`deliveries`,{headers: authHeader()})
const paginateDeliveries = (page)=> http.get(`deliveries?offset=${page}&limit=5`,{headers: authHeader()})

const updateDelivery = (id,delivery) => http.put(`deliveries/${id}`,delivery,{headers: authHeader()})

const deleteDelivery = (id) => http.delete(`deliveries/${id}`,{headers: authHeader()})
const changeIsCompleteOfDelivery = (id,data) => http.patch(`deliveries/${id}`,data,{headers: authHeader()})

export  {
    getDeliveries,
    getDelivery,
    createDelivery,
    updateDelivery,
    paginateDeliveries,
    deleteDelivery,
    changeIsCompleteOfDelivery
}