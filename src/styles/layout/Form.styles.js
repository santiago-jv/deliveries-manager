import styled from "styled-components";
import { theme } from "../../constants";
import {Link as link} from "react-router-dom"

const FormContainer = styled.div`
    background-color:#F8F8F8;
    border:2px solid #dad8d8;
    border-radius:5px;
    margin:4rem auto;
    max-width:500px;
    padding:1.5rem 4rem;
`

const Title = styled.h1`
    font-size:1.8rem;
    margin-bottom:.3rem;
    color:${theme.primaryTextColor};
    text-align:${props=>props.align?props.align:"left"};
`
const Paragraph = styled.p`
    color:${theme.primaryTextColor};
`
const FormElement = styled.form`

`

const FieldContainer = styled.div`
    margin:1rem 0;
    display:${props=>props.display?props.display:'block'};

`

const Label = styled.label`
    font-weight:bold;
    display: ${props=>props.display? props.display:"block"};
    margin-bottom: ${props=>props.margin? props.margin:"0.5rem"};;
    color:${theme.primaryTextColor};
    

`

const FormField = styled.input`
    width:${props=>props.width?props.width : '100%'};
    height:2rem;
    outline:none;
    border:2px solid #dbd9d9;
    padding-left:.4rem;
    color:${theme.primaryTextColor};
    font-size:1rem;
    &:focus {
        box-shadow:0px 0px 6px 1px ${theme.secondaryColor};
        border:2px solid ${theme.secondaryColor};

    }

`
const Button = styled.button`
    width:${props=>props.width?props.width:'100%'};
    padding:.4rem 0;
    outline:none;
    border-radius:10px;
    border:none;
    background:#3d8cea;
    font-weight:bold;
    color:#fff;
    cursor:pointer;
    font-size:1.02rem;
    transition:opacity 0.4s ease;
    &:hover {
        opacity:.8;
    }
`
const FieldsInline = styled.div`
   display:flex;
   justify-content:space-between;
   width:100%;
   margin:-.8rem 0 1rem 0;
   align-items:flex-start;
`
const TextArea = styled.textarea`
    width:100%;
    height:5rem;
    resize:none;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-size:1rem;
    outline:none;
    border:2px solid #dbd9d9;
    padding-left:.4rem;
    color:${theme.primaryTextColor};
    font-size:1rem;
    &:focus {
        box-shadow:0px 0px 6px 1px ${theme.secondaryColor};
        border:2px solid ${theme.secondaryColor};

    }
`
const SubTitle = styled.h2`
    color:${theme.primaryTextColor};


`

const Select = styled.select`
    width:${props=>props.width?props.width:'50%'};
    font-size:1rem;
    outline:none;
    border:2px solid #dbd9d9;
    padding:.3rem 0;
    padding-left:.4rem;
    color:${theme.primaryTextColor};
    font-size:1rem;
    &:focus {
        box-shadow:0px 0px 6px 1px ${theme.secondaryColor};
        border:2px solid ${theme.secondaryColor};

    }

`
const Option = styled.option`
    padding:.2rem 0;

`
const Container = styled.article`
    width:70%;
    margin:1rem auto;
`
const Text = styled.p`
    font-size:${props=>props.size?props.size:""};
    font-weight:${props=>props.weight?props.weight:""};
    margin:${props=>props.margin?props.margin:""};
    color:${theme.primaryTextColor};
`
const Link = styled(link)`
    color:${theme.secondaryColor};
    font-weight:bold;
`
const Check = styled.input`
    padding-right:.4rem;

`
const CheckContainer  = styled.div`
    display:inline-flex;
    margin-right:2rem;
    align-items:center;

`

const TextError = styled.p`
    padding:.5rem 1rem;
    background-color:#f8d7da;
    color: #721c24;
    font-weight:bold;
    border-radius:.25rem;
    border-color: #f5c6cb;
`

export{ 
    FormContainer,
    Title,
    Paragraph,
    FormElement,
    FieldContainer,
    Label,
    FormField,
    Button,
    FieldsInline,
    Container,
    TextArea,
    SubTitle,
    Select,
    Option,
    Text,
    Link,
    Check,
    CheckContainer,
    TextError
}