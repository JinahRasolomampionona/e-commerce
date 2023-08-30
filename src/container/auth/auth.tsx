import React from 'react';
import { Form, Col, Row } from "react-bootstrap";

const Auth: React.FC<any> = (props: any) => {

    return (
        <div className='container-fluid auth'>
            <Row>
                <Col md={{ span: 4, offset: 4 }} sm={12}>

                    <Form className='form-login'>
                        <div className='image'>
                            {/* image */}
                        </div>
                        {props.children}
                    </Form>
                </Col>
            </Row>
        </div >
    )
}
export default Auth;