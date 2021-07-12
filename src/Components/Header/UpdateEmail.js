import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { TextField } from '@material-ui/core';
import {useParams} from 'react-router-dom';

const UpdateEmail = (props) =>{
    const [newEmail, setNewEmail] = useState('');
    const {id} = useParams();
    const emailEdit = (event, email) =>{
        event.preventDefault();
        fetch(`http://localhost:3001/user/${id}`,{
            method: 'PUT',
            body: JSON.stringify({ 
                user:{
                    email: newEmail
                }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then ((res)=>{
            console.log(newEmail);
            props.fetchEmail();
            props.updateEmailOff();
        })
    } 
    return(
        <>
        <Modal isOpen={true}>
            <ModalHeader>Update your email</ModalHeader>
            <ModalBody>
                <Form onSubmit={emailEdit}>
                    <div>
                    <TextField id='outlined-basic' label='New Email' variant='outlined' value={newEmail} onChange={(e) =>setNewEmail(e.target.value)} />
                    </div>
                </Form>
            </ModalBody>
            <Button onClick={emailEdit}>Submit Changes</Button>
        </Modal>
        </>
    )
}
export default UpdateEmail;