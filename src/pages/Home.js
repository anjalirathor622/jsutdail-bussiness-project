//import area
import React, { useEffect, useState } from 'react'

//function area
export default function Home() {
  //hooks area
  const[businessCategory,setBusinessCatagory] = useState([]);

  useEffect(()=>{
    fetch(`http://localhost:1337/api/bussiness-names?populate=*`)
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
            return  <li key={idx} className='me-3'>
                      <a href='#' className='text-center'>
                        <img src={'http://localhost:1337'+cv.attributes.logo.data.attributes.url} /><br/>
                        {cv.attributes.name}
                      </a>
                    </li>
          })
        }
        
      </ul>
      
    </>
  )
}
