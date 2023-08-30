import React from 'react';
import { Container, Nav } from "react-bootstrap";

const Navbar: React.FC = () => {

    return (
        <Container fluid className={"navbars"}>
            <Nav.Link className="active" href="/home">Home</Nav.Link>
            <Nav.Link href="/categories/smartphone">Smartphone</Nav.Link>
            <Nav.Link href="/categories/tablette">Tablette</Nav.Link>
            <Nav.Link href="/categories/basic">Basic</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
        </Container>
    )
}
export default Navbar;