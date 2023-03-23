import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import URL from '../Helper/url';
import swal from 'sweetalert';

export default function BusinessRegister() {
  //hooks
  const [cities,setCities] = useState([]);
  const [countries,setCountries] = useState([]);
  const [states,setStates] = useState([]);
  const [businessCategories,setBusinessCategories]  = useState([]);
  useEffect(() => {
    
    //business-category api calling
    fetch(`${URL}/api/bussinesses?populate=*`)
    .then((res)=>res.json())
    .then((businessData)=>{

        console.log('bussinesss ------->',businessData.data);
        setBusinessCategories(businessData.data)
    })
    .catch((err)=> err);

    //country api calling
    fetch(`${URL}/api/countries`)
    .then((res)=>res.json())
    .then((countryData)=>{

        console.log('countries ------->',countryData.data);
        setCountries(countryData.data)
    })
    .catch((err)=> err);
    /*
    //state api calling
    fetch(`${URL}/api/states`)
    .then((res)=>res.json())
    .then((stateData)=>{
      console.log('states ------->',stateData.data);
      setStates(stateData.data)
    })
    .catch((err)=> err);

    //city api calling
    fetch(`${URL}/api/cities`,{
      method: 'GET',
    })
    .then((res)=>res.json())
    .then((cityData)=>{

        console.log( 'city------>',cityData.data);
        setCities(cityData.data)
    })
    .catch((err)=> err);
    */
  },[])

  //function defination
  let bsnsRegister= (e)=>{
    e.preventDefault();
    //alert('ok')
    let busname= document.querySelector('input[name="businessname"]').value;
    let city= document.querySelector('select[name="city_id"]').value;
    let buscat= document.querySelector('select[name="business_id"]').value
    let payload = {
                    "data": {
                      "Name": busname,
                      "bussiness": buscat,
                      "cities": city
                    }
                  };
                  console.log(busname)
                  console.log(buscat)
                  console.log(city)
      let token = window.localStorage.getItem('jwt_token');
      console.log(token)
    // api calling
    fetch(`${URL}/api/business-names`,{
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer "+token
      },
      body: JSON.stringify(payload)
    })
    .then(res=> res.json())
    .then(data=>{

      //console.log(data);
      if(data.data===null){
        swal("business is not registered!", `${data.error.message} `, "error");
      }
      else{
        swal("congratulations","business registered successfully", "success");
      }
    })
    .catch(err=>err)
  };

  let getCountry = (e) => {
    //alert('okokok');
    console.log('Country====>', e.target.value);
    let countryId = e.target.value;

    fetch(`${URL}/api/states?filters[country][id][$eq]=${countryId}`)
    .then(res=>res.json())
    .then((stateData) =>{

        console.log('states by id===>',stateData.data);
        setStates(stateData.data)
    })
    .catch(err=>err)
  }

  let getState = (e) => {
    //alert('okokok');
    console.log('state====>', e.target.value);
    let stateId = e.target.value;

    fetch(`${URL}/api/cities?filters[state][id][$eq]=${stateId}`)
    .then(res=>res.json())
    .then((cityData) =>{

        console.log('cities by id===>',cityData.data);
        setCities(cityData.data)
    })
    .catch(err=>err)
  }
  //return
    return (
        <>
        <h1 className='text-center'>business Register</h1>     
        <Form>
          <Form.Group>
          <Form.Label>Business-Category</Form.Label>
            <Form.Select name="business_id" aria-label="Default select example">
              {
                //array.map((currentvalue,index,arr)=>{},thisValue)
                businessCategories.map((cv,idx,arr)=>{

                  return <option key={idx} value={cv.id}>{cv.attributes.Name}</option>
                })
              }
            </Form.Select>
          </Form.Group>
          <br></br>
          <Form.Group>
          <Form.Label>Country</Form.Label>
            <Form.Select name="country_id" aria-label="Default select example" onChange={(e)=>{getCountry(e)}}>
              {
                //array.map((currentvalue,index,arr)=>{},thisValue)
                countries.map((cv,idx,arr)=>{

                  return <option key={idx} value={cv.id}>{cv.attributes.Name}</option>
                })
              }              
            </Form.Select>
          </Form.Group>
         
          {
            states.length !== 0 &&
            <>
               <br></br>
              <Form.Group>
                <Form.Label>State</Form.Label>
                <Form.Select name="state_id" aria-label="Default select example" onChange={(e)=>{getState(e)}}>
                  {
                    //array.map((currentvalue,index,arr)=>{},thisValue)
                    states.map((cv,idx,arr)=>{
                      
                      return <option key={idx} value={cv.id}>{cv.attributes.Name}</option>
                    })
                  }
                </Form.Select>
              </Form.Group>
            </>
          }
          {
            cities.length!==0 && 
            <>
               <br></br>
              <Form.Group>
                <Form.Label>City</Form.Label>
                <Form.Select name="city_id" aria-label="Default select example"  >
                  {
                    //array.map((currentvalue,index,arr)=>{},thisValue)
                    cities.map((cv,idx,arr)=>{

                      return <option key={idx} value={cv.id}>{cv.attributes.Name}</option>
                    })
                  }
                </Form.Select>
              </Form.Group>
            </>
          }
         
          <br></br>
          <Form.Group className="mb-3" >
            <Form.Label>Business-Name</Form.Label>
            <Form.Control name="businessname" type="text" placeholder="Enter business-name" />
          </Form.Group>
          
          <Button variant="primary" type="submit" onClick={(e)=>{ bsnsRegister(e) }}>
            Register Business
          </Button>
        </Form>
        </>
      )
}
