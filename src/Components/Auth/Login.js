import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import APIURL from '../Helpers/environment';
// import {useHistory} from 'react-router-dom';
// import Auth from './Auth';

// const history = useHistory();

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        // console.log(username, password);

        // try {
        //     await Auth.signIn(email, password);
        //     userHasAuthenticated(true);
        //     history.push("/");
        //   } catch (e) {
        //     alert(e.message);
        //   }

        fetch(`${APIURL}/user/login`, {
            method: 'POST',
            body: JSON.stringify({user:{email: email, password: password}}),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(
            (response) => response.json()
        ).then((data) => {
            props.updateToken(data.sessionToken)
        })

    }

    return(
        <div>
            <h1>Login</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name ="email" value={email} placeholder='Email'/>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder='Password'/>
                </FormGroup>
                <Button type="submit" onClick={handleSubmit}>Login</Button>
            </Form>
        </div>
    )
}

export default Login;