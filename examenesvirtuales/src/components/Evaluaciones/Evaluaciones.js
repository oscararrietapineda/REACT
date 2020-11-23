import React from 'react';
import './Evaluaciones.css';
import Header from '../Header/Header';
import Preguntas from '../Preguntas/Preguntas';
import Respuestas from '../Respuestas/Respuestas';
function Evaluaciones(props) {
    return (
      
      <div>
        <Header />
        <div className="Contenido">
         <h1> Evaluaci&oacute;n: {props.codigo} <br>
         </br> 
         <h4> Tema {props.descripcion} -Fecha Limite {props.fechaLimite}</h4></h1> 
        </div> 
     
        <Preguntas contenido="De acuerdo con el concepto de Llaves Primarias indique cual es  la respuesta correcta" 
        Valor="5" Id="1"/>

        <Respuestas valor = '0' Respuesta = "Puede ser Nulas" idPregunta= "1" /> 
        <Respuestas valor = '5' Respuesta = "No puede ser Nulas y no deben repetirse" idPregunta= "1" /> 
        <Respuestas valor = '0' Respuesta = "No puede ser Nulas pero pueden repetirse" idPregunta= "1" /> 

       <Preguntas contenido="Que funcion NO sirve para eliminar los espacios en blanco" 
        Valor="15" Id="2"/>

        <Respuestas valor = '0' Respuesta = "Replace" idPregunta= "2" /> 
        <Respuestas valor = '0' Respuesta = "Trim()" idPregunta= "2" /> 
        <Respuestas valor = '5' Respuesta = "'%%'" idPregunta= "2" /> 

        <Preguntas contenido="Indique tipo de dato puede almacenar un monto de un pago" 
        Valor="10" Id="3"/>
        <Respuestas valor = '0' Respuesta = "nVarchar" idPregunta= "3" /> 
        <Respuestas valor = '0' Respuesta = "Date" idPregunta= "3" /> 
        <Respuestas valor = '5' Respuesta = "Money" idPregunta= "3" /> 
      </div>
    );
  }
  
export default Evaluaciones;
