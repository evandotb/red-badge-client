import React from 'react'
import {Button} from 'reactstrap'

export default function Logout(props) {

  return (

     <>

          <Button onClick={props.clearSession} className='logOut'>Log Out</Button>
       
    </>

    );
  }