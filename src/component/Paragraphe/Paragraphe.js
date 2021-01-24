import React from 'react';
import './Paragraphe.module.css'

const paragraphe = (props) => {
    return (
       <p style={{color:`${props.color}`}}>
           {props.children}
       </p>
    )
}

export default paragraphe;