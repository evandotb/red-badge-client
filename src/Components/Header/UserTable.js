// import React from 'react';

// const Username = (props) => (
//     <div>
//     {props.username}
//     </div>
// );

// export default Username;

import UpdateEmail from './UpdateEmail';
import React from 'react';
import { Table, Button } from "reactstrap";
import {useParams} from 'react-router-dom';



const UserTable = (props) => {

    const {id} = useParams();

    const deleteUser = (user) => {
        fetch(`http://localhost:3001/user/delete/${user.id}` , {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(() => props.fetchUser())
        .catch((err) => {console.log(err)})
    }
    const displayUser = () => {
        return props.users.map((users, index) => {
            return(
                    <tr key={index}>
                    <th scope="row">{users.id}</th>
                    <td>{users.email}</td>
                    <td>

                    <Button color="warning" onClick={() => {props.updateUser(users); props.updateOn()}}>Update Email</Button>
                <Button color="danger" onClick={() => {deleteUser(users)}}>Delete Account</Button>

                        {/* <Button color="warning" onClick={() => {props.updatePost(users); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {props.deletePost(users)}}>Delete</Button> */}
                    </td>
                </tr>
            )
        })
    }

    return(
        <>
        
        <Table striped>
            <tbody>
            {displayUser()}
            </tbody>
        </Table>
        
        </>
    )
}

export default UserTable;