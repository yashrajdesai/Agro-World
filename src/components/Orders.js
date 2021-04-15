import React, { useState } from 'react';
import orderList from "./orderList";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

function Orders() {

    const [clicked,setClick]=useState(true);
    const [buttonName,setButton]=useState("bought");
    const [boughtClickedByDefault,setBoughtClickedByDefault] =useState(true);

    function handleClick(event){
        setClick(true);
        setButton(event.target.id);
        setBoughtClickedByDefault(false);
    }
    return (
        <div>
            {/*<h1 className="text-center mt-4 heading">Orders</h1>*/}s
            <div className="center">
            <Button variant="success" style={ boughtClickedByDefault ? {background: '#ededed',color: '#70c745', border: '2px solid #70c745',boxShadow: '0px 1px 0px 3px #9ad0a7'} : null } className="order-button" id="bought" onClick={handleClick}>
                BOUGHT
            </Button>
            <Button variant="success" className="order-button" id="sold" onClick={handleClick}>
                SOLD
            </Button>
            </div>
            <Row>
                
              {
                clicked ? orderList.map(eachOrder=> {
                    return <Col lg={6}>
                               <Card className="order-card">
                                   <Row>
                                      <Col lg={6}>
                                         <Card.Img className="order-image" src={eachOrder.image}/>
                                      </Col>
                                      <Col lg={6}>
                                        
                                         <h3 >{eachOrder.title}</h3>
                                         
                                            <p>{buttonName === "sold" ? "MRP:-" : "Amount Spent:-"}</p>
                                            <p>{buttonName === "sold" ? "Buyer Name:Shreyas Poojari" : "Seller Name:Rahim"}</p>
                                        
                                         
                                            <p>Seller Key:xxxxx</p>
                                            <p>Buyer Key:yyyyyy</p>
                                            <strong><p>{buttonName === "sold" ? "Posted on 23/03/2021" : "Ordered on 23/03/2021"}</p></strong>
                                         
                                        
                                     </Col>
                                   </Row>
                               </Card>
                            </Col> 
                           }):null
                    }
                    
                </Row> 
        </div>
    )
}

export default Orders;