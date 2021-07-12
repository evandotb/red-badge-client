import React from 'react';
import { Table, Button } from "reactstrap";
import {useParams} from 'react-router-dom';
import EditPost from './EditPost';
import APIURL from '../Helpers/environment';

const PostTable = (props) => {
    const {id} = useParams();
    const deletePost = (post) => {
        fetch(`${APIURL}/post/delete/${post.id}` , {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(() => props.fetchPost())
    }
    const postMapper = () => {
        return props.post.map((posts, index) => {
            return(
                <tr key={index}>
                    <th scope="row">{posts.id}</th>
                    <td>{posts.title}</td>
                    <td>{posts.body}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.updatePost(posts); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deletePost(posts)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }
    return(
        <>
        
        <Table striped>
            <tbody>
            {postMapper()}
            </tbody>
        </Table>
        
        </>
    )
}

export default PostTable;