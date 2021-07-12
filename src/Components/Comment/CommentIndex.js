import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import CreateComment from './CreateComment';
import CommentTable from './CommentTable'
import EditComment from './EditComment';
import APIURL from '../../Helpers/environment';

const CommentIndex = (props) => {
    const [comment, setComment] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [commentToUpdate, setCommentToUpdate] = useState({});
    const fetchComment = () => {
        fetch(`${APIURL}/comment/`,{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }) .then((res) => res.json())
        .then((commentData) => {
            setComment(commentData)
        })
    }

        useEffect(() => {
            fetchComment();
        })

        const updateComment = (comment) => {
            setCommentToUpdate(comment);
            console.log(comment);
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
                    <CreateComment fetchComment={fetchComment} token={props.sessionToken}/>
                    </Col>
                    <Col md="9">
                        <CommentTable comment={comment} updateComment={updateComment} updateOn={updateOn} fetchComment={fetchComment} token={props.sessionToken}/>
                    </Col>
                    {updateActive ? <EditComment commentToUpdate={commentToUpdate} updateOff={updateOff} token={props.sessionToken} fetchComment={fetchComment}/> : <></>}
                </Row>
            </Container>
    )
    }


export default CommentIndex;