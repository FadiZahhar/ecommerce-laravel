import React, { Component, Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class NewArrival extends Component {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this)
    }
    next() {
        this.slider.slickNext();
    }
    previous() {
        this.slider.slickPrev();
    }
    render() {
        var settings = {
            dots: false,
            infinite: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 3000,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <Fragment>
                <Container className="text-center" fluid={true}>
                    <div className="section-title text-center mb-55">
                        <h2>NEW ARRIVAL &nbsp;

                            <a className="btn btn-sm ml-2 site-btn" onClick={this.previous} >
                                <i className="fa fa-angle-left"></i>
                            </a>
                            &nbsp;
                            <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                                <i className="fa fa-angle-right"></i>
                            </a>
                        </h2>
                        <p>Some of Our Exclusive Collection, You May Like</p>
                    </div>
                    <Row>
                        <Slider ref={c => (this.slider = c)} {...settings}>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://rukminim1.flixcart.com/image/580/696/kk76wsw0/watch/y/e/h/skw2765-skagen-original-imafzhhzady2synb.jpeg?q=50" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://rukminim1.flixcart.com/image/580/696/kk76wsw0/watch/9/q/t/ar1909-emporio-armani-original-imafzh9r5dxdczyv.jpeg?q=50" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://rukminim1.flixcart.com/image/580/696/ki96c280-0/watch/u/t/q/4047-pk-fogg-original-imafy35tnreazuge.jpeg?q=50" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://rukminim1.flixcart.com/image/580/696/kflftzk0-0/watch/l/w/p/twtl10100-timex-original-imafwyr5zcv2bkwg.jpeg?q=50" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://rukminim1.flixcart.com/image/580/696/ksxjs7k0/watch/z/k/m/1-87037pl03w-sonata-women-original-imag6eyzymzcrjpp.jpeg?q=50" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://rukminim1.flixcart.com/image/580/696/kk76wsw0/watch/q/i/j/ax5602-armani-exchange-original-imafzhhqsqpa9hzu.jpeg?q=50" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://rukminim1.flixcart.com/image/580/696/ko1smfk0/watch/p/f/s/set-143-white-women-watch-setcos-original-imag2hcq9cq65z89.jpeg?q=50" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>
                                    </Card.Body>
                                </Card>
                            </div>
                            <div>
                                <Card className="image-box card">
                                    <img className="center" src="https://rukminim1.flixcart.com/image/580/696/k4irzbk0/watch/g/k/b/lcs-4675-lois-caron-original-imafkev9bnhgewhg.jpeg?q=50" />
                                    <Card.Body>
                                        <p className="product-name-on-card">Realme C11 (Cool Grey, 32 GB)</p>
                                        <p className="product-price-on-card">Price : $120</p>
                                    </Card.Body>
                                </Card>
                            </div>
                        </Slider>
                    </Row>
                </Container>


            </Fragment >
        )
    }
}

export default NewArrival
