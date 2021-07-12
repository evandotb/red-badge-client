import React, {useState, useEffect} from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from '../Auth/Signup';
import Login from '../Auth/Login';
import UserTable from './UserTable';
import UpdateEmail from './UpdateEmail';
import {useParams} from 'react-router-dom';
import APIURL from '../Helpers/environment';

const UserIndex = (props) => {
    const [user, setUser] = useState([]);
    const [updateActive, setUpdateActive] = useState(false);
    const [userToUpdate, setUserToUpdate] = useState({});
    const {id} = useParams();

    const fetchUser = () => {
        fetch(`${APIURL}/user/`,{
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        }) .then((res) => res.json())
        .then((userData) => {
            setUser(userData)
        })
    }

        useEffect(() => {
            fetchUser();
        })

        const updateUser = (user) => {
            setUserToUpdate(user);
            console.log(user);
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
                    <Login fetchUser={fetchUser} token={props.sessionToken} />
                    <Register fetchUser={fetchUser} token={props.sessionToken} />
                    <Col md="9">
                        <UserTable user={user} updateUser={updateUser} updateOn={updateOn} fetchUser={fetchUser} token={props.sessionToken}/>
                    </Col>
                    {updateActive ? <UpdateEmail userToUpdate={userToUpdate} updateOff={updateOff} token={props.sessionToken} fetchUser={fetchUser}/> : <></>}
                </Row>
            </Container>
    )
    }


export default UserIndex;