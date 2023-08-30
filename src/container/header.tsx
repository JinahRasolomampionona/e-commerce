import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import icons from '../assets/images/icons';
// import { Logo, login, panier } from "../assets/images";
import Logo from "../assets/images/logo.jpg";
import panier from "../assets/images/panier.jpg";
import login from "../assets/images/login.jpg";

const Header: React.FC<any> = (props: any) => {

    return (
        <div className="header">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid className="content">
                    <Nav.Item className={"sidebar-head"}>
                        <img src={Logo} alt={"e-commerce"} />
                    </Nav.Item>

                    <Form className={"d-flex"}>
                        <Form.Control
                            type={"search"}
                            placeholder={"Recherche..."}
                            aria-label={"Rechercher"}
                            id={"search-input"}
                        />
                        <Button
                            variant={"outline-primary"}
                            id={"search-button"}
                        >
                            <img src={icons.search} alt={"Go"} />
                        </Button>
                    </Form>

                    <main>
                        <Nav.Link href={"/panier"}>
                            <img src={panier} alt={""} />
                        </Nav.Link>
                        <Nav.Link href={"/auth"}>
                            <img src={login} alt={""} />
                        </Nav.Link>
                    </main>
                </Container>
            </Navbar>
            <hr />
            {props.children}
        </div>
    );
};

export default Header;