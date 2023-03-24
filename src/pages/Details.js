import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom';
import URL from '../Helper/url'

export default function Details() {
  //hooks area
  const [searchParams, setSearchParams] = useSearchParams();
  const [details,setDetails] = useState([])
  useEffect( ()=>{
    //alert('okokok')
    console.log('bus_id=====>',searchParams.get("bus_id"));
    fetch(`${URL}/api/business-names/${searchParams.get("bus_id")}?populate=*`)
    .then(res=>res.json())
    .then((data)=>{
        console.log('detaileee=====>',data.data.attributes.photo.data)
        setDetails(data.data.attributes.photo.data);
    })
    .catch(err=>err)
},[])

  //return
  return (
      <Carousel indicators={false}>
        {
          details.map((cv,idx,arr)=>{
            return <Carousel.Item key={idx}>
                    <img
                      className=" h-50"
                      src={ URL+cv.attributes.url}
                    />
                  </Carousel.Item>
          })
        }
        
      </Carousel>
  )
}
