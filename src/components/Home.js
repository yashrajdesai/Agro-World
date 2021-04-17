import React,{ useState,useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { Jumbotron, Container, Button} from 'react-bootstrap';
import { db } from "../firebase";
import Product from "./Product";
import Grid from '@material-ui/core/Grid';
import productList from "./productList";

function Home() {

    
    const history = useHistory();
    const [isStripShown,setIsStripShown]=useState(true);
    const [items,setItems] = useState([]);
    
    useEffect(() => {
        
        db
        .collection('Items')
        .onSnapshot(snapshot => (
            setItems(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        )
        )
        console.log(items);
    },[]);


    const routeChange = () =>{ 
        let path = `/payment`; 
        history.push(path);
    }

    const closeStrip  = () =>{ 
        setIsStripShown(false);
    }

    return (
        <div> 
            {isStripShown===true && 
            <div className="statistics-strip">
                Please visit our <a href="/statistics" className="statistics-anchor">statistics</a> page to get to know about our impact . You can donate to our project using this public key 0x7691B75d3aAED69F63d15bDe4490d926CAD94C93 .
                <Button className="mx-4 my-2 donate-button" variant="light" onClick={routeChange}>Donate</Button> 
                <Button className="mr-1 close" onClick={closeStrip}>&times;</Button>    
            </div>} 
                    
            <Jumbotron fluid className="jumbotron">
                <Container >                       
                    <h1 className="agroworld">Agro World</h1>
                </Container>
            </Jumbotron>
            <Grid container className="grid-container">
               {
                items.map((eachProduct,index)=>{
                    return <Product key={index} product={eachProduct.data} />
                   })
               }
            </Grid>
        </div>
        
    )
}

export default Home
