import React, { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import ActionButton from '../components/ActionButton';
import { createMessenger, deleteMessenger, getMessenger, updateMessenger } from '../services/http-messengers';
import { ButtonContainer } from '../styles/components/ActionButton.styles';
import {  FieldContainer, FormElement, FormField, Label ,FieldsInline,Container, Title, Check,CheckContainer} from '../styles/layout/Form.styles';
import Header from './Header';
import {toast}from "react-toastify"

const FormMessengers = (props) => {
    const history = useHistory()
    const id =  props.id 
    const [formData, setFormData] = useState({
        name:"",
        address:"",
        motorcyclePlate:"",
        numberCell:"",
        identificationNumber:"",
        gender:""
    })

    const retrieveMessenger = useCallback(async () =>{
        try {
            const response = await getMessenger(id)
            setFormData(response.data)  
        } catch (error) {
            console.log(error);
        }
        
    },[id]) 

    useEffect(() => {
        if(id) 
            retrieveMessenger()
    }, [id,retrieveMessenger])
    
    const handleInput = (event)=>{
        setFormData({
            ...formData,
            [event.target.name]: typeof(event.target.value)  === 'number' ?event.target.value.toString() : event.target.value
        })
    }

    const sendMessenger = async()=> {
        let response;
        if(!id){
            try {
                response = await createMessenger(formData)
                toast.success(`El mensajero ${response.data.name} ha sido creado.`)
                goToBack()
                
            } catch (error) {
                console.log(error)
            }
        }
        else {
            try {
                response = await updateMessenger(id,formData)
                toast.success(`El mensajero ${response.data.name} ha sido actualizado.`)
                goToBack()
            } catch (error) {
                console.log(error);
            }
            
        }
            
    }
    const removeMessenger = async ()=> {
        const responseMessenger = await getMessenger(id)
        if(responseMessenger.data.deliveries.length === 0) {
            try {
            await deleteMessenger(id)
            toast.success(`El mensajero ${responseMessenger.data.name} ha sido Eliminado.`)
            
            goToBack()

            } catch (error) {
               console.log(error)
            }
        }
        else toast.warn("El mensajero tiene Domicilios por entregar.")

    }
    
    const goToBack = ()=> {
        history.push('/messengers')
    }
    return (
        <>
        <Header/>

        <Container>
            <Title align={"center"}>Agrega un mensajero</Title>
             <FormElement method="POST" autoComplete='off' onSubmit={(e)=>{e.preventDefault(); sendMessenger()}}>

                <FieldContainer>
                <Label htmlFor={"name"}>Nombre</Label>
                <FormField defaultValue={formData.name} placeholder="Ingrese el nombre del mensajero" required id={"name"} name="name" onChange={handleInput} type="text"></FormField>
                </FieldContainer>
                <FieldContainer>
                <Label htmlFor={"address"}>Direcci??n</Label>
                <FormField defaultValue={formData.address}  placeholder="Ingrese la direcci??n" required id={"address"} name="address" onChange={handleInput} type="text"></FormField>
                </FieldContainer>
                <FieldContainer>
                <Label>G??nero</Label>
                <CheckContainer>
                    <Label htmlFor={"male"} margin={"0"} display={"inline-block"} >Masculino</Label>
                    <Check type="radio" checked={formData.gender==="M"?true:false} defaultValue={"M"} required id={"male"} name="gender" onChange={handleInput} ></Check>

                </CheckContainer>
                <CheckContainer>
                    <Label htmlFor={"female"} margin={"0"} display={"inline-block"} >Femenino</Label>
                    <Check type="radio" checked={formData.gender==="F"?true:false}  defaultValue={"F"} required id={"female"} name="gender" onChange={handleInput} ></Check>
                </CheckContainer>

                </FieldContainer>
                
                
                <FieldsInline>

                    <FieldContainer>
                    <Label htmlFor={"identificationNumber"}>C??dula</Label>
                    <FormField defaultValue={formData.identificationNumber} pattern={/^[0-9]$/}  width={"200px"} placeholder="Ingrese la c??dula" required id={"identificationNumber"} name="identificationNumber" onChange={handleInput} type="number"></FormField>
                    </FieldContainer>
                
                    <FieldContainer >
                    <Label htmlFor={"numberCell"}>N??mero de contacto</Label>
                    <FormField title={"Debes intrducir un n??mero v??lido"} pattern={"[0-9]+"} defaultValue={formData.numberCell}  width={"200px"}  placeholder="Ingrese el celular" required id={"numberCell"} name="numberCell" onChange={handleInput} type="tel"></FormField>
                    </FieldContainer>
            
                    <FieldContainer>
                    <Label htmlFor={"motorcyclePlate"}>Placa de la moto</Label>
                    <FormField minLength={7} maxLength={7} defaultValue={formData.motorcyclePlate}  width={"200px"} placeholder="Ingrese la placa de la moto" required name="motorcyclePlate" id="motorcyclePlate" onChange={handleInput} type="text"></FormField>
                    </FieldContainer>
                </FieldsInline>
            

                <ButtonContainer>
                <ActionButton marginRight={"1rem"} type={"submit"} icon={"fas fa-save"} text={id?"Actualizar":"Guardar"}></ActionButton>
                {id && <ActionButton marginRight={"1rem"}  icon={"fas fa-trash-alt"} text={"Eliminar mensajero"} action={removeMessenger}></ActionButton>}
                <ActionButton icon={"fas fa-times-circle"} text={"Cancelar"} action={goToBack}></ActionButton>

                </ButtonContainer>
            </FormElement>
            
        </Container>
        </>
    )
}

export default FormMessengers
