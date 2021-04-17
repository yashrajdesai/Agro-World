import React, { useEffect, useState } from 'react';
import Product from "./Product";
import Grid from '@material-ui/core/Grid';
import productList from "./productList.js";
import { db } from '../firebase';

function Vegetables() {
    const [vegetableList,setVegetableList] = useState([]);

    useEffect(() => {
        db
        .collection('Items')
        .where('category','==','Vegetable')
        .onSnapshot(snapshot => (
            setVegetableList(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        )
        )
    }, [])


    return (
        <div>
            <h1 className="text-center mt-4 heading">Vegetables</h1>

            <Grid container>
               {
                   vegetableList.map((eachProduct,index)=>{
                    return <Product key={index} product={eachProduct.data} />
                   })
               }
            </Grid>
        </div>
    )
}

export default Vegetables;