import React from 'react';
import { Button, TextField, FormControl } from '@material-ui/core';
import {Form} from 'reactstrap';
import { useState, useEffect } from 'react';
import APIURL from '../Helpers/environment';

export default function CreatePost (props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${APIURL}/post/create`, {
            method: 'POST',
            body: JSON.stringify({
                post: {
                    title: title,
                    body: body,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((res) => res.json())
            .then((postData) => {
                console.log(postData);
                // props.fetchPosts();
            })
    }

    return (
        <>
        <div>
        <Form onSubmit={handleSubmit}>
                <div>
                    <TextField label='Title' value={title} onChange={(e) => setTitle(e.target.value)} placeholder='title'/>
                </div>
                <div>
                    <TextField label='Body' value={body} onChange={(e) => setBody(e.target.value)} placeholder='body'/>
                </div>
          <Button onClick={handleSubmit}>Create Post</Button>
        </Form>
        </div>
        </>
    )

}