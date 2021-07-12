import React from 'react';
import {useParams} from 'react-router-dom';
import APIURL from '../../Helpers/environment';

const PostEdit = (props) => {
    const [editComment, setEditComment] = useState('');
    const {id} = useParams();

    const editComment = (event) => {
        event.preventDefault();

        fetch(`${APIURL}/comment/edit/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                comment: {
                    comment: comment
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }).then((res) => {
            // props.fetchComment();
            // props.updateOff();
        })
    }
    
    return (
        <>
        <div>
        <Form onSubmit={editComment}>
                <div>
                    <TextField label='Comment' value={editComment} onChange={(e) => setEditComment(e.target.value)} />
                </div>
          <Button onClick={editComment}>Update Comment</Button>
        </Form>
        </div>
        </>
    )
}

export default PostEdit;