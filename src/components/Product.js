import React,{useState} from "react";
import Card from 'react-bootstrap/Card';
//import productImage from "../tomatoes.jpg";
import Grid from '@material-ui/core/Grid';
import {useHistory} from 'react-router-dom'
import {Button, Row,Container,Col} from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
// import { Container } from "@material-ui/core";

var publicKey;

function Product(props){
  const history = useHistory();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const handleClick = () => {
    history.push('/payment')
    publicKey = props.product.account_no
  }
    return <>
           <Grid item lg={4} xs={12} md={6} className="grid-style">
              <Card className="card-style" onClick={handleShow}>
                <Card.Img variant="top" className="card-img" src={props.product.image} />
                <Card.Body style={{backgroundColor: "#70c745", color: "white"}}>
                  <Card.Title className="card-title">
                      {props.product.title}
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
                          <img className="modal-image" src={props.product.image} alt="modalimage"/>
                        </Col>
                        <Col xs={6}>
                        <Card className="modal-card">
                            <Card.Body className="mt-6">
                               <Card.Title className="card-title-modal">
                                   {props.product.title}
                               </Card.Title>
                               <Card.Text className="card-text">
                                     <p className="mrp-style-modal">MRP:{props.product.price}</p>
                                     <p className="desc-style">{props.product.desc}<br/><strong>Posted on {props.product.date} by {props.product.owner}</strong><br />{props.product.city},{props.product.state}</p>
                                     <p>Contact No: {props.product.phone}</p>
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

export {publicKey} 
export default Product;