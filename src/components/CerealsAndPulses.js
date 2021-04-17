import React, { useEffect, useState } from 'react';
import Product from "./Product";
import Grid from '@material-ui/core/Grid';
import productList from "./productList";
import { db } from '../firebase';

function CerealsAndPulses() {

    const [pulsesList,setPulsesList] = useState([]);

    useEffect(() => {
        db
        .collection('Items')
        .where('category','==','Cereal or Pulse')
        .onSnapshot(snapshot => (
            setPulsesList(snapshot.docs.map(doc=>({
                id:doc.id,
                data:doc.data()
            })))
        )
        )
    }, [])

    return (
        <div>
            <h1 className="text-center mt-4 heading">Cereals & Pulses</h1>

            <Grid container>
               {
                pulsesList.map((eachProduct,index)=>{
                    return <Product key={index} product={eachProduct.data} />
                   })
               }
            </Grid>
        </div>
    )
}

export default CerealsAndPulses;