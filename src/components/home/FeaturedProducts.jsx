import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class FeaturedProducts extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>FEATURED PRODUCT</h2>
                        <p>Some of Our Exclusive Collection, You May Like</p>
                    </div>
                    <Row>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                        <Link to="/productdetails">
                            <Card className="image-box card">
                                <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kqjtd3k0/mobile/o/4/x/c11-2021-rmx3231-realme-original-imag4j4yrdt7d9cj.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Link>
                        </Col>

                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card">
                                <img className="center" src="https://rukminim1.flixcart.com/image/416/416/ksnjp8w0/mobile/h/u/u/c21y-rmx3261-realme-original-imag65kcafgjqknz.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card">
                                <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kqjtd3k0/mobile/s/b/8/c11-2021-rmx3231-realme-original-imag4j4xkqchhfxk.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card">
                                <img className="center" src="https://rukminim1.flixcart.com/image/416/416/ktx9si80/mobile/q/a/c/narzo-50a-rmx3430-realme-original-imag75kybaer8scz.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card">
                                <img className="center" src="https://rukminim1.flixcart.com/image/416/416/kklhbbk0/mobile/h/i/q/m3-mzb087ain-poco-original-imafzxf8zqkcgwfv.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>
                            <Card className="image-box card">
                                <img className="center" src="https://rukminim1.flixcart.com/image/416/416/ktx9si80/mobile/d/n/p/narzo-50a-rmx3430-realme-original-imag75kymngzyabx.jpeg?q=70" />
                                <Card.Body>
                                    <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </Container>
            </Fragment>
        )
    }
}

export default FeaturedProducts

