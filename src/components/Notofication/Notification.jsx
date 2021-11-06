import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Card,Button,Modal } from 'react-bootstrap'

class Notification extends Component {

    constructor(){
        super();
        this.state={
             show:false,
        }
   }

    handleClose = () =>{
        this.setState({ show:false})
    };  

    handleShow = () => {
         this.setState({ show:true })
    }; 

}

export default Notification