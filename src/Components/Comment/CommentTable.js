import React from 'react';
import { Table, Button } from "reactstrap";
import {useParams} from 'react-router-dom';

const CommentTable = (props) => {
    const {id} = useParams();
    const commentPost = (post) => {
        fetch(`http://localhost:3001/comment/delete/${id}` , {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(() => props.fetchComment())
    }
    const commentMapper = () => {
        return props.comment.map((comments, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{comments.id}</th>
                    <td>{comments.comment}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.updateComment(comments); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deleteComment(comments)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        
        <Table striped>
            <tbody>
            {commentMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default CommentTable;