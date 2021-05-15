import React, { useEffect, useState } from 'react';
import orderList from "./orderList";
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import { useStateValue } from "../StateProvider";
import { db } from "../firebase";
import Modal from 'react-bootstrap/Modal'
import { useHistory } from "react-router-dom"

function Orders() {
    let history = useHistory()
    const [clicked,setClick]=useState(true);
    const [buttonName,setButton]=useState("bought");
    const [boughtClickedByDefault,setBoughtClickedByDefault] =useState(true);
    const [boughtItems,setBoughtItems] = useState([]);
    const [soldItems,setSoldItems] = useState([]);
    const [sold,setSold] = useState(true);

    const [{userId,user},dispatch] = useStateValue();
    const [show, setShow] = useState(true);
    const handleClose = () =>{
        setShow(false);
        history.push("/login");
    } 
   


    useEffect(() => {
        
        db
        .collection('Orders')
        .where('buyerId','==',userId)
        .onSnapshot(snapshot => (
            setBoughtItems(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        )
        )

        db
        .collection('Orders')
        .where('sellerId','==',userId)
        .onSnapshot(snapshot => (
            setSoldItems(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        )
        )
    },[]);

    function handleClick(event){
        event.target.id === "sold" ? setSold(true) : setSold(false);
        setBoughtClickedByDefault(false);
    }
    return (
        user ? <div>
            
            <div className="center">
            <Button variant="success" className="order-button" id="bought" onClick={handleClick}>
                BOUGHT
            </Button>
            <Button variant="success" style={ boughtClickedByDefault ? {background: '#ededed',color: '#70c745', border: '2px solid #70c745',boxShadow: '0px 1px 0px 3px #9ad0a7'} : null } className="order-button" id="sold" onClick={handleClick}>
                SOLD
            </Button>
            </div>
            <Row>
                
              {
                sold ? soldItems.map(eachOrder=> {
                    return <Col lg={6}>
                               <Card className="order-card">
                                   <Row>
                                      <Col lg={6}>
                                         <Card.Img className="order-image" src={eachOrder.data.itemImage}/>
                                      </Col>
                                      <Col lg={6}>
                                        
                                         <h3 >{eachOrder.data.itemName}</h3>
                                         
                                            <p><strong>Amount </strong>: {eachOrder.data.amount}</p>
                                            <p><strong>Buyer Name </strong>: {eachOrder.data.buyerName}</p>
                                            <p><strong>Buyer Key </strong>: {eachOrder.data.buyerPublicKey}</p>
                                            <p><strong>Posted Date </strong>: {eachOrder.data.postedDate}</p>
                                            <p><strong>Order Date </strong>: {eachOrder.data.orderDate}</p>
                                     </Col>
                                   </Row>
                               </Card>
                            </Col> 
                           })
                        :
                    boughtItems.map(eachOrder=> {
                        return <Col lg={6}>
                           <Card className="order-card">
                               <Row>
                                  <Col lg={6}>
                                     <Card.Img className="order-image" src={eachOrder.data.itemImage}/>
                                  </Col>
                                  <Col lg={6}>
                                    
                                     <h3 >{eachOrder.data.itemName}</h3>
                                     
                                        <p><strong>Amount </strong>: {eachOrder.data.amount} Rs</p>
                                        
                                        <p><strong>Seller Name </strong>: {eachOrder.data.sellerName}</p>

                                        <p><strong>Seller Key </strong>: {eachOrder.data.sellerPublicKey}</p>
                                        
                                        <p><strong>Order Date </strong>: {eachOrder.data.orderDate}</p>
                                 </Col>
                               </Row>
                           </Card>
                        </Col> 
                    })
                           
            }
                    
                </Row> 
        </div> :
    
    <Modal show={show} onHide={handleClose} centered className="error-modal">
    <Modal.Header className="error-modal-header" closeButton>
      <Modal.Title className="error-modal-title">You Need To Login!!</Modal.Title>
    </Modal.Header>
    <Modal.Body classNme="error-modal-body"><p>Please <a href="/login" className="login-anchor">login</a> to your account to visit this page</p></Modal.Body>
  </Modal>
    )
}

export default Orders;