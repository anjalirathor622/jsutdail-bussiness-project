//import area
//import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import URL from '../Helper/url';
import swal from 'sweetalert';

//defination area
export default function Login() {
  //hooks area
  //const [payload,setPayload] = useState();

  //function defination area
  let loginUser = ()=>{
      //alert("hi");

      let id = document.querySelector('input[name="username"]').value;
      let pswd = document.querySelector('input[name="password"]').value;
      console.log(id)
      console.log(pswd)
      
      //console.log(payload)
      fetch(`${URL}/api/auth/local`,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          "identifier": id,
          "password": pswd
          })
      })
      .then(res=>res.json())
      .then((data)=>{
        if(data['jwt']!==undefined){
          //console.log('okoko')
          //save token to local storage
          window.localStorage.setItem('jwt_token',data['jwt'])

          window.location.href = '/business-register';
        }else{
          //console.log('errr')
          swal("Can't login!", `User is not created,${data.error.message} `, "error")
        }
        console.log(data);
      })
      .catch(err=>{console.log(err)})
    
    }

  //return area
  return (
    <>
      <h1 className='text-center'>Login page</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> username</Form.Label>
          <Form.Control name="username" type="text" placeholder="Enter username" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword" >
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="button" onClick={()=>{ loginUser() }}>
          Submit
        </Button>
      </Form>
    </>
  )
}
