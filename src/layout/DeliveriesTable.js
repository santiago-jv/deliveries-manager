import React, {  useCallback, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import ActionButton from '../components/ActionButton'
import DeliveryItem from '../components/DeliveryItem'
import Loader from '../layout/Loader'
import { getDeliveries, paginateDeliveries } from '../services/http-deliveries'
import { Table, Thead, Row, Column, Tbody,Message } from "../styles/commons.styles"
import { ButtonContainer } from '../styles/components/ActionButton.styles'

const DeliveriesTable = () => {
    const [deliveries, setDeliveries] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const deliveriesPerPage = 5;
    const [quantity, setQuantity] = useState(null)
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState("todos")
    const changeFilter = (type)=> {
        setFilter(type)
        retrieveDeliveries()
    }

    const handlePageClick = ({ selected: selectedPage }) => {
        
        setCurrentPage(selectedPage);
    };
    
    const retrieveDeliveries =  useCallback(async () => {
        setLoading(true)
        
        if(!quantity) {   
            try {             
                const response = await getDeliveries()
                setQuantity(response.data.length)
            } catch (error) {
                console.log(error);
            }
    
        }
        try {
            const responseDeliveries  = await paginateDeliveries(currentPage )

            if(filter === "todos") {
                setDeliveries(responseDeliveries.data)
            }else if(filter === "pendiente") {
                setDeliveries(responseDeliveries.data.filter(delivery => !delivery.state))
            }
            else if(filter === "cerrado"){
                setDeliveries(responseDeliveries.data.filter(delivery => delivery.state))
            }
        } catch (error) {
            console.log(error);
        }

        setLoading(false)
    }, [currentPage,quantity,filter],)

    useEffect(() => {
        retrieveDeliveries()
    }, [retrieveDeliveries])

    return( 
        <>     
        <ButtonContainer margin={"1rem auto"} width={"90%"}>
            <ActionButton bg={filter==="todos"&&'#ffa460'} marginRight={"1rem"} marginIcon={'0'} text={"Todos"} action={()=>changeFilter("todos")}></ActionButton>
            <ActionButton bg={filter==="pendiente"&&'#ffa460'} marginRight={"1rem"} marginIcon={'0'} text={"Pendientes"} action={()=>changeFilter("pendiente")}> </ActionButton>
            <ActionButton bg={filter==="cerrado"&&'#ffa460'} text={"Cerrados"} marginIcon={'0'} action={()=>changeFilter("cerrado")}></ActionButton>
        </ButtonContainer>    
        {loading?<Loader/> : 
                
            deliveries.length>0?
            <>
                <Table>
                    <Thead>
                        <Row>
                            <Column>ID</Column>
                            <Column>Solicitante</Column>
                            <Column>Estado</Column>
                            <Column>Opciones</Column>
                        </Row>
                    </Thead>
                    <Tbody>
                        {deliveries.map(delivery=>
                            <DeliveryItem key={delivery.id} delivery = {delivery}></DeliveryItem>
                        )}
                    </Tbody>
                
                </Table>
                
                </>
                
                :   <Message>
                {filter==="todos" ? 
                "No hay domicilios añadidos."
                
                :
                "No hay datos con el filtro "+ filter + "."
            }
            </Message> 
        }
  
        <ReactPaginate
            pageCount={Math.ceil(quantity/deliveriesPerPage)}
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

    )
  
    
}

export default DeliveriesTable