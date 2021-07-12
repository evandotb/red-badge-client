import React from 'react';
import { Button, TextField, FormControl } from '@material-ui/core';
import APIURL from '../../Helpers/environment';

export default function CreateComment (props) {
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`${APIURL}/comment/create`, {
            method: 'POST',
            body: JSON.stringify({
                comment: {
                    comment: comment
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((res) => res.json())
            .then((commentData) => {
                console.log(commentData);
                // props.fetComment();
            })
    }

    return (
        <>
        <div>
        <Form onSubmit={handleSubmit}>
                <div>
                    <TextField label='Comment' value={comment} onChange={(e) => setComment(e.target.value)} />
                </div>
          <Button onClick={handleSubmit}>Create Comment</Button>
        </Form>
        </div>
        </>
    )

}