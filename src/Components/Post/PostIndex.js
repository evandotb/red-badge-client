import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import CreatePost from './CreatePost';
import PostTable from './PostTable'
import EditPost from './EditPost';
import {useParams} from 'react-router-dom';

const PostIndex = (props) => {
    const [post, setPost] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [postToUpdate, setPostToUpdate] = useState({});
    const {id} = useParams();

    const fetchPost = () => {
        fetch(`http://localhost:3001/post/`,{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }) .then((res) => res.json())
        .then((postData) => {
            setPost(postData)
        })
    }

        useEffect(() => {
            fetchPost();
        })

        const updatePost = (post) => {
            setPostToUpdate(post);
            console.log(post);
        }

        const updateOn = () => {
            setUpdateActive(true);
        }

        const updateOff = () => {
            setUpdateActive(false);
        }

        return(
            <Container>
                <Row>
                    <Col md="3">
                    <CreatePost fetchPost={fetchPost} sessionToken={props.sessionToken}/>
                    </Col>
                    <Col md="9">
                        <PostTable post={post} updatePost={updatePost} updateOn={updateOn} fetchPost={fetchPost} sessionToken={props.sessionToken}/>
                    </Col>
                    {updateActive ? <EditPost postToUpdate={postToUpdate} updateOff={updateOff} token={props.sessionToken} fetchPost={fetchPost}/> : <></>}
                </Row>
            </Container>
    )
    }


export default PostIndex;