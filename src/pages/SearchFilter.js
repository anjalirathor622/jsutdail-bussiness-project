import React, { useEffect, useState } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Badge, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { Link, useSearchParams } from 'react-router-dom';
import URL from '../Helper/url';

export default function SearchFilter() {
    //hoooks area
    const [searchParams, setSearchParams] = useSearchParams();
    const [busiCategory, setBusiCategory] = useState([]);

    useEffect(() => {
        console.log('cat_name=====>',searchParams.get("bus_cat"));
        //http://localhost:1337/api/business-names?populate=*&filters[bussiness][Name][$containsi]=hospital
        fetch(`${URL}/api/business-names?populate=*&filters[bussiness][Name][$containsi]=${searchParams.get("bus_cat")}`)
        .then(res=>res.json())
        .then((data)=>{
            console.log('buscat=====',data.data)
            setBusiCategory(data.data)
        })
        .catch(err=>err)
    },[])

    //function defination
   
    //return
    return (
        <>
            <Row>
                <Col sm={9}>
                    <h1>Search Filter</h1>
                    {
                        //console.log('set busicat====---->',busiCategory)
                        busiCategory.map((cv,idx,arr)=>{
                                    
                            return  <Link to={'/details?bus_id=' +cv.id} key={idx}>
                                        <Card className="p-3 mb-4">
                                            <Row>
                                                <Col sm={3}>
                                                    <Card.Img className="img-fluid" variant="top" src={ URL+cv.attributes.photo.data[0].attributes.url} />
                                                </Col>
                                                <Col sm={9}>
                                                    <Card.Body>
                                                        <Card.Title>{cv.attributes.Name}</Card.Title>
                                                        <Badge className="p-2 fs-4"  bg="success">3.9</Badge> 
                                                        <span>
                                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                                <FontAwesomeIcon icon={faStar} className="text-warning" />
                                                                <FontAwesomeIcon icon={faStar} className="text-secondary" />
                                                        </span>
                                                        <span>5,551 Rating</span>
                                                        <Card.Text>
                                                            {cv.attributes.text}
                                                        </Card.Text>
                                                        <a href={'tel:'+cv.attributes.phone} className="btn btn-success" onClick={(e)=>{e.stopPropagation();}}>{cv.attributes.phoneCall}</a>
                                                    </Card.Body>
                                                </Col>
                                            </Row>                
                                        </Card> 
                                    </Link>
                            })
                    }
                     
                </Col>
                <Col sm={3}>
                    <Card style={{ width: '15rem' }}>
                        <Card.Header>Featured</Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item>Cras justo odio</ListGroup.Item>
                            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>    
        </>
    )
}
