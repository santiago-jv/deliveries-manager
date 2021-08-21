import authHeader from "./auth-header";
import http from "./http-commons";

const getDeliveries =  () => http.get('deliveries', {headers: authHeader()} )

const getDelivery =  (id) =>  http.get(`deliveries/${id}`,{headers: authHeader()});

const createDelivery =  (idMessenger, idPetitioner,idReceiver,delivery) =>  http.post(`deliveries/messenger/${idMessenger}/petitioner/${idPetitioner}/receiver/${idReceiver}`, delivery,{headers: authHeader()});

const paginateDeliveries = (page)=> http.get(`deliveries/query?page=${page}&limit=5`,{headers: authHeader()})

const updateDelivery = (id,idMessenger,delivery) => http.put(`deliveries/${id}/messenger/${idMessenger}`,delivery,{headers: authHeader()})

const deleteDelivery = (id) => http.delete(`deliveries/${id}`,{headers: authHeader()})
export  {
    getDeliveries,
    paginateDeliveries,
    getDelivery,
    createDelivery,
    updateDelivery,
    deleteDelivery
}