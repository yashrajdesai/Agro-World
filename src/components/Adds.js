import React,{ useState } from 'react';
import { Button,Row,Container,Col, Card} from 'react-bootstrap';
import Product from "./Product";
import Grid from '@material-ui/core/Grid';
import productList from "./productList";

const Adds = () => {
    return (
        <div>
            <h1 className="text-center mt-4 heading">My Ads</h1>
            <Row>
                {
                   productList.map((eachProduct)=>{
                    return <Col lg={4}>
                                <Card className="adds-card-style" >
                                    <Card.Img variant="top" className="card-img" src={eachProduct.image} />
                                    <Card.Body style={{backgroundColor: "#70c745", color: "white"}}>
                                        <Card.Title className="card-title">
                                            {eachProduct.title}
                                        </Card.Title>
                                        <Card.Text className="card-text">
                                            <p className="mrp-style">MRP: {eachProduct.price}</p>
                                            <p className="mrp-style">{eachProduct.desc}</p>
                                            <p className="mrp-style">Posted on: {eachProduct.date}</p>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                   })
                }
            </Row>

        </div>
    )
}

export default Adds
