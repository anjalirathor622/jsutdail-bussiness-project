//import area
import React, { useEffect, useState } from 'react'
import URL from '../Helper/url';

//function area
export default function Home() {
  //hooks area
  const[businessCategory,setBusinessCatagory] = useState([]);

  useEffect(()=>{
    fetch(`${URL}/api/bussiness-names?populate=*`)
    .then(res=>res.json())
    .then((data)=>{
      console.log(data.data);
      setBusinessCatagory(data.data);

    })
    .catch((err)=>{console.log(err)})
  })

  //funtion defination area


  //return statement
  return (
    <>
      <ul className='nav'>
        {
          businessCategory.map((cv,idx,arr)=>{
            return  (<li key={idx} className='m-3'>
                      <a href='#' className='text-center'>
                        <img src={`${URL}`+cv.attributes.logo.data.attributes.url}  /><br/>
                        {cv.attributes.name}
                      </a>
                    </li>)
          })
        }
        
      </ul>
      
    </>
  )
}
