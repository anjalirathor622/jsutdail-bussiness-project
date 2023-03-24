//import area
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import URL from '../Helper/url';

//function area
export default function Home() {
  //hooks area
  const[businessCategory,setBusinessCatagory] = useState([]);

  useEffect(()=>{
    fetch(`${URL}/api/bussinesses?populate=*`)
    .then(res=> res.json())
    .then((data)=>{
      console.log(data.data);
      setBusinessCatagory(data.data);
    })
    .catch((err)=>{console.log(err)})
  },[])

  //funtion defination area


  //return statement
  return (
    <>
      <ul className='nav'>
        {
          businessCategory.map((cv,idx,arr)=>{
            return  <li key={idx} className='me-3'>
                      <Link to="/search" className='text-center'>
                        <img src={`${URL}`+cv.attributes.logo.data.attributes.url } alt="" /><br/>
                        {cv.attributes.Name}
                      </Link>
                    </li>
          })
        }
        
      </ul>
      
    </>
  )
}
