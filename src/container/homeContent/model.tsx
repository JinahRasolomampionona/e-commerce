import React from 'react';
import { Carousel, Button, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Phone from "../../assets/images/phone.jpg";
import panier from "../../assets/images/panier.jpg";
import star from "../../assets/images/star.jpg";

const Model: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="model">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="phone"
                        src={Phone}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <main className="text">
                            <h3>iPhone 8</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum <br />
                                Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <h5>
                                <span>10 K</span>ariary
                                <Button variant={"primary"}
                                    onClick={() => {
                                        navigate('/panier')
                                    }}
                                >
                                    <img src={panier} alt={""} className="panier" />
                                    BUY NOW
                                </Button>
                            </h5>
                            <img src={star} alt={""} className="stars" />
                            <Nav.Link href="#">more</Nav.Link>
                        </main>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="phone"
                        src={Phone}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <main className="text">
                            <h3>iPhone 8</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum <br />
                                Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <h5>
                                <span>10 K</span>ariary
                                <Button variant={"primary"}
                                    onClick={() => {
                                        navigate('/panier')
                                    }}
                                >
                                    <img src={panier} alt={""} className="panier" />
                                    BUY NOW
                                </Button>
                            </h5>
                            <img src={star} alt={""} className="stars" />
                            <Nav.Link href="#">more</Nav.Link>
                        </main>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="phone"
                        src={Phone}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <main className="text">
                            <h3>iPhone 8</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum <br />
                                Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            <h5>
                                <span>10 K</span>ariary
                                <Button variant={"primary"}
                                    onClick={() => {
                                        navigate('/panier')
                                    }}
                                >
                                    <img src={panier} alt={""} className="panier" />
                                    BUY NOW
                                </Button>
                            </h5>
                            <img src={star} alt={""} className="stars" />
                            <Nav.Link href="#">more</Nav.Link>
                        </main>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Model;