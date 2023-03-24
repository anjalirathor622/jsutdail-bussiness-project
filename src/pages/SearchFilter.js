import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

export default function SearchFilter() {
  return (
    <>
        <Card className="P-3">
            <Row>
                <Col sm={3}>
                    <Card.Img className="img-fluid" variant="top" src="https://lh3.googleusercontent.com/1-mRaOuI3Pzdmsy2LUqadxoc_NCmuJuWBHfVLN0HNDbBbLkc24YMI8ovVZpHaMVu4tBUO9sXSJy-CLesV8XfQzuxTgOw9XuDdVSFv8DN" />
                </Col>
                <Col sm={9}>
                    <Card.Body>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
  </>
  )
}
