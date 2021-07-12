import React from 'react';
import { useState, useEffect } from 'react';
// import { Title, Form, Button, TextField } from 'reactstrap';
import { Button, TextField, Title } from '@material-ui/core';
import { Form } from 'reactstrap';
import {useParams} from 'react-router-dom';
import APIURL from '../Helpers/environment';

const PostEdit = (props) => {
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');
    const {id} = useParams();

    const editPost = (event) => {
        event.preventDefault();

        fetch(`${APIURL}/post/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                post: {
                    title: editTitle,
                    body: editBody
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((res) => {
            // props.fetchPost();
            // props.updateOff();
        })
    }
    
    return (
        <>
        <div>
        <Form onSubmit={editPost}>
                <div>
                    <TextField label='Title' value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                </div>
                <div>
                    <TextField label='Body' value={editBody} onChange={(e) => setEditBody(e.target.value)} />
                </div>
          <Button onClick={editPost}>Update Post</Button>
        </Form>
        </div>
        </>
    )
}

export default PostEdit;