import React,{ useState,useEffect } from 'react';
import { Button,Row,Container,Col, Card} from 'react-bootstrap';
import Product from "./Product";
import Grid from '@material-ui/core/Grid';
import productList from "./productList";
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';
import { db } from '../firebase';
import { useStateValue } from '../StateProvider';

const Adds = () => {

    const [{userId},dispatch] = useStateValue();
    const [myItems,setMyItems] = useState([]);

    useEffect(() => {
        
        db
        .collection('Items')
        .where('sellerId','==',userId)
        .onSnapshot(snapshot => (
            setMyItems(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        )
        )
        
    }, [])

    const removeItem = (id) => {
        db.collection('Items').doc(id).delete();
    }

    return (
        <div>
            <h1 className="text-center mt-4 heading">My Ads</h1>
            <Row>
                {
                    myItems.map((eachProduct)=>{
                    return <Col lg={4}>
                                <Card className="adds-card-style" >
                                    <IconButton onClick={() => {removeItem(eachProduct.id)}} style={{backgroundColor: "red",outline: "none",color: "white",position: "absolute",top:"8px",right: "16px",padding:"0"}}>
                                        <CloseIcon />
                                    </IconButton>
                                    <Card.Img variant="top" className="card-img" src={eachProduct.data.itemImageUrl} />
                                    <Card.Body style={{backgroundColor: "#70c745", color: "white"}}>
                                        <Card.Title className="card-title">
                                            {eachProduct.data.itemName}
                                        </Card.Title>
                                        <Card.Text className="card-text">
                                            <p className="mrp-style">MRP: {eachProduct.data.price}</p>
                                            <p className="mrp-style">{eachProduct.data.description}</p>
                                            <p className="mrp-style">Posted on: {eachProduct.data.timeStamp}</p>
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
