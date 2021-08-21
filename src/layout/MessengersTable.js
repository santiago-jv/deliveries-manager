import React, {  useCallback, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Loader from '../layout/Loader'
import MessengerItem from '../components/MessengerItem'
import { getMessengers, paginateMessengers } from '../services/http-messengers'
import { Table, Thead, Row, Column, Tbody, Message } from "../styles/commons.styles"

const MessengersTable = () => {
    const [messengers, setMessengers] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const messengersPerPage = 5;
    const [quantity, setQuantity] = useState(null)
    const [loading, setLoading] = useState(false)
    
    const retrieveMessengers = useCallback (async () => {
        setLoading(true)
        if(!quantity) {   
            try{
                const response = await getMessengers()
                setQuantity(response.data.length)
            }
            catch(error){
                console.log(error)
            }
            
        }
     
        try{

            const responseMessengers = await paginateMessengers(currentPage)
            setMessengers(responseMessengers.data)
        }
        catch(error) {
            console.log(error)
        }
        setLoading(false)

    },[currentPage,quantity])

    useEffect(() => {
        retrieveMessengers()
    }, [retrieveMessengers])

    const handlePageClick = ({ selected: selectedPage }) => {
        setCurrentPage(selectedPage);
    };
    
    return( 
    <> 
        {messengers.length > 0 ?
            <>
            <Table>
                <Thead>
                    <Row>
                        <Column>ID</Column>
                        <Column>Mensajero</Column>
                        <Column>Nombre</Column>
                        <Column>Cédula</Column>
                        <Column>Número de contacto</Column>
                        <Column>Placa</Column>
                        <Column>Dirección</Column>
                        <Column>Opciones</Column>
                    </Row>
                </Thead>
                <Tbody>
                    {messengers.map(messenger=>
                        <MessengerItem key={messenger.id} messenger = {messenger}></MessengerItem>
                    )}
                </Tbody>
            
            </Table>
                <ReactPaginate
                    pageCount={Math.ceil(quantity/messengersPerPage)
                    }
                    onPageChange={handlePageClick}
                    previousLabel={<i className="fas fa-chevron-left"></i>}
                    nextLabel={<i className="fas fa-chevron-right"></i>}
                    activeClassName={'active'}
                    pageClassName={'page'}
                    activeLinkClassName={'activeLink'}
                    pageLinkClassName={'linkPage'}
                    nextLinkClassName={"nextPage"}
                    previousClassName={'page'}
                    nextClassName={'page'}
                    previousLinkClassName={'previousPage'}
                    containerClassName={'pageContainer'}
                ></ReactPaginate>
            </>
            :
            <>
                {loading?
                    <Loader/> 
                
                :
                    <Message>
                        No hay mensajeros añadidos.
                    </Message>  
                }     
            </>
        }   
    </>

    )
    
   
            
       
    
}

export default MessengersTable