//import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import swal from 'sweetalert';
import URL from '../Helper/url';


export default function Register() {
  //hooks area
  //const [payload,setPayload] = useState()

  //function definaton area
  let registerUser = ()=>{
    //alert('okok');
    let un = document.querySelector('input[name="username"]').value;
    let eml = document.querySelector('input[name="email"]').value;
    let pswd = document.querySelector('input[name="password"]').value;
    console.log(un)
    console.log(eml)
    console.log(pswd)

    //console.log(payload);

    fetch(`${URL}/api/auth/local/register`,{
      method:"POST",
      headers: {
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        "username": un,
        "email": eml,
        "password": pswd
      })
    })
    .then(res=>res.json())
    .then((data)=>{
      console.log(data);
      if(data.data===null){
        swal("bad job!", `User is not created,${data.error.message} `, "error");
      }
      else{
        swal("Good job!", "User created successfully", "success");
      }
      
    })
    .catch((err)=>{console.log(err)})
  }

  //return area
  return (
    <>
      <h1 className='text-center'>Register page</h1>
      <Form>
      <Form.Group className="mb-3" >
        <Form.Label>username</Form.Label>
        <Form.Control name="username" type="text" placeholder="Enter username" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="button" onClick={()=>{ registerUser()}}>
        Submit
      </Button>
    </Form>
    </>
  )
}
