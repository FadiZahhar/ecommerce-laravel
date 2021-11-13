import React, {Component, Fragment} from 'react'

import { Container, Form,Row,Col,Button} from "react-bootstrap";

export class Contact extends Component {
    render(){
        return(
            <Fragment>
            <Container>
                <Row>
                    <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>
                        <Row className="text-center">
                            <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                <Form className="onboardForm">
                                    <h4 className="section-title-login">CONTACT WITH US</h4>
                                    <h6 className="section-sub-title">Please Contact With Us </h6>
                                    <input className="form-control m-2" type="text" placeholder="Enter Mobile Number"/>

                                    <input className="form-control m-2" type="email" placeholder="Enter Email"/>
                                    
                                    <input className="form-control m-2" type="text" placeholder="Enter Your Message"/>
                                    <Button className="btn btn-block m-2 site-btn-login">Send</Button>
                                
                                </Form>
                            </Col>
                            <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                            <br/><br/>
                            <p className="section-title-contact">
                            165 Franklin Street Montegomery,Near sherwood Mall. Al36104
Email:Support@easylearningbd.com
                            </p>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53011.81288679031!2d35.53350009095458!3d33.85774887285706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f3d62fd3871d5%3A0x5e9814c48fbf4d8c!2sMansourieh!5e0!3m2!1sen!2slb!4v1636587826047!5m2!1sen!2slb" 
                            width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Fragment>

        )
    }
}

export default Contact