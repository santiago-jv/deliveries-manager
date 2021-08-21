import React, { useContext, useEffect, useState } from "react";
import {  useHistory } from "react-router-dom";
import ActionButton from "../components/ActionButton.js";
import { AppContext } from "../context/appContext.js";
import { login } from "../services/http-authentication.js";
import {
  FormContainer,
  Title,
  Paragraph,
  FormElement,
  FieldContainer,
  Label,
  FormField,
  Text,
  Link,
  TextError,
  
} from "../styles/layout/Form.styles.js";

const FormLogIn = () => {
  const [error, setError] = useState(null)
  const [mounted, setMounted] = useState(true)
  const [loading, setLoading] = useState(false)
  const [formLogIn , setFormLogIn  ] = useState({})
  const {dispatch}=useContext(AppContext)
  const history = useHistory()

  const handleInput = (e)=> {
    setFormLogIn({
          ...formLogIn,
          [e.target.name]: e.target.value
      })
  }
  const sendCredentials = async (event)=> {
    event.preventDefault()
    setLoading(true)
      try {
        if(mounted){
          const response = await login(formLogIn)
          sessionStorage.setItem('user',  JSON.stringify(response.data))
        
          alert("Bienvenido " + response.data.username)
          dispatch({type:"START_SESSION",value:response.data})
          history.push('/deliveries')
        }

     }catch(error) { 
        setError("Nombre de usuario y/o contraseña incorrecta(s).")
        
     }
     setLoading(false)
  }
  
  useEffect(() => {
    
    return () => {
      setMounted(false)
    }
  }, [])
  return (
    <FormContainer>
      <Title>Iniciar sesión</Title>
      <Paragraph>Ingrese sus credenciales de administrador.</Paragraph>
      <FormElement method="POST" 
          onSubmit={sendCredentials}
          autoComplete="off"
      >

        <FieldContainer>
          <Label>Nombre de usuario</Label>
          <FormField placeholder="Ingrese su nombre de usuario" required
            onChange={handleInput}
            name="username"
            type="text">
          </FormField>
        </FieldContainer>
        <FieldContainer>
          <Label>Contraseña</Label>
          <FormField placeholder="Ingrese su contraseña" required
            onChange={handleInput}
            name="password"
            type="password"
            minLength={10}>
          </FormField>
        </FieldContainer>

        {error && <TextError>{error}</TextError>}
        <ActionButton disabled={loading} bg={'#ffa460'} type={"submit"} icon={"fas fa-sign-in-alt"} text={"Ingresar"}></ActionButton>
        <Text>No tienes una cuenta? ingresa <Link to={"/register"}>aquí</Link></Text>

      </FormElement>
    </FormContainer>
  );

};

export default FormLogIn;
