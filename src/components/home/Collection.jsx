import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap' 

class Collection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>PRODUCT COLLECTION</h2>
                        <p>Some of Our Exclusive Collection, You May Like</p>
                    </div>
                    <Row>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://rukminim1.flixcart.com/image/580/696/kfyasnk0/top/4/g/u/s-12009108-fila-original-imafwfwhfg4hbrvh.jpeg?q=50" />
                                <Card.Body>
                                    <p className="product-name-on-card">Casual Regular Sleeves Printed Women Pink Top</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://rukminim1.flixcart.com/image/580/696/krz97rk0/top/h/z/7/xxl-lilly3baqua-max-original-imag5npjdkfkvkqc.jpeg?q=50" />
                                <Card.Body>
                                    <p className="product-name-on-card">Casual Regular Sleeves Printed Women Blue, White Top</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://rukminim1.flixcart.com/image/580/696/kqb8pzk0/top/t/9/6/l-00142-ct-dl-fashion-original-imag4cfggagzym55.jpeg?q=50" />
                                <Card.Body>
                                    <p className="product-name-on-card">Casual Regular Sleeves Printed Women Black Top</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://rukminim1.flixcart.com/image/580/696/klfhk7k0/top/0/5/z/l-136-black-aahwan-original-imagyk6f5ehuw9rz.jpeg?q=50" />
                                <Card.Body>
                                    <p className="product-name-on-card">Women Nighty  (Black)</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://rukminim1.flixcart.com/image/580/696/kvba7bk0/top/v/m/z/m-polo-top-fulsleeve-pink-sightbomb-original-imag88xbznfjk2kc.jpeg?q=50" />
                                <Card.Body>
                                    <p className="product-name-on-card">Casual Regular Sleeves Printed Women Pink Top</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://rukminim1.flixcart.com/image/580/696/kvjuufk0/top/8/i/3/m-aw21-ww167-mwb-original-imag8f3s46xsyrta.jpeg?q=50" />
                                <Card.Body>
                                    <p className="product-name-on-card">Casual Regular Sleeves Printed Women Blue, White Top</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://rukminim1.flixcart.com/image/580/696/kvcpn680/top/i/x/7/xl-liza-u-purvaja-original-imag89ngcwenmuhf.jpeg?q=50" />
                                <Card.Body>
                                    <p className="product-name-on-card">Casual Regular Sleeves Printed Women Black Top</p>
                                    <p className="product-price-on-card">Price : $120</p>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className="p-0" key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
                            <Card className="image-box card w-100">
                                <img className="center w-75" src="https://rukminim1.flixcart.com/image/580/696/kvba7bk0/top/n/4/m/xs-net-sequin-top-aditry-fashion-original-imag88rh4vupxwyt.jpeg?q=50" />
                                <Card.Body>
                                    <p className="product-name-on-card">Women Nighty  (Black)</p>
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

export default Collection
