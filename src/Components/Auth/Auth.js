import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';
import './Auth.css';

const Auth = (props) => {
    return(
        <Container className='auth-container'>
            <h1>Welcome to this forum!</h1>
            <Row>
                <Col md="6">
                    <Login updateToken={props.updateToken}/>
                </Col>
                <Col md="6" className="login-col">
                    <Signup updateToken={props.updateToken}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Auth;