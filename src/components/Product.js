import React,{useState} from "react";
import Card from 'react-bootstrap/Card';
//import productImage from "../tomatoes.jpg";
import Grid from '@material-ui/core/Grid';
import {useHistory} from 'react-router-dom'
import {Button, Row,Container,Col} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import { useStateValue } from "../StateProvider";
// import { Container } from "@material-ui/core";

var buyerName,itemName,itemImage,buyerId,sellerId,sellerName,orderDate,postedDate,publicKey,buyerPublicKey;

function Product(props){
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [{userId,user},dispatch] = useStateValue();

  const handleClick = () => {
    var currentdate = new Date(); 
    var date = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear()
    
    itemName = props.product.itemName;
    itemImage=props.product.itemImageUrl;
    buyerId=userId;
    sellerId=props.product.sellerId;
    sellerName= props.product.sellerName;
    buyerName= user.name;
    orderDate= date;
    postedDate=props.product.timeStamp
    publicKey=props.product.publicKey;
    buyerPublicKey= user.publicKey;
    history.push('/payment')
  }
    return <>
           <Grid item lg={4} xs={12} md={6} className="grid-style">
              <Card className="card-style" onClick={handleShow}>
                <Card.Img variant="top" className="card-img" src={props.product.itemImageUrl} />
                <Card.Body style={{backgroundColor: "#70c745", color: "white"}}>
                  <Card.Title className="card-title">
                      {props.product.itemName}
                  </Card.Title>
                  <Card.Text className="card-text">
                     <p className="mrp-style">MRP:{props.product.price}</p>
                     {/*<p className="desc-style">{props.product.desc}<br/><strong>Posted on {props.product.date} by {props.product.owner}</strong><br />{props.product.city},{props.product.state}</p>
                      <p>Contact No: {props.product.phone}</p>*/}
                  </Card.Text>
                </Card.Body>
                {/*<Card.Footer className="text-center">
                  <Button size="lg" variant="success" onClick={handleClick}>Buy</Button>
                </Card.Footer>*/}
              </Card>
           </Grid>
           <Modal className="modal" show={show} onHide={handleClose} size="lg" centered>
              <Card className="modal-title-card">
                <Modal.Header closeButton>
                
                    <Modal.Title className="modal-title">AgroWorld</Modal.Title>
                
                   
                </Modal.Header>
                </Card>
                <Modal.Body>
                   <Container>
                      <Row>
                        <Col xs={6}>
                          <img className="modal-image" src={props.product.itemImageUrl} />
                        </Col>
                        <Col xs={6}>
                        <Card className="modal-card">
                            <Card.Body className="mt-6">
                               <Card.Title className="card-title-modal">
                                   {props.product.title}
                               </Card.Title>
                               <Card.Text className="card-text">
                                     <p className="mrp-style-modal">MRP:{props.product.price}</p>
                                     <p className="desc-style">{props.product.description}<br/><strong>Posted on {props.product.timeStamp} by {props.product.sellerName}</strong><br />{props.product.city},{props.product.state}</p>
                                     {/* <p>Contact No: {props.product.phone}</p> */}
                               </Card.Text>
                            </Card.Body>
                             <Card.Footer className="text-center">
                                  <Button size="lg" variant="success" onClick={handleClick}>Buy</Button>
                             </Card.Footer>
                        </Card>
                        </Col>
                      </Row>
                   </Container>
                </Modal.Body>
                {/* <Modal.Footer>
                     <Button variant="secondary" onClick={handleClose}>
                          Close
                     </Button>
                     <Button variant="primary" onClick={handleClose}>
                          Save Changes
                     </Button>
                </Modal.Footer> */}
                
           </Modal>

      </>
}

export {itemName,itemImage,buyerId,sellerId,sellerName,orderDate,postedDate,publicKey,buyerName,buyerPublicKey} 
export default Product;