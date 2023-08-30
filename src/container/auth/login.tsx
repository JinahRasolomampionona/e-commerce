import React, { useState } from 'react';
import Auth from './auth';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import icons from '../../assets/images/icons';

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <Auth>
                <div className="form-input">
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label><br></br>
                        <Form.Control type="email" 
                                     value={email}
                                     onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Mot de passe</Form.Label>
                        <InputGroup>
                            <Form.Control type={show ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputGroup.Text>
                                <img src={show? icons.eye : icons.eyeSlash} alt={""} 
                                    className="icon" 
                                    onClick={() => setShow(!show)} 
                                />
                            </InputGroup.Text>
                        </InputGroup>
                    </Form.Group>
                    <Button variant={"primary"}
                        onClick={() => {
                            navigate('/listStudent')
                        }}
                    >
                        Se connecter
                    </Button>
                    <div className="linkfield">
                        <Link to="/auth/forgot-password">Mot de passe oublié ?</Link>
                    </div>
                </div>
            </Auth>
        </div>
    );
};

export default Login;