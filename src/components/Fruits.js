import React, { useEffect, useState } from 'react';
import Product from "./Product";
import Grid from '@material-ui/core/Grid';
import productList from "./productList.js";
import { db } from '../firebase';

function Fruits() {

    const [fruitList,setFruitList] = useState([]);

    useEffect(() => {
        db
        .collection('Items')
        .where('category','==','Fruit')
        .onSnapshot(snapshot => (
            setFruitList(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        )
        )
    }, [])

    

    return (
        <div>
            <h1 className="text-center mt-4 heading">Fruits</h1>
            <Grid container>
            {
                
                fruitList.map((eachProduct,index)=>{
                    return <Product key={index} product={eachProduct.data} />
                   })
            }
            </Grid>
        </div>
        
    )
}

export default Fruits;