import authHeader from "./auth-header";
import http from "./http-commons";


const getpetitioner=  (id) =>  http.get(`petitioners/${id}`,{headers: authHeader()});

const getPetitionerWithDelivery=  (id) =>  http.get(`petitioners/delivery/${id}`,{headers: authHeader()});

const createPetitioner =  (petitioner) =>  http.post(`petitioners`, petitioner,{headers: authHeader()});

const updatePetitioner = (id,petitioner) => http.put(`petitioners/${id}`,petitioner,{headers: authHeader()})

const deletePetitioner = (id) => http.delete(`petitioners/${id}`,{headers: authHeader()})
export  {
    getpetitioner,
    getPetitionerWithDelivery,
    createPetitioner ,
    updatePetitioner ,
    deletePetitioner,
    
}