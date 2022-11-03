import React from 'react';
import classes from './Modal.module.css';
import Auxl from '../../../hoc/Auxl'
import Backdrop from './Backdrop/Backdrop';

const Modal = (props) => (
    <Auxl>
        <Backdrop show={props.show} clicked={props.modalClosed}/>
    <div 
    className={classes.Modal} 
    style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-10)' ,
        opacity: props.show ? '1' : '0'
    }}
    >
        {props.children}
    </div>
    </Auxl>
  );

export default Modal;

