import React,{ useState } from 'react';
import {Button, Col, Row, Form} from 'react-bootstrap';
import { db,storage } from "../firebase";
import { useStateValue } from "../StateProvider";
import productList from './productList'

function Sell() {
    const [itemName, setItemName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category,setCategory]=useState('Cereal or Pulse');
    const [image,setImage] = useState(null);
    const [url,setUrl] = useState('');
    // const [dataStored,setDataStored] = useState('')

    const [{user},dispatch] = useStateValue();

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
        if(description.length < 91 ) {}

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
                    console.log(url);
                    const itemData = {
                        itemName,
                        price,
                        description,
                        category,
                        itemImageUrl : url,
                        sellerId:user.uid,
                        timeStamp : new Date()
                    }
        
                    console.log(itemData);
                    
                    const listItemData = {
                        image:url,
                        category,
                        title:itemName,
                        price,
                        desc:description,
                        date:new Date().toISOString(),
                    }

                    productList.push(listItemData)
                    
                    db
                    .collection('Items')
                    .add(itemData)  

                    alert("Product ad posted successfully !");

                  });
              }
            );
        }
    

    return (
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
            
        </div>
    )
}

export default Sell;