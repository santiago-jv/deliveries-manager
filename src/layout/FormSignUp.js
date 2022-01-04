import React, { useState } from "react";
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
  TextError
} from "../styles/layout/Form.styles.js";
import ActionButton from "../components/ActionButton.js";
import { signUp } from "../services/http-authentication.js";
import { useHistory } from "react-router-dom";
import { validateDataInSignUp } from "../validations"
import {toast}from "react-toastify"
const FormSignUp = () => {
  const [error, setError] = useState(null)
  const [formSignUp , setFormSignUp  ] = useState({})
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  const handleInput = (event)=> {
    setFormSignUp({
          ...formSignUp,
          [event.target.name]: event.target.value
      })
  }
  const sendCredentials = async (event)=> {
    setLoading(true)
    event.preventDefault()
    const credentials = {
      username:formSignUp.username, 
      email:formSignUp.email, 
      password:formSignUp.password,
      roles:['admin','user']
    }
    try {
      if(validateDataInSignUp({...credentials,repeatedPassword:formSignUp.repeatedPassword})){
        const response = await  signUp(credentials)
        
        toast.success(response.data.message)
        history.push('/')
      }
      else {
        setError("Las contraseñas no son iguales.")
      }
    }
    catch(error) {
      console.log(error);
    }
    setLoading(false)
  }
  return (
    <FormContainer>
      <Title>Registro</Title>
      <Paragraph>Registre sus credenciales.</Paragraph>
      <FormElement method="POST" autoComplete='off' onSubmit={sendCredentials}>

        <FieldContainer>
          <Label>Nombre de usuario</Label>
          <FormField placeholder="Ingrese su nombre de usuario" required name="username" onChange={handleInput} type="text"></FormField>
        </FieldContainer>

        <FieldContainer>
          <Label>Correo Electrónico</Label>
          <FormField placeholder="Ingrese su correo electrónico" required name="email" onChange={handleInput} type="email"></FormField>
        </FieldContainer>

        <FieldContainer>
          <Label>Contraseña</Label>
          <FormField minLength={10} placeholder="Ingrese su contraseña" required name="password" onChange={handleInput} type="password"></FormField>
        </FieldContainer>

        <FieldContainer>
          <Label>Confirma la contraseña</Label>
          <FormField minLength={10} placeholder="Ingrese nuevamente su contraseña" required name="repeatedPassword" onChange={handleInput} type="password"></FormField>
        </FieldContainer>

        {error && <TextError>{error}</TextError>}
        
        <ActionButton disabled={loading} bg={'#ffa460'} type={"submit"} icon={"fas fa-save"} text={"Registrarse"}></ActionButton>
        <Text>Ya tienes una cuenta? ingresa <Link to={"/"}>aquí</Link></Text>
    </FormElement>
    </FormContainer>
  );
};

export default FormSignUp;
