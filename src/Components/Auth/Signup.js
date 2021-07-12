import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';

const Signup = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    let handleSubmit = (event) => {
        event.preventDefault();
        // console.log(username, email, password);
        fetch('http://localhost:3001/user/register', {
            method: 'POST',
            body: JSON.stringify({user: {username: username, email: email, password: password}}),
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
            <h1>Signup</h1>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label htmlFor="username">Username</Label>
                    <Input value={username} onChange={(e) => setUsername(e.target.value)} name="username"  placeholder='Username'/>
                    </FormGroup>
                <FormGroup>
                    <Label htmlFor="username">Email</Label>
                    <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email} placeholder='Email'/>
                </FormGroup>
                <FormGroup>
                <Label htmlFor="password">Password</Label>
                <Input onChange={(e) => setPassword(e.target.value)} name="password" value={password} placeholder='Password'/>
                </FormGroup>
                <Button type="submit" onSubmit={handleSubmit}>Register</Button>
            </Form>
        </div>
    )
}

export default Signup;