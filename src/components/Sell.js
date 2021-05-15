import React,{ useState } from 'react';
import {Button, Col, Row, Form} from 'react-bootstrap';
import { db,storage } from "../firebase";
import { useStateValue } from "../StateProvider";
import productList from './productList'
import Modal from 'react-bootstrap/Modal'
import { useHistory } from 'react-router';

function Sell() {
    let history=useHistory();
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category,setCategory]=useState('Cereal or Pulse');
    const [image,setImage] = useState(null);
    const [url,setUrl] = useState('');
    // const [dataStored,setDataStored] = useState('')
    const [show, setShow] = useState(true);
    const handleClose = () =>{
        setShow(false);
        history.push("/login");
    } 

    const [{user,userId},dispatch] = useStateValue();
    // console.log(userId);

    const handleItemNameChange = e => {
        setItemName(e.target.value);
    };

    const handlePriceChange = e => {
        setPrice(e.target.value);
    };

    const handleDescriptionChange = e => {
        setDescription(e.target.value);
    };

    const onChangeCategory = (e) =>{  
        setCategory(e.target.value);
    }

    const addFile = e => {
        console.log(e.target.files[0]);
        if(e.target.files[0]) {
            setImage(e.target.files[0])
        }
    }

    

    const handleSubmit = (e)=> { 
        e.preventDefault();

            const uploadTask = storage.ref(`images/${image.name}`).put(image);
            uploadTask.on(
              "state_changed",
              snapshot => {},
              error => {
                console.log(error);
              },
              () => {
                storage
                  .ref("images")
                  .child(image.name)
                  .getDownloadURL()
                  .then(url => {
                    setUrl(url);
                    // console.log(url);
                    var currentdate = new Date(); 
                    var date = currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear()
                    console.log(date);
                    const itemData = {
                        sellerName:user.name,
                        itemName,
                        price,
                        description,
                        category,
                        publicKey:user.publicKey,
                        phone:user.phone,
                        city:user.city,
                        state:user.state,
                        itemImageUrl : url,
                        sellerId:userId,
                        timeStamp : date
                    }
        
                    console.log(itemData);
                    
                    db
                    .collection('Items')
                    .add(itemData)  

                    alert("Product ad posted successfully !");

                  });
              }
            );
        }
    

    return (
        user ?
        <div className="mt-5">

            <div className="sell-title">
                <strong>Enter The Product Details</strong>
            </div>
            <div className="Sell-Form">
                <Form onSubmit={handleSubmit} className="px-4">

                    <Form.Group as={Row} controlId="ItemName">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4">
                            <strong>Item Name</strong> 
                        </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.Control className="Sell-inputs" placeholder="Item Name" onChange={handleItemNameChange} required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="Price">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4">
                            <strong>Price</strong> 
                        </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.Control className="Sell-inputs" placeholder="Item Price" onChange={handlePriceChange} required/>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="Description">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4">
                            <strong>Item Description</strong> 
                        </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.Control as="textarea" rows={3} className="Sell-inputs" placeholder="Item Description" onChange={handleDescriptionChange} required maxLength="90"/>                            
                            <Form.Text id="Description-limit" muted>
                                Your item's decription must be 50-90 characters long.
                            </Form.Text>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="Category">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4"><strong>Categories</strong> </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.Control className="Sell-inputs" as="select" defaultValue="Choose a Category" onChange={onChangeCategory}>
                                <option>Cereal or Pulse</option>
                                <option>Vegetable</option>
                                <option>Fruit</option>
                            </Form.Control>
                        </Col>
                        
                    </Form.Group>

                    <Form.Group as={Row} controlId="ItemImage">
                        <Form.Label className="Sell-Labels" column lg="3" xs="4">
                            <strong>Item Image</strong> 
                        </Form.Label>
                        <Col lg="9" xs="8">
                            <Form.File type="file" onChange={addFile} id="exampleFormControlFile1" required/>
                            <Form.Text id="File-extension" muted>
                                Add image having .png, .jpg or .jpeg extensions
                            </Form.Text>
                        </Col>
                    </Form.Group>

                    <div className="text-center">
                        <Button className="Sell-submit" type="submit" >
                            Submit
                        </Button>
                    </div> 

                </Form>           
            </div>
            
        </div>:
        <Modal show={show} onHide={handleClose} centered className="error-modal">
        <Modal.Header className="error-modal-header" closeButton>
          <Modal.Title className="error-modal-title">You Need To Login</Modal.Title>
        </Modal.Header>
        <Modal.Body classNme="error-modal-body"><p>Please <a href="/login" className="login-anchor">login</a> to your account to vist this page</p></Modal.Body>
      </Modal>
    )
}

export default Sell;